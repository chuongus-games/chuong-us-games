#!/usr/bin/env node
/* Regenerates the CSP script-src hash allowlist in vercel.json from every inline
   <script> block on the site. Run this after ANY change to inline script content
   (new game page, edited inline script in index/profile/admin.html) — CSP hashes
   are exact-byte, so a stale hash silently blocks the script (console CSP error,
   page looks broken with no on-page message). See [[feedback_new_game_checklist]]. */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.join(__dirname, '..');
const files = fs.readdirSync(path.join(root, 'games'))
  .filter(f => f.endsWith('.html'))
  .map(f => path.join('games', f))
  .concat(['index.html', 'profile.html', 'admin.html']);

const hashes = new Set();
for (const f of files) {
  const html = fs.readFileSync(path.join(root, f), 'utf8');
  const re = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g;
  let m;
  while ((m = re.exec(html))) {
    const content = m[1];
    if (!content.trim()) continue;
    const hash = crypto.createHash('sha256').update(content, 'utf8').digest('base64');
    hashes.add("'sha256-" + hash + "'");
  }
}

const vercelPath = path.join(root, 'vercel.json');
const vercel = JSON.parse(fs.readFileSync(vercelPath, 'utf8'));
const cspHeader = vercel.headers[0].headers.find(h => h.key === 'Content-Security-Policy');
const sortedHashes = [...hashes].sort();
const newScriptSrc = "script-src 'self' " + sortedHashes.join(' ') + " https://cdn.jsdelivr.net https://accounts.google.com";
cspHeader.value = cspHeader.value.replace(/script-src[^;]+/, newScriptSrc);
fs.writeFileSync(vercelPath, JSON.stringify(vercel, null, 2) + '\n');

console.log('Scanned', files.length, 'pages,', hashes.size, 'unique inline-script hashes.');
console.log('vercel.json updated.');
