/* Chuong US Games — lightweight i18n. Base language is English; auto-detects
   the visitor's browser language and swaps text for supported locales. */
(function () {
  const SUPPORTED = ['en', 'vi', 'zh', 'es', 'pt'];

  function detectLang() {
    const langs = (navigator.languages && navigator.languages.length) ? navigator.languages : [navigator.language || 'en'];
    for (const l of langs) {
      const primary = String(l).toLowerCase().split('-')[0];
      if (SUPPORTED.indexOf(primary) !== -1) return primary;
    }
    return 'en';
  }

  /* small chevrons as inline SVG, not Unicode ◂▸▶ — those have no glyph on some
     mobile system fonts (same root cause as the sign-out icon bug) */
  const ARROW_L = '<svg class="i18n-arrow" viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><path d="M15 4L7 12L15 20Z"/></svg>';
  const ARROW_R = '<svg class="i18n-arrow" viewBox="0 0 24 24" width="10" height="10" fill="currentColor"><path d="M9 4L17 12L9 20Z"/></svg>';

  const DICT = {

    en: {
      common: {
        back: ARROW_L + ' Games', backAll: ARROW_L + ' Back to all games', play: 'PLAY ' + ARROW_R, moreHardGames: 'More hard games:',
        leaderboard: '🏆 Leaderboard', top10: '🏆 Top 10 — {game}', loading: 'Loading…',
        noScoresYet: 'No scores yet — be the first! 🔥', scoreSavedAuto: 'Your best score is saved automatically.',
        signInToBoard: 'Sign in with Google to get on the board!', signInToPlayTitle: 'Sign in to play',
        signInToPlayBody: 'Sign in with Google to play {game}, save your best scores and climb the leaderboard.',
        signInGoogleFallback: 'Sign in with Google', player: 'player', signOutTitle: 'Sign out', close: 'Close',
        start: 'START', goal: 'GOAL', playsLine: ARROW_R + ' <b>{n}</b> plays',
        pin: 'Pin to favorites', unpin: 'Remove from favorites',
        donate: 'Donate', donateTooltip: 'Support Chuong US Games via PayPal ❤️'
      },
      index: {
        tagline: 'Easy to play · Hard to win', heroLine1: 'Simple to play', heroLine2: 'Extremely hard to win',
        heroP: 'New games added all the time — no install needed. Click and play. Think you can beat them all? 🔥',
        cta: 'PLAY NOW',
        introP: 'Chuong US Games is a free collection of hard games you can play online with no download and no signup. Each one takes ten seconds to learn — flappy-style tapping, bullet dodging, aim training, reaction speed, memory, maze and more — but very few players manage to beat their own best score. If you\'re looking for a genuinely difficult game to test your reflexes and patience, start below.',
        searchPlaceholder: '🔍 Search games… (e.g. flappy, aim, maze)', faqTitle: 'Frequently asked questions',
        faq1Q: 'What makes these games hard?',
        faq1A: 'Every game here has simple, one-line rules but tight timing, precision or reflex requirements. Most players won\'t beat their own best score on the first few tries.',
        faq2Q: 'Are the hard games free to play?',
        faq2A: 'Yes — all games are free, with no download and no signup required. A free account only unlocks the leaderboard.',
        faq3Q: 'Do I need to download anything to play?',
        faq3A: 'No. Every game runs directly in your browser on desktop or mobile.',
        footer: '© 2026 Chuong.us | chuonglife@gmail.com',
        card: {
          flappy: 'Tap to fly through the gaps. Everyone knows how to play. Almost nobody scores 10.',
          dodge: 'Guide the blue square through spinning bullets to the goal. One touch sends you back to start.',
          reaction: 'Click the instant the screen turns green. Under 200ms is the only score that counts.',
          timer: 'Stop the clock at exactly 1.000 seconds. One millisecond off is a loss.',
          memory: 'Watch and repeat an ever-growing color sequence. How far can your brain go?',
          avoid: 'Dodge a meteor shower that keeps speeding up. Survive one second at a time.',
          stack: 'Stack blocks with perfect timing. Any overhang gets sliced off — run out and you\'re done.',
          aim: 'Hit 20 shrinking targets as fast as you can. Every miss adds a penalty.',
          maze: 'Trace your cursor through a narrow corridor to the goal. Touch a wall — back to start.',
          runner: 'Jump over spikes at ever-increasing speed. How far can you run?',
          colorrush: 'Tap only when the card matches the target color. One wrong tap or one miss ends your streak.',
          numrush: 'Tap 1 to 25 in order as fast as you can. Every wrong tap costs you a second.',
          serpent: 'Steer a growing snake around a 20x20 grid. Every bite makes it faster — one wrong turn ends the run.',
          keystrike: 'Type each falling word before it hits the bottom line. Speed keeps climbing — one missed word ends it.',
          siege: 'Weave through bullets fired at you from every direction at once. Survive one second at a time.',
          breaker: 'Bounce the ball and clear every brick. Boards refill faster each time — miss once and it\'s over.',
          slice: 'Swipe to slice glowing orbs before they fall. One bomb sliced by mistake ends the run instantly.',
          gravity: 'Flip gravity to switch between floor and ceiling, dodging spikes on both sides. Speed never stops climbing.',
          echo: 'Tap the instant the shrinking ring lines up with the target. The window gets smaller every round.',
          catch: 'Slide the bucket to catch only the target color. Catch one wrong color and the run is over.',
          voidjumper: 'Charge, aim, and leap between crumbling platforms while the void scrolls up faster every second.',
          laneswitch: 'Slide between 3 lanes to dodge oncoming blocks. Speed never stops climbing — sometimes only one lane stays open.',
          tiltbalance: 'Tilt a shrinking platform to keep the ball rolling — dodge holes, don\'t fall off the edge.',
          flashgrid: 'Tap the blue cell before it fades — never touch the red trap, or it\'s game over instantly.',
          grappleswing: 'Hold to fire a grappling hook, swing like a pendulum, and let go at the top of the arc to fly to the next anchor.',
          eyetrick: 'Tap the true ink color, not the word — the classic Stroop-effect trap with a shrinking timer.',
          focuslock: 'Track one glowing dot as it blends into an identical swarm and bounces around — lose sight of it and it\'s game over.',
          trajectory: 'Pull back like a slingshot and release to arc a shot at a distant ring — wind makes every shot harder to call.'
        }
      },
      profile: {
        title: '👤 My Profile', sub: 'Your username, games played, best scores and ranks.',
        signInNote: 'Sign in with Google to save scores, compete on leaderboards and edit your profile.',
        usernameLabel: 'Username', usernamePlaceholder: 'your_name', save: 'Save',
        countryLabel: '🌍 Country', countryPlaceholder: 'Select your country', countryNote: 'Shown as a flag next to your name on leaderboards.',
        usernameInvalid: '⚠️ 3–20 chars, letters/numbers/_ only.', usernameTaken: '⚠️ That username is taken.',
        saved: '✅ Saved!', gamesPlayed: '🎮 Games played', noScores: 'No scores yet. ',
        goPlay: 'Go play something challenging 🔥', tableGame: 'Game', tableBest: 'Best', tablePlays: 'Plays', tableRank: 'Rank',
        favoritesTitle: '⭐ Favorite games', noFavorites: 'No favorites yet — tap ☆ on any game to pin it here.'
      },
      admin: {
        title: '📊 Admin Dashboard', sub: 'Player and play statistics per game. Admin only.',
        signInRequired: 'Admin access requires sign-in.', notAdmin: '⛔ This account is not an admin.',
        overview: 'Overview', registeredPlayers: 'REGISTERED PLAYERS', totalPlaysAll: 'TOTAL PLAYS (ALL VISITORS)',
        perGame: 'Per game', tableGame: 'Game', tablePlayersWithScores: 'Players with scores',
        tablePlaysByPlayers: 'Plays by players', tableTotalPlays: 'Total plays'
      },
      game: {
        flappy: {
          hint: 'Tap / click / press Space to fly. The gap drifts up and down as each pipe approaches — time your flight to where it will be, not where it is now. Pass a gap to score 1 point.',
          seoNote: 'Flappy Neon is a hard tap-to-fly game you can play free online, right in your browser. Unlike a static gap, each pipe\'s opening drifts up and down as it approaches, so you have to predict where it will be, not just react to where it is now — scoring past 10 makes this one of the hardest tap-and-fly games around.',
          tapToStart: 'Tap to start', gameOver: 'Nice try! Tap to play again', bestLabel: 'BEST {n}'
        },
        dodge: {
          hint: 'Use arrow keys / WASD (or drag with your finger) to move the blue square from START to GOAL. Touch a pink bullet = back to start.',
          seoNote: 'Hardest Dodge is a free online bullet-dodging game built for players who want a real challenge. Guide the blue square through spinning bullets to the goal — one touch and it\'s back to start, making this one of the hardest dodge games online.',
          statusLine: 'Wins: {wins}   Retries: {deaths}', winsLabel: 'WINS {n}'
        },
        reaction: {
          hint: 'Average human: ~250ms. Gamer: ~180ms. What about you?',
          seoNote: 'This free reaction test game measures how fast your reflexes really are. Click the instant the screen turns green — anything under 200 milliseconds is a good score, which makes consistent results one of the harder reflex challenges online.',
          clickToStartTitle: 'Click to start',
          clickToStartBody: 'Wait for the screen to turn GREEN, then click as fast as you can.<br>Clicking early on RED = foul.',
          waitTitle: 'Wait for green…', waitBody: 'Don\'t click yet!', goTitle: 'CLICK NOW!',
          tooSoonTitle: '⏳ Too soon!', tooSoonBody: 'Wait for green. Tap to try again.',
          rankLightning: '🏆 Lightning!', rankFast: '⚡ Very fast', rankOk: '👍 Not bad', rankSlow: '🐢 A bit slow…',
          tapAgain: 'Tap to go again.', bestMsLabel: 'BEST {n}ms'
        },
        timer: {
          hint: 'Off by ≤ 0.010s: godlike · ≤ 0.030s: pass · > 0.030s: fail. Your score is your win streak.',
          seoNote: 'Perfect Second is a hard timing game with one rule: stop the clock at exactly 1.000 seconds. There\'s no visual cue to help — one millisecond off counts as a loss, making this one of the hardest precision games you can play free online.',
          initialMsg: 'Press START — the clock runs and <b>HIDES after 0.3s</b>.<br>Press STOP at exactly <b>1.000 seconds</b>.',
          startBtn: 'START', stopBtn: 'STOP', runningMsg: 'Count in your head… press STOP at <b>1.000s</b>!',
          godlike: '🏆 <b>{s}s</b> — GODLIKE! Off by {ms}ms', pass: '✅ <b>{s}s</b> — Pass! Off by {ms}ms',
          fail: '<b>{s}s</b> — Off by {ms}ms — try again!', winStreak: '🔥 Win streak: {n}', bestStreakLabel: 'BEST STREAK {n}'
        },
        memory: {
          hint: 'Watch the sequence, then the 4 pads swap positions before your turn — remember each step by COLOR, not by where it was. The sequence grows every round and plays FASTER each time. One wrong note ends the round.',
          seoNote: 'Neon Memory is a free hard memory game online: watch a color sequence, then repeat it back — but the pads shuffle to new positions before you answer, so spatial muscle memory won\'t save you, only true color recall will. Every round adds one more step, so a single slip ends the run.',
          initialStatus: 'Memorize the sequence — then repeat it in order', watch: '👀 Watch closely…',
          yourTurn: '🎮 Your turn!', almost: 'Almost! You reached round {n}', perfect: '✅ Perfect!',
          round: 'Round {n}', start: 'START', playAgain: 'PLAY AGAIN', bestLabel: 'BEST {n}'
        },
        avoid: {
          hint: 'Move your mouse / drag your finger to dodge the meteors. Score = seconds survived.',
          seoNote: 'Meteor Rain drops you into a constant meteor shower that keeps speeding up. It\'s a free hard avoid game online with no safe pattern to memorize — just fast reflexes and a bit of luck to survive one more second.',
          tapToStart: 'Tap to start', gameOver: 'So close! Tap to play again', bestSecLabel: 'BEST {n}s'
        },
        stack: {
          hint: 'Tap / Space to drop the block. Any overhang gets sliced off — blocks get thinner, speed gets faster.',
          seoNote: 'Neon Stack is a free hard stacking game online built around one skill: timing. Drop each block with precision or the overhang gets sliced off — run out of block and the tower is done, which is what makes this one of the harder stack games out there.',
          gameOver: 'So close! Tap to play again', bestLabel: 'BEST {n}'
        },
        aim: {
          hint: 'Hit 20 targets — each one smaller than the last. Every miss adds a +1s penalty. Lowest time wins.',
          seoNote: 'This free online aim trainer is built to punish sloppy clicks: hit 20 shrinking targets as fast as possible while every miss adds a time penalty. It\'s a hard aim training game whether you\'re warming up or just chasing a better score.',
          tapToStart: 'Tap to start — 20 targets', statsLine: '🎯 {hit}/{total}   ❌ {miss}   ⏱ {el}s',
          missPenalty: '(includes {miss}s miss penalty) — Tap to retry', bestSecLabel: 'BEST {n}s'
        },
        maze: {
          hint: 'Enter the START box, then trace the dark corridor to GOAL before the timer runs out. Touch the bright area = back to start. Mobile: drag your finger.',
          seoNote: 'Wire Maze is a free steady-hand maze game online: trace your cursor through a narrow corridor to the goal before the clock runs out, and touching a wall sends you straight back to start. Simple to understand, genuinely hard to finish.',
          moveIntoStart: 'Move your cursor into START', headToGoal: 'Head to GOAL — don\'t touch the bright walls!',
          wallTouched: 'Wall touched — back to START!', cleared: '🏆 CLEARED! Enter START to go again.',
          outOfBounds: 'Out of bounds — back to START!', timeUp: '⏰ Too slow — back to START!',
          statusLine: '{msg}   (Wins {wins} · Retries {deaths})', winsLabel: 'WINS {n}'
        },
        runner: {
          hint: 'Tap / Space to jump over the spikes. Speed increases forever — score is distance.',
          seoNote: 'Spike Runner is a free hard endless runner game online. Jump the spikes, survive the speed increases, and see how far you can get — a simple format that turns into one of the hardest runner games once the pace picks up.',
          tapToStart: 'Tap to run', gameOver: 'Great run! Tap to go again', bestMLabel: 'BEST {n}m'
        },
        colorrush: {
          hint: 'Tap only when the card\'s color matches the TARGET swatch. Tapping the wrong color or missing a match resets your streak — the window gets shorter the longer you survive.',
          seoNote: 'Color Rush is a free online go/no-go reflex game: watch the target color, then tap only when the flashing card matches it. Tap the wrong color or hesitate on a real match and your streak is gone, which makes staying calm under a shrinking time window one of the hardest reflex challenges around.',
          targetLabel: 'TARGET', tapToStartTitle: 'Tap to start',
          tapToStartBody: 'Watch the TARGET color. Tap the card only when it matches — don\'t tap when it doesn\'t!',
          mistakeTapWrong: '❌ Wrong color — streak of {n} saved, now reset!', mistakeMissedMatch: '⏰ Missed it — streak of {n} saved, now reset!',
          streakLabel: 'Streak {n}', bestStreakLabel: 'BEST STREAK {n}'
        },
        numrush: {
          hint: 'Tap 1, 2, 3… all the way to 25, in order, as fast as you can. Every wrong tap adds a +1s penalty. Lowest time wins.',
          seoNote: 'Number Rush is a free online speed and focus game built on the classic Schulte grid: find and tap every number from 1 to 25 in order, as fast as possible, while a single wrong tap costs you a time penalty. Simple to explain, brutally hard to do quickly.',
          tapToStart: 'Tap 1 to begin — find every number in order', findLabel: 'Find {n}',
          missPenalty: '(includes {miss}s miss penalty)', bestLabel: 'BEST {n}s'
        },
        serpent: {
          hint: 'Arrow keys / WASD, or swipe on mobile, to steer. Eat the dot to grow — speed increases every time. Hit a wall or your own tail and it\'s over.',
          seoNote: 'Neon Serpent is a free hard snake game online: steer a growing serpent around a 20x20 grid, eating dots while dodging the walls and your own ever-longer tail. The rules are the classic ones everyone knows — the speed ramp is what makes this one of the hardest snake games to play for very long.',
          tapToStart: 'Tap or press any arrow key to start', gameOver: 'Nice run! Tap to play again', bestLabel: 'BEST {n} pts'
        },
        keystrike: {
          hint: 'Type the glowing word before it reaches the red line at the bottom. Wrong keys are ignored — just keep typing. Speed increases with every word.',
          seoNote: 'Keystrike is a free hard typing game online: words fall from the top and you must type each one, letter by letter, before it crosses the bottom line. It starts slow but the fall speed and spawn rate keep climbing, making sustained accuracy at speed one of the hardest typing challenges you\'ll find in a browser.',
          tapToStart: 'Tap here or press any key to start', mobileHint: 'On mobile, tap the lane to bring up your keyboard.',
          gameOver: 'Nice typing! Tap to go again', bestLabel: 'BEST {n} words'
        },
        siege: {
          hint: 'Move your mouse / drag your finger to weave through incoming fire from every side. Score = seconds survived.',
          seoNote: 'Neon Siege drops you in the middle of an open arena under fire from every direction at once. It\'s a free hard survival game online with nothing to memorize — bullets are aimed at you the instant they spawn, so only continuous movement and quick reflexes keep you alive one more second.',
          tapToStart: 'Tap to start', gameOver: 'So close! Tap to play again', bestSecLabel: 'BEST {n}s'
        },
        breaker: {
          hint: 'Move your mouse / drag your finger to steer the paddle. Tap / Space to launch. Clear every brick — the board refills faster each time. Miss once and it\'s over.',
          seoNote: 'Neon Breaker is a free hard brick-breaking game online: keep the ball alive with your paddle while clearing full boards of bricks. Every cleared board brings back a fresh set at a slightly faster ball speed, so staying alive for a long run is what makes this one of the hardest brick games you\'ll find in a browser.',
          tapToStart: 'Tap or press Space to launch', gameOver: 'Nice run! Tap to play again', bestLabel: 'BEST {n} bricks'
        },
        slice: {
          hint: 'Swipe across the orbs in the direction their arrow points to slice them — wrong direction just misses, no penalty. Slicing a bomb in ANY direction ends the run instantly.',
          seoNote: 'Neon Slice is a free fast-paced slicing game you can play online in your browser. Orbs launch from the bottom and arc through the air, each marked with a required slice direction — swipe the right way to score, while one bomb sliced in any direction ends the run instantly, making precise directional aim at speed one of the hardest slicing challenges online.',
          tapToStart: 'Swipe to start', gameOver: 'Sliced a bomb! Swipe to play again', bestLabel: 'BEST {n}'
        },
        gravity: {
          hint: 'Tap / Space to flip gravity between floor and ceiling. Dodge the spikes — speed increases forever.',
          seoNote: 'Gravity Flip is a free hard runner game online: flip gravity to send your block sticking to the floor or the ceiling, dodging spikes on both sides as the speed keeps climbing. Simple one-button rule, brutally hard to keep alive for long — one mistimed flip and it\'s over.',
          tapToStart: 'Tap to start', gameOver: 'Nice run! Tap to go again', bestMLabel: 'BEST {n}m'
        },
        echo: {
          hint: 'Tap / click / press Space the instant the shrinking ring lines up with the dashed target ring. Too early, too late, or no tap at all ends the run.',
          seoNote: 'Echo Tap is a free online rhythm precision game: a ring shrinks toward a fixed target, and you must tap the exact instant they align. Every successful tap speeds things up and shrinks the tolerance window, making sustained precision one of the hardest timing challenges you\'ll find in a browser.',
          tapToStart: 'Tap to start', gameOver: 'So close! Tap to try again', bestLabel: 'BEST {n}'
        },
        catch: {
          hint: 'Move your mouse / drag your finger to slide the bucket. Catch only the gems matching the TARGET swatch — catching the wrong color ends the run. Missing a good gem is fine, just try again.',
          seoNote: 'Prism Catch is a free online color-matching game: gems of every color fall from the top and you must catch only the ones matching the current target color. Missing a good gem costs nothing, but catching a single wrong color ends the run instantly — and the target keeps changing, making sustained focus one of the hardest catching challenges around.',
          targetLabel: 'TARGET', tapToStart: 'Tap to start', gameOver: 'Wrong color! Tap to try again', bestLabel: 'BEST {n}'
        },
        voidjumper: {
          hint: 'Press and hold to charge a jump — drag left/right while charging to aim, release to leap. The void scrolls up forever, faster and faster.',
          seoNote: 'Void Jumper is a free hard vertical platformer online. Charge your jump, aim between tiny floating platforms — some crumble the instant you land, some drift sideways — while the screen auto-scrolls upward at increasing speed. Fall behind or miss a platform and it\'s over. How high can you climb?',
          tapToStart: 'Tap to start', gameOver: 'Fell into the void! Tap to try again', bestMLabel: 'BEST {n}m'
        },
        laneswitch: {
          hint: 'Arrow keys / A-D (or tap left/right on the road) to switch lanes. Dodge the blocks — speed climbs forever and sometimes only one lane stays open.',
          seoNote: 'Lane Switch is a free hard online reflex game across 3 lanes: blocks slide toward you and you must slide between left, middle and right to survive. There\'s always exactly one safe lane, but as speed keeps climbing, spotting it and reacting in time becomes one of the hardest dodge challenges you\'ll find in a browser.',
          tapToStart: 'Tap or press ←/→ to start', gameOver: 'So close! Tap to play again', bestMLabel: 'BEST {n}m'
        },
        tiltbalance: {
          hint: 'Move your mouse / drag your finger left-right (or use arrow keys) to tilt the platform and roll the ball. Don\'t let it fall off the ends or drop through a hole. The platform shrinks and holes appear as you survive longer.',
          seoNote: 'Tilt Balance is a free hard online physics game: tilt a narrow platform by moving your mouse to keep a neon ball rolling safely on top. The platform slowly shrinks from both ends and random holes open up over time, forcing constant, precise micro-adjustments. Score is the number of seconds you keep the ball alive, and staying in control for a long run is what makes this one of the hardest balance games in a browser.',
          tapToStart: 'Tap / click to start', gameOver: 'Game over — tap to retry', bestSecLabel: 'BEST {n}s'
        },
        flashgrid: {
          hint: 'Tap the glowing BLUE cell before it fades out. Never tap the RED trap cell — that\'s instant game over. Missing a blue cell costs a life; you have 3.',
          seoNote: 'Flash Grid is a free online reflex grid game: a random cell flashes blue and you must tap it before it fades, while occasional red trap cells must never be touched. The lit window shrinks and traps appear more often as your score climbs, making split-second color recognition and restraint the key to a high score in this brutally hard reaction test.',
          bestLabel: 'BEST {n}', scoreLabel: 'Score: {n}', tapToStartTitle: 'Tap to start', tapToStartBody: 'Tap the blue cell before it fades. Never tap red.',
          gameOverTitle: 'Game Over', finalScoreLabel: 'Score: {n}', tapToRestart: 'Tap to play again'
        },
        grappleswing: {
          hint: 'Hold to fire the hook and swing like a pendulum. Let go at the top of the arc to fly to the next anchor — time it right or fall.',
          seoNote: 'Grapple Swing is a free hard physics game online: hold to grapple onto anchor points ahead, build momentum swinging like a pendulum, then release at exactly the right instant to sail forward and catch the next hook. Anchors get trickier to reach as you go. Miss the timing and gravity takes you down. Simple one-button rule, punishing precision.',
          tapToStart: 'Hold to start swinging', gameOver: 'Fell! Tap to try again', bestLabel: 'BEST {n}'
        },
        eyetrick: {
          hint: 'A color word appears painted in a different ink color. Tap the button matching the INK COLOR, not what the word says — the time window shrinks as your score climbs. Wrong tap or timeout costs a life. 3 lives total.',
          seoNote: 'Eye Trick is a free online reflex game built on the Stroop effect, a famous cognitive-science phenomenon where reading a color word interferes with naming the ink color it\'s printed in. Tap only the true ink color while the clock shrinks with every correct answer, and occasional matching trials test whether you\'re actually looking or just reading on autopilot.',
          tapToStart: 'Tap to start — tap the INK COLOR, not the word!', gameOver: 'Game over — tap to try again', bestLabel: 'BEST {n}'
        },
        focuslock: {
          hint: 'Watch the yellow dot, then track it as every dot mixes together. When they stop, tap the one you tracked. Wrong tap costs a life — you have 3.',
          seoNote: 'Focus Lock is a free online attention game built on multiple object tracking, a classic cognitive-science test of sustained visual attention. One dot flashes briefly, then blends back into an identical swarm that drifts and bounces for several seconds. Losing your target for even a moment ends the streak, making this one of the hardest focus games you can play in a browser — no download required.',
          tapToStart: 'Tap to start', roundLabel: 'Round {n}', revealMsg: 'Watch the yellow dot!', trackMsg: 'Track it!', chooseMsg: 'Tap the dot you tracked',
          gameOver: 'Game Over', finalLine: 'You reached round {n} — Tap to play again', bestLabel: 'BEST {n}'
        },
        trajectory: {
          hint: 'Drag back from the launch point like a slingshot, then release to fire. Farther drag = more power. Hit the neon ring to score — 3 misses and it\'s over.',
          seoNote: 'Trajectory is a free online artillery aim game built around real parabolic physics: pull back to set angle and power, then release to launch a glowing shot at a distant ring. Distance, target size, wind and vertical drift all ramp up with your score, making sustained accuracy one of the hardest aiming challenges you\'ll find in a browser.',
          scoreLabel: 'Score: {n}', distanceLabel: 'DIST {n}m', windLabel: 'WIND {dir} {n}', tapToStart: 'Drag back from the anchor to aim — release to fire',
          gameOver: 'Game Over — tap to try again', bestLabel: 'BEST {n}'
        }
      }
    },

    vi: {
      common: {
        back: ARROW_L + ' Trò chơi', backAll: ARROW_L + ' Về tất cả trò chơi', play: 'CHƠI ' + ARROW_R, moreHardGames: 'Trò chơi khó khác:',
        leaderboard: '🏆 Bảng xếp hạng', top10: '🏆 Top 10 — {game}', loading: 'Đang tải…',
        noScoresYet: 'Chưa có điểm nào — hãy là người đầu tiên! 🔥', scoreSavedAuto: 'Điểm cao nhất của bạn được tự động lưu.',
        signInToBoard: 'Đăng nhập bằng Google để lên bảng xếp hạng!', signInToPlayTitle: 'Đăng nhập để chơi',
        signInToPlayBody: 'Đăng nhập bằng Google để chơi {game}, lưu điểm cao nhất và leo lên bảng xếp hạng.',
        signInGoogleFallback: 'Đăng nhập bằng Google', player: 'người chơi', signOutTitle: 'Đăng xuất', close: 'Đóng',
        start: 'BẮT ĐẦU', goal: 'ĐÍCH', playsLine: ARROW_R + ' <b>{n}</b> lượt chơi',
        pin: 'Ghim vào yêu thích', unpin: 'Bỏ ghim yêu thích',
        donate: 'Ủng hộ', donateTooltip: 'Ủng hộ Chuong US Games qua PayPal ❤️'
      },
      index: {
        tagline: 'Dễ chơi · Khó thắng', heroLine1: 'Chơi thì dễ', heroLine2: 'Thắng thì cực khó',
        heroP: 'Trò chơi mới được thêm liên tục — không cần cài đặt. Bấm và chơi ngay. Bạn nghĩ mình có thể vượt qua tất cả? 🔥',
        cta: 'CHƠI NGAY',
        introP: 'Chuong US Games là bộ sưu tập trò chơi khó miễn phí, chơi trực tuyến, không cần tải về hay đăng ký. Mỗi trò chỉ mất mười giây để học — bay né kiểu flappy, né đạn, luyện ngắm, tốc độ phản xạ, trí nhớ, mê cung và nhiều hơn nữa — nhưng rất ít người chơi vượt qua được điểm cao nhất của chính mình. Nếu bạn đang tìm một trò chơi thực sự thử thách phản xạ và sự kiên nhẫn, hãy bắt đầu bên dưới.',
        searchPlaceholder: '🔍 Tìm trò chơi… (vd: flappy, aim, maze)', faqTitle: 'Câu hỏi thường gặp',
        faq1Q: 'Điều gì khiến các trò chơi này khó?',
        faq1A: 'Mỗi trò chơi ở đây có luật chơi đơn giản chỉ một dòng, nhưng đòi hỏi thời gian, độ chính xác hoặc phản xạ cực kỳ chặt chẽ. Hầu hết người chơi không thể vượt qua điểm cao nhất của chính mình ngay từ những lần thử đầu tiên.',
        faq2Q: 'Các trò chơi khó này có miễn phí không?',
        faq2A: 'Có — tất cả trò chơi đều miễn phí, không cần tải về hay đăng ký. Tài khoản miễn phí chỉ mở khóa bảng xếp hạng.',
        faq3Q: 'Tôi có cần tải gì để chơi không?',
        faq3A: 'Không. Mọi trò chơi chạy trực tiếp trên trình duyệt của bạn, cả máy tính lẫn di động.',
        footer: '© 2026 Chuong.us | chuonglife@gmail.com',
        card: {
          flappy: 'Chạm để bay qua khe hở. Ai cũng biết cách chơi. Gần như không ai đạt điểm 10.',
          dodge: 'Dẫn ô vuông xanh vượt qua các viên đạn xoay để tới đích. Chạm một cái là quay lại từ đầu.',
          reaction: 'Bấm ngay khi màn hình chuyển xanh. Dưới 200ms mới được tính điểm.',
          timer: 'Dừng đồng hồ đúng 1.000 giây. Lệch một mili giây là thua.',
          memory: 'Xem và lặp lại chuỗi màu ngày càng dài. Trí nhớ của bạn đi được bao xa?',
          avoid: 'Né mưa thiên thạch ngày càng nhanh. Sống sót từng giây một.',
          stack: 'Xếp chồng khối với thời điểm hoàn hảo. Phần thừa sẽ bị cắt — hết khối là hết game.',
          aim: 'Bắn trúng 20 mục tiêu đang co nhỏ dần nhanh nhất có thể. Mỗi lần trượt bị phạt thời gian.',
          maze: 'Rê chuột qua hành lang hẹp để tới đích. Chạm tường — quay lại từ đầu.',
          runner: 'Nhảy qua chông với tốc độ tăng dần. Bạn chạy được bao xa?',
          colorrush: 'Chỉ chạm khi thẻ đúng màu mục tiêu. Chạm sai hoặc bỏ lỡ là mất chuỗi ngay.',
          numrush: 'Chạm số 1 đến 25 theo đúng thứ tự nhanh nhất có thể. Mỗi lần chạm sai bị cộng thêm 1 giây.',
          serpent: 'Điều khiển con rắn lớn dần trên lưới 20x20. Mỗi lần ăn mồi tốc độ lại tăng — rẽ sai là kết thúc.',
          keystrike: 'Gõ từng chữ đang rơi trước khi nó chạm vạch đáy. Tốc độ ngày càng tăng — bỏ lỡ một chữ là kết thúc.',
          siege: 'Lách qua đạn bắn tới từ mọi hướng cùng lúc. Sống sót từng giây một.',
          breaker: 'Nảy bóng phá hết từng viên gạch. Bảng gạch được làm đầy lại nhanh hơn mỗi lần — trượt một lần là hết.',
          slice: 'Vuốt để chém các quả cầu trước khi chúng rơi. Chém trúng một quả bom là kết thúc ngay lập tức.',
          gravity: 'Đảo trọng lực để chuyển giữa sàn và trần, né chông ở cả hai bên. Tốc độ không ngừng tăng.',
          echo: 'Chạm ngay khi vòng tròn thu nhỏ trùng với vòng mục tiêu. Cửa sổ thời gian càng lúc càng hẹp.',
          catch: 'Di chuyển giỏ để chỉ hứng đúng màu mục tiêu. Hứng nhầm một màu là kết thúc ngay.',
          voidjumper: 'Tích lực nhảy, ngắm hướng và bật nhảy giữa các bệ đang sập trong khi vực thẳm cuộn lên ngày càng nhanh.',
          laneswitch: 'Trượt giữa 3 làn đường để né chướng ngại vật. Tốc độ không ngừng tăng — đôi khi chỉ còn đúng 1 làn trống.',
          tiltbalance: 'Nghiêng bục đang ngắn dần để giữ bóng lăn an toàn — né lỗ hổng, đừng để rơi khỏi mép.',
          flashgrid: 'Chạm ô xanh trước khi nó tắt — đừng bao giờ chạm ô bẫy đỏ, nếu không sẽ thua ngay lập tức.',
          grappleswing: 'Giữ để bắn móc câu, đu như con lắc, và thả ra ở đỉnh quỹ đạo để bay tới điểm neo tiếp theo.',
          eyetrick: 'Chạm đúng màu mực thực tế, không phải nghĩa của từ — bẫy hiệu ứng Stroop kinh điển với đồng hồ đếm ngược ngắn dần.',
          focuslock: 'Theo dõi 1 chấm sáng khi nó hòa lẫn vào đàn chấm giống hệt đang di chuyển — mất dấu là thua.',
          trajectory: 'Kéo lùi như ná thun rồi thả ra để bắn cung tới vòng tròn xa — gió khiến mỗi phát bắn khó đoán hơn.'
        }
      },
      profile: {
        title: '👤 Hồ sơ của tôi', sub: 'Tên người dùng, số lần chơi, điểm cao nhất và thứ hạng của bạn.',
        signInNote: 'Đăng nhập bằng Google để lưu điểm, thi đấu trên bảng xếp hạng và chỉnh sửa hồ sơ.',
        usernameLabel: 'Tên người dùng', usernamePlaceholder: 'ten_cua_ban', save: 'Lưu',
        countryLabel: '🌍 Quốc gia', countryPlaceholder: 'Chọn quốc gia của bạn', countryNote: 'Hiện dưới dạng lá cờ cạnh tên bạn trên bảng xếp hạng.',
        usernameInvalid: '⚠️ 3–20 ký tự, chỉ chữ/số/dấu gạch dưới.', usernameTaken: '⚠️ Tên này đã có người dùng.',
        saved: '✅ Đã lưu!', gamesPlayed: '🎮 Trò chơi đã chơi', noScores: 'Chưa có điểm nào. ',
        goPlay: 'Đi chơi thử thách ngay 🔥', tableGame: 'Trò chơi', tableBest: 'Điểm cao nhất', tablePlays: 'Số lần chơi', tableRank: 'Hạng',
        favoritesTitle: '⭐ Game yêu thích', noFavorites: 'Chưa có game yêu thích nào — chạm ☆ trên bất kỳ game nào để ghim vào đây.'
      },
      admin: {
        title: '📊 Bảng điều khiển Admin', sub: 'Thống kê người chơi và lượt chơi theo từng game. Chỉ dành cho admin.',
        signInRequired: 'Cần đăng nhập để truy cập trang admin.', notAdmin: '⛔ Tài khoản này không phải admin.',
        overview: 'Tổng quan', registeredPlayers: 'NGƯỜI CHƠI ĐÃ ĐĂNG KÝ', totalPlaysAll: 'TỔNG LƯỢT CHƠI (TẤT CẢ KHÁCH)',
        perGame: 'Theo từng game', tableGame: 'Trò chơi', tablePlayersWithScores: 'Người chơi có điểm',
        tablePlaysByPlayers: 'Lượt chơi của người chơi', tableTotalPlays: 'Tổng lượt chơi'
      },
      game: {
        flappy: {
          hint: 'Chạm / bấm / phím Space để bay. Khe hở trôi lên xuống khi ống tới gần — hãy canh đúng vị trí khe SẼ Ở, không phải vị trí hiện tại. Qua một khe hở được 1 điểm.',
          seoNote: 'Flappy Neon là trò chơi kiểu chạm-để-bay khó, chơi miễn phí ngay trên trình duyệt. Khác với khe hở đứng yên thông thường, khe hở của mỗi ống trôi lên xuống khi tới gần, buộc bạn phải dự đoán vị trí khe sẽ ở chứ không chỉ phản xạ theo vị trí hiện tại — vượt qua điểm 10 khiến đây trở thành một trong những trò chạm-bay khó nhất.',
          tapToStart: 'Chạm để bắt đầu', gameOver: 'Cố lên! Chạm để chơi lại', bestLabel: 'CAO NHẤT {n}'
        },
        dodge: {
          hint: 'Dùng phím mũi tên / WASD (hoặc kéo bằng ngón tay) để đưa ô vuông xanh từ BẮT ĐẦU tới ĐÍCH. Chạm viên đạn hồng = quay lại từ đầu.',
          seoNote: 'Hardest Dodge là trò né đạn miễn phí dành cho ai muốn thử thách thật sự. Dẫn ô vuông xanh vượt qua các viên đạn xoay để tới đích — chạm một cái là quay lại từ đầu, khiến đây là một trong những trò né đạn khó nhất trực tuyến.',
          statusLine: 'Thắng: {wins}   Thử lại: {deaths}', winsLabel: 'THẮNG {n}'
        },
        reaction: {
          hint: 'Người bình thường: ~250ms. Game thủ: ~180ms. Còn bạn thì sao?',
          seoNote: 'Trò kiểm tra phản xạ miễn phí này đo tốc độ phản xạ thực sự của bạn. Bấm ngay khi màn hình chuyển xanh — dưới 200 mili giây là điểm tốt, khiến việc đạt kết quả ổn định trở thành một trong những thử thách phản xạ khó nhất trực tuyến.',
          clickToStartTitle: 'Bấm để bắt đầu',
          clickToStartBody: 'Chờ màn hình chuyển XANH rồi bấm thật nhanh.<br>Bấm sớm khi còn ĐỎ = phạm luật.',
          waitTitle: 'Chờ màu xanh…', waitBody: 'Đừng bấm vội!', goTitle: 'BẤM NGAY!',
          tooSoonTitle: '⏳ Bấm sớm quá!', tooSoonBody: 'Hãy chờ màu xanh. Chạm để thử lại.',
          rankLightning: '🏆 Nhanh như chớp!', rankFast: '⚡ Rất nhanh', rankOk: '👍 Không tệ', rankSlow: '🐢 Hơi chậm…',
          tapAgain: 'Chạm để chơi lại.', bestMsLabel: 'CAO NHẤT {n}ms'
        },
        timer: {
          hint: 'Lệch ≤ 0.010s: siêu đẳng · ≤ 0.030s: đạt · > 0.030s: trượt. Điểm của bạn là chuỗi thắng liên tiếp.',
          seoNote: 'Perfect Second là trò canh giờ khó với một luật duy nhất: dừng đồng hồ đúng 1.000 giây. Không có gợi ý hình ảnh nào giúp bạn — lệch một mili giây cũng tính là thua, khiến đây là một trong những trò canh giờ khó nhất chơi miễn phí trực tuyến.',
          initialMsg: 'Bấm BẮT ĐẦU — đồng hồ chạy và <b>ẨN đi sau 0.3 giây</b>.<br>Bấm DỪNG đúng vào <b>1.000 giây</b>.',
          startBtn: 'BẮT ĐẦU', stopBtn: 'DỪNG', runningMsg: 'Đếm nhẩm trong đầu… bấm DỪNG ở <b>1.000s</b>!',
          godlike: '🏆 <b>{s}s</b> — SIÊU ĐẲNG! Lệch {ms}ms', pass: '✅ <b>{s}s</b> — Đạt! Lệch {ms}ms',
          fail: '<b>{s}s</b> — Lệch {ms}ms — thử lại nào!', winStreak: '🔥 Chuỗi thắng: {n}', bestStreakLabel: 'CHUỖI CAO NHẤT {n}'
        },
        memory: {
          hint: 'Xem chuỗi màu, rồi 4 ô sẽ đổi chỗ trước khi tới lượt bạn — phải nhớ theo MÀU SẮC, không phải vị trí. Chuỗi dài thêm mỗi vòng và chạy NHANH hơn mỗi lần. Bấm sai một nốt là kết thúc vòng chơi.',
          seoNote: 'Neon Memory là trò chơi trí nhớ khó, miễn phí: xem chuỗi màu rồi lặp lại — nhưng các ô sẽ xáo trộn vị trí trước khi bạn trả lời, nên trí nhớ vận động theo vị trí không giúp được gì, chỉ có khả năng nhớ đúng màu mới có ích. Mỗi vòng thêm một bước, chỉ cần sai một lần là kết thúc.',
          initialStatus: 'Ghi nhớ chuỗi màu — rồi lặp lại đúng thứ tự', watch: '👀 Chú ý quan sát…',
          yourTurn: '🎮 Đến lượt bạn!', almost: 'Suýt nữa! Bạn đạt tới vòng {n}', perfect: '✅ Hoàn hảo!',
          round: 'Vòng {n}', start: 'BẮT ĐẦU', playAgain: 'CHƠI LẠI', bestLabel: 'CAO NHẤT {n}'
        },
        avoid: {
          hint: 'Di chuột / kéo ngón tay để né thiên thạch. Điểm = số giây sống sót.',
          seoNote: 'Meteor Rain đưa bạn vào cơn mưa thiên thạch liên tục ngày càng nhanh. Đây là trò né miễn phí không có kiểu mẫu an toàn để học thuộc — chỉ có phản xạ nhanh và chút may mắn để sống thêm một giây nữa.',
          tapToStart: 'Chạm để bắt đầu', gameOver: 'Tiếc quá! Chạm để chơi lại', bestSecLabel: 'CAO NHẤT {n}s'
        },
        stack: {
          hint: 'Chạm / Space để thả khối. Phần thừa sẽ bị cắt — khối càng mỏng, tốc độ càng nhanh.',
          seoNote: 'Neon Stack là trò xếp chồng khó, miễn phí, xoay quanh một kỹ năng: canh thời điểm. Thả từng khối thật chính xác kẻo phần thừa bị cắt — hết khối là tháp đổ, đó là điều khiến đây thành một trong những trò xếp chồng khó nhất.',
          gameOver: 'Tiếc quá! Chạm để chơi lại', bestLabel: 'CAO NHẤT {n}'
        },
        aim: {
          hint: 'Bắn trúng 20 mục tiêu — mỗi cái nhỏ hơn cái trước. Mỗi lần trượt bị phạt thêm 1 giây. Thời gian thấp nhất thắng.',
          seoNote: 'Trò luyện ngắm miễn phí này được thiết kế để trừng phạt những cú bấm ẩu: bắn trúng 20 mục tiêu co nhỏ dần nhanh nhất có thể trong khi mỗi lần trượt bị phạt thời gian. Đây là trò luyện ngắm khó dù bạn đang khởi động hay chỉ muốn phá kỷ lục.',
          tapToStart: 'Chạm để bắt đầu — 20 mục tiêu', statsLine: '🎯 {hit}/{total}   ❌ {miss}   ⏱ {el}s',
          missPenalty: '(đã cộng {miss}s phạt trượt) — Chạm để thử lại', bestSecLabel: 'CAO NHẤT {n}s'
        },
        maze: {
          hint: 'Vào ô BẮT ĐẦU, rồi rê chuột theo hành lang tối tới ĐÍCH trước khi hết giờ. Chạm vùng sáng = quay lại từ đầu. Di động: kéo bằng ngón tay.',
          seoNote: 'Wire Maze là trò mê cung đòi hỏi tay vững, miễn phí: rê chuột qua hành lang hẹp để tới đích trước khi đồng hồ chạy hết, chạm tường sẽ đưa bạn quay lại từ đầu ngay lập tức. Dễ hiểu nhưng thực sự khó để hoàn thành.',
          moveIntoStart: 'Đưa chuột vào ô BẮT ĐẦU', headToGoal: 'Tiến tới ĐÍCH — đừng chạm vùng sáng!',
          wallTouched: 'Chạm tường rồi — quay lại BẮT ĐẦU!', cleared: '🏆 HOÀN THÀNH! Vào lại BẮT ĐẦU để chơi tiếp.',
          outOfBounds: 'Ra ngoài vùng chơi — quay lại BẮT ĐẦU!', timeUp: '⏰ Chậm quá — quay lại BẮT ĐẦU!',
          statusLine: '{msg}   (Thắng {wins} · Thử lại {deaths})', winsLabel: 'THẮNG {n}'
        },
        runner: {
          hint: 'Chạm / Space để nhảy qua chông. Tốc độ tăng liên tục — điểm là quãng đường.',
          seoNote: 'Spike Runner là trò endless runner khó, miễn phí. Nhảy qua chông, sống sót qua từng đợt tăng tốc, xem bạn chạy được bao xa — một luật chơi đơn giản nhưng trở nên cực khó khi tốc độ tăng lên.',
          tapToStart: 'Chạm để chạy', gameOver: 'Chạy tốt lắm! Chạm để chơi lại', bestMLabel: 'CAO NHẤT {n}m'
        },
        colorrush: {
          hint: 'Chỉ chạm vào thẻ khi màu của nó trùng với ô màu MỤC TIÊU. Chạm sai màu hoặc bỏ lỡ khi trùng màu sẽ làm mất chuỗi — thời gian phản ứng càng ngắn dần khi bạn sống sót càng lâu.',
          seoNote: 'Color Rush là trò chơi phản xạ kiểu "go/no-go" miễn phí: quan sát màu mục tiêu, rồi chỉ chạm khi thẻ nhấp nháy trùng màu đó. Chạm sai màu hoặc chần chừ khi đúng màu là mất chuỗi ngay lập tức, khiến việc giữ bình tĩnh dưới áp lực thời gian rút ngắn trở thành một trong những thử thách phản xạ khó nhất.',
          targetLabel: 'MỤC TIÊU', tapToStartTitle: 'Chạm để bắt đầu',
          tapToStartBody: 'Quan sát màu MỤC TIÊU. Chỉ chạm vào thẻ khi nó trùng màu — đừng chạm khi không trùng!',
          mistakeTapWrong: '❌ Sai màu — đã lưu chuỗi {n}, giờ reset lại!', mistakeMissedMatch: '⏰ Bỏ lỡ rồi — đã lưu chuỗi {n}, giờ reset lại!',
          streakLabel: 'Chuỗi {n}', bestStreakLabel: 'CHUỖI CAO NHẤT {n}'
        },
        numrush: {
          hint: 'Chạm lần lượt 1, 2, 3… cho tới 25, đúng thứ tự, nhanh nhất có thể. Mỗi lần chạm sai bị cộng thêm 1 giây. Thời gian thấp nhất thắng.',
          seoNote: 'Number Rush là trò chơi miễn phí rèn tốc độ và sự tập trung dựa trên bảng Schulte kinh điển: tìm và chạm từng số từ 1 đến 25 theo đúng thứ tự, nhanh nhất có thể, trong khi mỗi lần chạm sai sẽ bị phạt thêm thời gian. Luật chơi đơn giản nhưng để làm thật nhanh thì cực kỳ khó.',
          tapToStart: 'Chạm số 1 để bắt đầu — tìm đủ các số theo đúng thứ tự', findLabel: 'Tìm số {n}',
          missPenalty: '(đã cộng {miss}s phạt chạm sai)', bestLabel: 'CAO NHẤT {n}s'
        },
        serpent: {
          hint: 'Dùng phím mũi tên / WASD, hoặc vuốt trên di động, để điều khiển. Ăn chấm để lớn lên — tốc độ tăng mỗi lần ăn. Chạm tường hoặc tự cắn đuôi là thua.',
          seoNote: 'Neon Serpent là trò rắn săn mồi khó, miễn phí: điều khiển con rắn lớn dần trên lưới 20x20, vừa ăn mồi vừa né tường và cái đuôi ngày càng dài của chính mình. Luật chơi kinh điển ai cũng biết — tốc độ tăng dần mới là thứ khiến đây thành một trong những trò rắn khó sống lâu nhất.',
          tapToStart: 'Chạm hoặc bấm phím mũi tên để bắt đầu', gameOver: 'Chơi tốt lắm! Chạm để chơi lại', bestLabel: 'CAO NHẤT {n} điểm'
        },
        keystrike: {
          hint: 'Gõ chữ đang sáng trước khi nó chạm vạch đỏ ở đáy. Gõ sai không sao — cứ tiếp tục gõ. Tốc độ tăng theo mỗi chữ đã gõ xong.',
          seoNote: 'Keystrike là trò chơi gõ chữ khó, miễn phí: chữ rơi từ trên xuống và bạn phải gõ từng ký tự trước khi nó vượt qua vạch đáy. Ban đầu chậm nhưng tốc độ rơi và tần suất xuất hiện tăng liên tục, khiến việc gõ chính xác ở tốc độ cao trở thành một trong những thử thách gõ phím khó nhất trên trình duyệt.',
          tapToStart: 'Chạm vào đây hoặc bấm phím bất kỳ để bắt đầu', mobileHint: 'Trên di động, chạm vào khung chơi để hiện bàn phím.',
          gameOver: 'Gõ tốt lắm! Chạm để chơi lại', bestLabel: 'CAO NHẤT {n} từ'
        },
        siege: {
          hint: 'Di chuột / kéo ngón tay để lách qua đạn bắn tới từ mọi phía. Điểm = số giây sống sót.',
          seoNote: 'Neon Siege đưa bạn vào giữa một đấu trường mở bị bắn phá từ mọi hướng cùng lúc. Đây là trò sinh tồn khó, miễn phí, không có gì để học thuộc — đạn nhắm vào bạn ngay khi xuất hiện, nên chỉ có di chuyển liên tục và phản xạ nhanh mới giúp bạn sống thêm một giây nữa.',
          tapToStart: 'Chạm để bắt đầu', gameOver: 'Tiếc quá! Chạm để chơi lại', bestSecLabel: 'CAO NHẤT {n}s'
        },
        breaker: {
          hint: 'Di chuột / kéo ngón tay để điều khiển thanh đỡ. Chạm / Space để phóng bóng. Phá hết gạch — bảng gạch sẽ đầy lại nhanh hơn mỗi lần. Trượt một lần là hết.',
          seoNote: 'Neon Breaker là trò đập gạch khó, miễn phí: giữ cho bóng không rơi bằng thanh đỡ trong khi phá hết từng bảng gạch. Mỗi lần phá hết bảng, gạch mới xuất hiện với tốc độ bóng nhanh hơn một chút, khiến việc trụ được lâu dài trở thành một trong những trò đập gạch khó nhất trên trình duyệt.',
          tapToStart: 'Chạm hoặc bấm Space để phóng bóng', gameOver: 'Chơi tốt lắm! Chạm để chơi lại', bestLabel: 'CAO NHẤT {n} viên gạch'
        },
        slice: {
          hint: 'Vuốt đúng hướng mũi tên chỉ trên mỗi quả cầu để chém trúng — sai hướng chỉ tính trượt, không bị phạt. Chém trúng bom theo BẤT KỲ hướng nào đều kết thúc ngay lập tức.',
          seoNote: 'Neon Slice là trò chém tốc độ cao, miễn phí, chơi ngay trên trình duyệt. Các quả cầu bay lên từ phía dưới theo đường vòng cung, mỗi quả đều có mũi tên chỉ hướng chém bắt buộc — vuốt đúng hướng để ghi điểm, trong khi chỉ cần chém nhầm một quả bom (ở bất kỳ hướng nào) là kết thúc ngay, khiến việc nhắm hướng chính xác ở tốc độ cao trở thành một trong những thử thách chém khó nhất trực tuyến.',
          tapToStart: 'Vuốt để bắt đầu', gameOver: 'Chém trúng bom rồi! Vuốt để chơi lại', bestLabel: 'CAO NHẤT {n}'
        },
        gravity: {
          hint: 'Chạm / Space để đảo trọng lực giữa sàn và trần. Né chông — tốc độ tăng liên tục.',
          seoNote: 'Gravity Flip là trò chạy khó, miễn phí: đảo trọng lực để đưa khối vuông của bạn dính vào sàn hoặc trần, né chông ở cả hai bên khi tốc độ ngày càng tăng. Luật chơi chỉ một nút bấm nhưng cực khó để sống sót lâu — đảo sai thời điểm một lần là hết.',
          tapToStart: 'Chạm để bắt đầu', gameOver: 'Chơi tốt lắm! Chạm để chơi lại', bestMLabel: 'CAO NHẤT {n}m'
        },
        echo: {
          hint: 'Chạm / bấm / phím Space đúng lúc vòng tròn thu nhỏ trùng với vòng mục tiêu nét đứt. Sớm quá, trễ quá, hoặc không chạm đều kết thúc trò chơi.',
          seoNote: 'Echo Tap là trò chơi nhịp điệu canh thời điểm chính xác, miễn phí: một vòng tròn thu nhỏ dần về phía mục tiêu cố định, bạn phải chạm đúng khoảnh khắc chúng trùng nhau. Mỗi lần thành công tốc độ lại tăng và cửa sổ dung sai thu hẹp lại, khiến việc giữ độ chính xác liên tục trở thành một trong những thử thách canh giờ khó nhất trên trình duyệt.',
          tapToStart: 'Chạm để bắt đầu', gameOver: 'Suýt nữa! Chạm để thử lại', bestLabel: 'CAO NHẤT {n}'
        },
        catch: {
          hint: 'Di chuột / kéo ngón tay để trượt giỏ. Chỉ hứng những viên đá quý trùng màu MỤC TIÊU — hứng nhầm màu là kết thúc. Bỏ lỡ một viên đúng màu không sao, cứ tiếp tục.',
          seoNote: 'Prism Catch là trò chơi ghép màu miễn phí: đá quý đủ màu rơi từ trên xuống và bạn chỉ được hứng những viên trùng với màu mục tiêu hiện tại. Bỏ lỡ một viên đúng màu không mất gì, nhưng chỉ cần hứng nhầm một màu là kết thúc ngay — và mục tiêu liên tục thay đổi, khiến việc giữ tập trung liên tục trở thành một trong những thử thách hứng khó nhất.',
          targetLabel: 'MỤC TIÊU', tapToStart: 'Chạm để bắt đầu', gameOver: 'Sai màu rồi! Chạm để thử lại', bestLabel: 'CAO NHẤT {n}'
        },
        voidjumper: {
          hint: 'Nhấn giữ để tích lực nhảy — kéo trái/phải khi đang giữ để ngắm hướng, thả ra để bật nhảy. Vực thẳm cuộn lên mãi mãi, ngày càng nhanh.',
          seoNote: 'Void Jumper là game platformer leo cao miễn phí cực khó: tích lực nhảy, ngắm hướng giữa những bệ nhỏ trôi nổi — vài bệ sập ngay khi vừa đáp, vài bệ trôi ngang — trong khi màn hình tự cuộn lên với tốc độ tăng dần. Rớt lại phía sau hoặc trượt bệ là kết thúc. Bạn leo được bao cao?',
          tapToStart: 'Chạm để bắt đầu', gameOver: 'Rơi xuống vực! Chạm để chơi lại', bestMLabel: 'CAO NHẤT {n}m'
        },
        laneswitch: {
          hint: 'Phím mũi tên / A-D (hoặc chạm trái/phải trên đường) để đổi làn. Né chướng ngại vật — tốc độ tăng mãi và đôi khi chỉ còn đúng 1 làn trống.',
          seoNote: 'Lane Switch là game phản xạ 3 làn đường miễn phí cực khó: chướng ngại vật lao về phía bạn và bạn phải trượt giữa làn trái, giữa, phải để sống sót. Luôn có đúng 1 làn an toàn, nhưng khi tốc độ không ngừng tăng, việc nhận ra và phản ứng kịp trở thành một trong những thử thách né tránh khó nhất trên trình duyệt.',
          tapToStart: 'Chạm hoặc nhấn ←/→ để bắt đầu', gameOver: 'Suýt nữa thôi! Chạm để chơi lại', bestMLabel: 'CAO NHẤT {n}m'
        },
        tiltbalance: {
          hint: 'Di chuột / kéo ngón tay sang trái-phải (hoặc dùng phím mũi tên) để nghiêng bục và lăn bóng. Đừng để bóng rơi khỏi hai đầu hoặc lọt qua lỗ hổng. Bục sẽ ngắn dần và xuất hiện lỗ hổng khi bạn sống sót lâu hơn.',
          seoNote: 'Tilt Balance là game vật lý cân bằng miễn phí cực khó: nghiêng một bục hẹp bằng cách di chuột để giữ quả bóng neon lăn an toàn trên đó. Bục dần ngắn lại từ hai đầu và các lỗ hổng ngẫu nhiên xuất hiện theo thời gian, buộc bạn phải điều chỉnh liên tục và chính xác. Điểm số là số giây giữ bóng sống sót — đây là một trong những game giữ thăng bằng khó nhất trên trình duyệt.',
          tapToStart: 'Chạm / click để bắt đầu', gameOver: 'Kết thúc rồi — chạm để thử lại', bestSecLabel: 'CAO NHẤT {n}s'
        },
        flashgrid: {
          hint: 'Chạm vào ô XANH đang sáng trước khi nó tắt. Tuyệt đối không chạm ô bẫy MÀU ĐỎ — thua ngay lập tức. Bỏ lỡ ô xanh sẽ mất 1 mạng; bạn có 3 mạng.',
          seoNote: 'Flash Grid là game lưới phản xạ miễn phí trực tuyến: một ô ngẫu nhiên sáng màu xanh và bạn phải chạm vào nó trước khi tắt, trong khi thỉnh thoảng xuất hiện ô bẫy màu đỏ tuyệt đối không được chạm. Thời gian sáng ngắn dần và bẫy xuất hiện nhiều hơn khi điểm số tăng, khiến việc nhận diện màu tức thì và sự kiềm chế trở thành chìa khóa để đạt điểm cao trong bài test phản xạ cực khó này.',
          bestLabel: 'CAO NHẤT {n}', scoreLabel: 'Điểm: {n}', tapToStartTitle: 'Chạm để bắt đầu', tapToStartBody: 'Chạm ô xanh trước khi nó tắt. Không chạm ô đỏ.',
          gameOverTitle: 'Kết thúc', finalScoreLabel: 'Điểm: {n}', tapToRestart: 'Chạm để chơi lại'
        },
        grappleswing: {
          hint: 'Giữ để móc vào điểm neo tiếp theo và đu như con lắc. Thả ra ở đỉnh quỹ đạo để bay về phía trước — canh đúng thời điểm hoặc rơi xuống.',
          seoNote: 'Grapple Swing là game vật lý miễn phí cực khó: giữ nút để móc vào các điểm neo phía trước, tích lũy đà đu như con lắc, rồi thả đúng thời điểm để bay tới móc tiếp theo. Các điểm neo ngày càng khó với tới. Sai thời điểm là trọng lực sẽ kéo bạn xuống. Luật chỉ 1 nút bấm, nhưng đòi hỏi độ chính xác khắc nghiệt.',
          tapToStart: 'Giữ để bắt đầu đu', gameOver: 'Rơi rồi! Chạm để chơi lại', bestLabel: 'CAO NHẤT {n}'
        },
        eyetrick: {
          hint: 'Một từ tên màu xuất hiện được tô bằng màu mực khác. Chạm vào nút đúng MÀU MỰC, không phải nghĩa của từ — thời gian giới hạn ngắn dần khi điểm tăng. Chạm sai hoặc hết giờ mất 1 mạng. Tổng 3 mạng.',
          seoNote: 'Eye Trick là game phản xạ miễn phí dựa trên hiệu ứng Stroop, một hiện tượng nổi tiếng trong khoa học nhận thức khi việc đọc từ tên màu gây nhiễu với việc gọi tên màu mực thực tế. Chỉ chạm đúng màu mực trong khi đồng hồ ngắn dần sau mỗi câu đúng, và thỉnh thoảng có câu trùng khớp để kiểm tra bạn có thực sự quan sát hay chỉ đọc theo quán tính.',
          tapToStart: 'Chạm để bắt đầu — chạm MÀU MỰC, không phải từ!', gameOver: 'Kết thúc — chạm để thử lại', bestLabel: 'CAO NHẤT {n}'
        },
        focuslock: {
          hint: 'Quan sát chấm màu vàng, rồi theo dõi nó khi tất cả các chấm trộn lẫn vào nhau. Khi chúng dừng lại, chạm vào chấm bạn đã theo dõi. Chạm sai mất 1 mạng — bạn có 3 mạng.',
          seoNote: 'Focus Lock là game tập trung miễn phí dựa trên kỹ thuật theo dõi nhiều vật thể (multiple object tracking), một bài test kinh điển trong khoa học nhận thức về sự chú ý thị giác bền vững. Một chấm chớp sáng trong chốc lát rồi hòa lẫn vào đàn chấm giống hệt đang trôi dạt và va chạm trong vài giây. Chỉ cần mất dấu mục tiêu 1 khoảnh khắc là kết thúc chuỗi điểm, khiến đây trở thành một trong những game tập trung khó nhất có thể chơi trên trình duyệt — không cần tải về.',
          tapToStart: 'Chạm để bắt đầu', roundLabel: 'Vòng {n}', revealMsg: 'Quan sát chấm vàng!', trackMsg: 'Theo dõi nó!', chooseMsg: 'Chạm vào chấm bạn đã theo dõi',
          gameOver: 'Kết thúc', finalLine: 'Bạn đạt vòng {n} — Chạm để chơi lại', bestLabel: 'CAO NHẤT {n}'
        },
        trajectory: {
          hint: 'Kéo ngược từ điểm bắn như ná thun, rồi thả ra để bắn. Kéo càng xa lực càng mạnh. Bắn trúng vòng tròn neon để ghi điểm — trượt 3 lần là thua.',
          seoNote: 'Trajectory là game bắn pháo miễn phí dựa trên vật lý parabol thực thụ: kéo lùi để chỉnh góc và lực, rồi thả ra để bắn viên đạn phát sáng tới vòng tròn mục tiêu ở xa. Khoảng cách, kích thước mục tiêu, gió và độ trôi dọc đều tăng dần theo điểm số, khiến việc duy trì độ chính xác trở thành một trong những thử thách ngắm bắn khó nhất trên trình duyệt.',
          scoreLabel: 'Điểm: {n}', distanceLabel: 'KHOẢNG CÁCH {n}m', windLabel: 'GIÓ {dir} {n}', tapToStart: 'Kéo lùi từ điểm neo để ngắm — thả ra để bắn',
          gameOver: 'Kết thúc — chạm để thử lại', bestLabel: 'CAO NHẤT {n}'
        }
      }
    },

    zh: {
      common: {
        back: ARROW_L + ' 游戏列表', backAll: ARROW_L + ' 返回所有游戏', play: '开始 ' + ARROW_R, moreHardGames: '更多高难度游戏：',
        leaderboard: '🏆 排行榜', top10: '🏆 前10名 — {game}', loading: '加载中…',
        noScoresYet: '暂无成绩 — 抢先上榜！🔥', scoreSavedAuto: '你的最佳成绩会自动保存。',
        signInToBoard: '使用 Google 登录即可上榜！', signInToPlayTitle: '登录后开始游戏',
        signInToPlayBody: '使用 Google 登录来玩{game}，保存最佳成绩并冲击排行榜。',
        signInGoogleFallback: '使用 Google 登录', player: '玩家', signOutTitle: '退出登录', close: '关闭',
        start: '起点', goal: '终点', playsLine: ARROW_R + ' <b>{n}</b> 次游玩',
        pin: '加入收藏', unpin: '取消收藏',
        donate: '捐赠', donateTooltip: '通过 PayPal 支持 Chuong US Games ❤️'
      },
      index: {
        tagline: '易上手 · 难通关', heroLine1: '上手很简单', heroLine2: '通关极其困难',
        heroP: '不断新增游戏 — 无需安装，点击即玩。你觉得能全部通关吗？🔥',
        cta: '立即开始',
        introP: 'Chuong US Games 是一个免费的高难度小游戏合集，在线即可畅玩，无需下载也无需注册。每款游戏只需十秒就能学会——flappy 风格跳跃、躲避子弹、瞄准训练、反应速度、记忆挑战、迷宫等等——但很少有玩家能超越自己的最佳成绩。如果你想找一款真正考验反应力和耐心的游戏，就从下面开始吧。',
        searchPlaceholder: '🔍 搜索游戏…（如 flappy、aim、maze）', faqTitle: '常见问题',
        faq1Q: '这些游戏为什么这么难？',
        faq1A: '这里的每款游戏规则都很简单，但对时机、精准度或反应速度要求极高。大多数玩家在前几次尝试中都无法超越自己的最佳成绩。',
        faq2Q: '这些高难度游戏免费吗？',
        faq2A: '是的 — 所有游戏均免费，无需下载也无需注册。免费账号仅用于解锁排行榜功能。',
        faq3Q: '游玩需要下载什么吗？',
        faq3A: '不需要。所有游戏都直接在你的浏览器中运行，电脑和手机均可。',
        footer: '© 2026 Chuong.us | chuonglife@gmail.com',
        card: {
          flappy: '轻点让小鸟飞过缝隙。规则人人都懂，但几乎没人能得10分。',
          dodge: '操控蓝色方块穿过旋转的子弹到达终点。碰到一下就要从头再来。',
          reaction: '屏幕一变绿就立刻点击。只有200毫秒以内的成绩才算数。',
          timer: '让时钟精确停在1.000秒。差一毫秒就算失败。',
          memory: '观察并重复不断变长的颜色序列。你的记忆力能坚持多久？',
          avoid: '躲避越来越快的陨石雨。一秒一秒地活下去。',
          stack: '精准把握时机堆叠方块。任何悬空部分都会被切掉——方块用完游戏结束。',
          aim: '尽快击中20个不断缩小的目标。每次失手都会受到惩罚。',
          maze: '拖动光标穿过狭窄的通道到达终点。碰到墙壁就要从头再来。',
          runner: '以不断加快的速度跳过尖刺。你能跑多远？',
          colorrush: '只有卡片颜色与目标一致时才能点击。点错或漏点都会立刻中断连击。',
          numrush: '按顺序尽快点击1到25。每次点错都会被罚1秒。',
          serpent: '操控一条不断变长的蛇在20x20的网格上移动。每吃一口速度就更快——转错方向就结束了。',
          keystrike: '在掉落的单词落到底线之前把它打出来。速度不断加快——漏掉一个单词就结束。',
          siege: '在四面八方射来的子弹中不断闪避。一秒一秒地活下去。',
          breaker: '弹球打碎所有砖块。每次清空后砖块会更快地重新填满——失误一次就结束。',
          slice: '滑动切开发光的圆球，赶在它们落下之前。切到炸弹就立刻结束。',
          gravity: '反转重力在地板和天花板之间切换，躲避两侧的尖刺。速度永不停止上升。',
          echo: '在缩小的圆环与目标对齐的瞬间点击。时间窗口每一轮都会变得更小。',
          catch: '移动桶只接住目标颜色。接到错误的颜色就会立刻结束。',
          voidjumper: '蓄力、瞄准，在虚空不断加速向上滚动时跃向逐渐崩塌的平台。',
          laneswitch: '在三条车道间切换以躲避迎面而来的障碍物。速度永不停止提升——有时只剩一条车道安全。',
          tiltbalance: '倾斜逐渐变短的平台让球保持滚动——躲避空洞，别掉出边缘。',
          flashgrid: '在蓝色格子熄灭前点击它——绝不要碰红色陷阱，否则立刻结束游戏。',
          grappleswing: '按住发射钩爪，像钟摆一样摆动，在弧顶松开飞向下一个锚点。',
          eyetrick: '点击真正的墨水颜色，而不是文字含义——经典斯特鲁普效应陷阱，时间窗口不断缩短。',
          focuslock: '追踪一个发光的点，看它融入一群一模一样的点中漂移碰撞——失去目标就game over。',
          trajectory: '像弹弓一样向后拉再松开，将箭射向远处的光环——风力让每一箭都更难预判。'
        }
      },
      profile: {
        title: '👤 我的资料', sub: '你的用户名、游玩次数、最佳成绩和排名。',
        signInNote: '使用 Google 登录即可保存成绩、参与排行榜竞争并编辑个人资料。',
        usernameLabel: '用户名', usernamePlaceholder: '你的名字', save: '保存',
        countryLabel: '🌍 国家/地区', countryPlaceholder: '选择你的国家/地区', countryNote: '会以国旗形式显示在排行榜的用户名旁边。',
        usernameInvalid: '⚠️ 需3–20个字符，仅限字母/数字/下划线。', usernameTaken: '⚠️ 该用户名已被占用。',
        saved: '✅ 已保存！', gamesPlayed: '🎮 已玩游戏', noScores: '暂无成绩。 ',
        goPlay: '去挑战一下吧 🔥', tableGame: '游戏', tableBest: '最佳成绩', tablePlays: '游玩次数', tableRank: '排名',
        favoritesTitle: '⭐ 收藏的游戏', noFavorites: '还没有收藏的游戏 — 点击任意游戏上的 ☆ 即可收藏到这里。'
      },
      admin: {
        title: '📊 管理后台', sub: '各游戏的玩家和游玩统计数据。仅限管理员查看。',
        signInRequired: '需要登录才能访问管理后台。', notAdmin: '⛔ 此账号不是管理员。',
        overview: '概览', registeredPlayers: '注册玩家数', totalPlaysAll: '总游玩次数（所有访客）',
        perGame: '按游戏统计', tableGame: '游戏', tablePlayersWithScores: '有成绩的玩家数',
        tablePlaysByPlayers: '玩家游玩次数', tableTotalPlays: '总游玩次数'
      },
      game: {
        flappy: {
          hint: '轻点 / 点击 / 按空格键起飞。缝隙会随着管道靠近而上下漂移——要预判它将出现的位置，而不是当前位置。飞过一个缝隙得1分。',
          seoNote: 'Flappy Neon 是一款高难度的轻点飞行游戏，可在浏览器中免费在线畅玩。与固定缝隙不同，每根管道的缺口会在靠近时上下漂移，你必须预判它将出现的位置，而不只是对当前位置做出反应——突破10分就成了最难的轻点飞行类游戏之一。',
          tapToStart: '轻点开始', gameOver: '再接再厉！轻点重新开始', bestLabel: '最佳 {n}'
        },
        dodge: {
          hint: '使用方向键 / WASD（或用手指拖动）将蓝色方块从起点移动到终点。碰到粉色子弹就要回到起点。',
          seoNote: 'Hardest Dodge 是一款专为追求真正挑战的玩家打造的免费在线躲避子弹游戏。操控蓝色方块穿过旋转的子弹到达终点——碰一下就要重新开始，这使它成为最难的躲避类游戏之一。',
          statusLine: '过关：{wins}   重试：{deaths}', winsLabel: '过关 {n}'
        },
        reaction: {
          hint: '普通人：约250毫秒。游戏高手：约180毫秒。你呢？',
          seoNote: '这款免费的反应测试游戏能测出你反应速度到底有多快。屏幕一变绿就立刻点击——200毫秒以内算是好成绩，要保持稳定的成绩，这是网上最难的反应力挑战之一。',
          clickToStartTitle: '点击开始',
          clickToStartBody: '等屏幕变绿后尽快点击。<br>红色时提前点击 = 犯规。',
          waitTitle: '等待变绿…', waitBody: '先别点击！', goTitle: '立刻点击！',
          tooSoonTitle: '⏳ 点得太早了！', tooSoonBody: '请等待变绿。轻点重试。',
          rankLightning: '🏆 闪电速度！', rankFast: '⚡ 非常快', rankOk: '👍 还不错', rankSlow: '🐢 有点慢…',
          tapAgain: '轻点再来一次。', bestMsLabel: '最佳 {n}ms'
        },
        timer: {
          hint: '误差 ≤ 0.010秒：满分 · ≤ 0.030秒：合格 · > 0.030秒：失败。你的得分是连胜次数。',
          seoNote: 'Perfect Second 是一款规则单一的高难度计时游戏：让时钟精确停在1.000秒。没有任何视觉提示可以帮你——差一毫秒就算失败，这让它成为网上最难的精准类游戏之一，且完全免费。',
          initialMsg: '按下开始 — 时钟运行，并在<b>0.3秒后隐藏</b>。<br>请在恰好<b>1.000秒</b>时按下停止。',
          startBtn: '开始', stopBtn: '停止', runningMsg: '在心里默数… 在<b>1.000秒</b>时按下停止！',
          godlike: '🏆 <b>{s}秒</b> — 满分！误差 {ms}ms', pass: '✅ <b>{s}秒</b> — 合格！误差 {ms}ms',
          fail: '<b>{s}秒</b> — 误差 {ms}ms — 再试一次！', winStreak: '🔥 连胜：{n}', bestStreakLabel: '最佳连胜 {n}'
        },
        memory: {
          hint: '观察序列后，4个面板会在轮到你之前交换位置——必须按颜色记忆，而不是按位置记忆。序列每轮都会变长，播放速度也会越来越快。按错一个就会结束本轮。',
          seoNote: 'Neon Memory 是一款免费的高难度记忆游戏：观察颜色序列，然后重复出来——但面板会在你作答前重新洗牌位置，因此空间肌肉记忆帮不上忙，只有真正记住颜色才有用。每轮都会多一步，只要失误一次就会结束。',
          initialStatus: '记住颜色序列——然后按顺序重复', watch: '👀 请仔细观察…',
          yourTurn: '🎮 轮到你了！', almost: '差一点！你到达了第{n}轮', perfect: '✅ 完美！',
          round: '第{n}轮', start: '开始', playAgain: '再玩一次', bestLabel: '最佳 {n}'
        },
        avoid: {
          hint: '移动鼠标 / 拖动手指来躲避陨石。得分 = 存活秒数。',
          seoNote: 'Meteor Rain 让你置身于不断加速的陨石雨中。这是一款免费的高难度躲避游戏，没有可以记住的安全规律——只能靠敏捷的反应和一点运气再多活一秒。',
          tapToStart: '轻点开始', gameOver: '差一点！轻点重新开始', bestSecLabel: '最佳 {n}秒'
        },
        stack: {
          hint: '轻点 / 空格键放下方块。任何悬空部分都会被切掉——方块越来越薄，速度越来越快。',
          seoNote: 'Neon Stack 是一款免费的高难度堆叠游戏，核心只有一个技巧：把握时机。精准放下每个方块，否则悬空部分会被切掉——方块用完塔就倒了，这正是它成为最难堆叠类游戏之一的原因。',
          gameOver: '差一点！轻点重新开始', bestLabel: '最佳 {n}'
        },
        aim: {
          hint: '击中20个目标——一个比一个小。每次失手会增加1秒惩罚。用时最短获胜。',
          seoNote: '这款免费的在线瞄准训练器专门用来惩罚马虎的点击：尽快击中20个不断缩小的目标，每次失手都会增加时间惩罚。无论你是热身还是想刷新纪录，这都是一款高难度的瞄准训练游戏。',
          tapToStart: '轻点开始 — 20个目标', statsLine: '🎯 {hit}/{total}   ❌ {miss}   ⏱ {el}秒',
          missPenalty: '（已含{miss}秒失手惩罚）— 轻点重试', bestSecLabel: '最佳 {n}秒'
        },
        maze: {
          hint: '进入起点方块，在时间耗尽前沿着深色通道拖到终点。碰到亮色区域 = 回到起点。手机端：用手指拖动。',
          seoNote: 'Wire Maze 是一款免费的稳手迷宫游戏：在时间耗尽前拖动光标穿过狭窄通道到达终点，碰到墙壁就会立刻回到起点。规则简单易懂，但要真正通关却很难。',
          moveIntoStart: '将光标移入起点区域', headToGoal: '前往终点 — 不要碰到亮色墙壁！',
          wallTouched: '碰到墙壁了 — 回到起点！', cleared: '🏆 通关！回到起点区域再来一次。',
          outOfBounds: '超出范围 — 回到起点！', timeUp: '⏰ 太慢了 — 回到起点！',
          statusLine: '{msg}   （过关 {wins} · 重试 {deaths}）', winsLabel: '过关 {n}'
        },
        runner: {
          hint: '轻点 / 空格键跳过尖刺。速度会持续加快 — 得分即为跑动距离。',
          seoNote: 'Spike Runner 是一款免费的高难度无尽奔跑游戏。跳过尖刺，挺过一次次加速，看看你能跑多远——规则简单，但一旦提速就成了最难的跑酷类游戏之一。',
          tapToStart: '轻点开始奔跑', gameOver: '跑得不错！轻点再来一次', bestMLabel: '最佳 {n}米'
        },
        colorrush: {
          hint: '只有当卡片颜色与目标色块一致时才能点击。点错颜色或漏掉匹配都会让连击清零——存活越久，反应时间就越短。',
          seoNote: 'Color Rush 是一款免费的“go/no-go”反应力游戏：观察目标颜色，只有当闪烁的卡片颜色与之匹配时才点击。点错颜色或该出手时犹豫，连击立刻归零，在不断缩短的时间窗口下保持冷静，是最考验反应力的挑战之一。',
          targetLabel: '目标', tapToStartTitle: '轻点开始',
          tapToStartBody: '注意观察目标颜色。只有卡片颜色与之匹配时才点击——不匹配时千万别点！',
          mistakeTapWrong: '❌ 颜色不对 — 已保存连击 {n}，现在清零！', mistakeMissedMatch: '⏰ 漏掉了 — 已保存连击 {n}，现在清零！',
          streakLabel: '连击 {n}', bestStreakLabel: '最佳连击 {n}'
        },
        numrush: {
          hint: '按顺序依次点击1、2、3……直到25，越快越好。每次点错都会被罚1秒。用时最短获胜。',
          seoNote: 'Number Rush 是一款基于经典施特勒方格（Schulte Grid）的免费速度与专注力游戏：按顺序尽快找到并点击1到25的每个数字，点错一次就会被罚时间。规则简单，但要做到又快又准却相当困难。',
          tapToStart: '点击1开始 — 按顺序找出所有数字', findLabel: '寻找 {n}',
          missPenalty: '（已含{miss}秒失误惩罚）', bestLabel: '最佳 {n}秒'
        },
        serpent: {
          hint: '使用方向键 / WASD，或在手机上滑动，来控制方向。吃到圆点会变长——每次都会加速。撞到墙壁或自己的尾巴就结束了。',
          seoNote: 'Neon Serpent 是一款免费的高难度贪吃蛇游戏：操控一条不断变长的蛇在20x20的网格上移动，一边吃圆点一边躲避墙壁和自己越来越长的尾巴。规则是大家都熟悉的经典玩法——不断加快的速度才是让它成为最难长时间存活的贪吃蛇游戏之一的原因。',
          tapToStart: '轻点或按任意方向键开始', gameOver: '玩得不错！轻点重新开始', bestLabel: '最佳 {n} 分'
        },
        keystrike: {
          hint: '在发光的单词到达底部红线之前把它打出来。打错字没关系——继续打就好。速度会随着每个单词加快。',
          seoNote: 'Keystrike 是一款免费的高难度打字游戏：单词从顶部落下，你必须在它越过底线之前逐字打出来。一开始很慢，但下落速度和生成频率会不断加快，让在高速下保持准确成为浏览器里最难的打字挑战之一。',
          tapToStart: '点击这里或按任意键开始', mobileHint: '在手机上，轻点游戏区域即可唤出键盘。',
          gameOver: '打得不错！轻点重新开始', bestLabel: '最佳 {n} 个单词'
        },
        siege: {
          hint: '移动鼠标 / 拖动手指，躲避从四面八方射来的子弹。得分 = 存活秒数。',
          seoNote: 'Neon Siege 把你放在一个开放竞技场的中央，四面八方同时受到攻击。这是一款免费的高难度生存游戏，没有任何可以记住的规律——子弹在生成的瞬间就已瞄准你，只有不断移动和快速反应才能让你再多活一秒。',
          tapToStart: '轻点开始', gameOver: '差一点！轻点重新开始', bestSecLabel: '最佳 {n}秒'
        },
        breaker: {
          hint: '移动鼠标 / 拖动手指来操控挡板。轻点 / 空格键发射球。打碎所有砖块——每次清空后砖块会更快重新填满。失误一次就结束。',
          seoNote: 'Neon Breaker 是一款免费的高难度打砖块游戏：用挡板保住球，同时清空一整块又一块的砖块。每清空一块砖块区域，就会以稍快的球速重新填满，能不能撑住更久的时间，正是它成为浏览器里最难打砖块游戏之一的原因。',
          tapToStart: '轻点或按空格键发射', gameOver: '玩得不错！轻点重新开始', bestLabel: '最佳 {n} 块砖'
        },
        slice: {
          hint: '按照圆球上箭头指示的方向滑动才能切中——方向错误只算未命中，不扣分。以任何方向切到炸弹都会立刻结束游戏。',
          seoNote: 'Neon Slice 是一款免费的快节奏切割游戏，可直接在浏览器中在线畅玩。圆球从底部发射并划出抛物线，每颗都标有必须遵循的切割方向——按正确方向滑动才能得分，而以任何方向切到炸弹都会立刻结束游戏，这让在高速下保持精准的方向判断成为网上最难的切割挑战之一。',
          tapToStart: '滑动开始', gameOver: '切到炸弹了！滑动重新开始', bestLabel: '最佳 {n}'
        },
        gravity: {
          hint: '轻点 / 空格键在地板和天花板之间反转重力。躲避尖刺——速度永远在加快。',
          seoNote: 'Gravity Flip 是一款免费的高难度跑酷游戏：反转重力让你的方块吸附在地板或天花板上，躲避两侧的尖刺，同时速度不断攀升。规则只有一个按钮，却很难长时间存活——反转时机错一次就结束。',
          tapToStart: '轻点开始', gameOver: '玩得不错！轻点重新开始', bestMLabel: '最佳 {n}米'
        },
        echo: {
          hint: '在缩小的圆环与虚线目标环对齐的瞬间轻点 / 点击 / 按空格键。太早、太晚或完全不点都会结束游戏。',
          seoNote: 'Echo Tap 是一款免费的在线节奏精准游戏：一个圆环不断缩小并趋向固定目标，你必须在两者对齐的瞬间点击。每次成功都会加快节奏并缩小容差窗口，让持续保持精准成为浏览器里最难的计时挑战之一。',
          tapToStart: '轻点开始', gameOver: '差一点！轻点重试', bestLabel: '最佳 {n}'
        },
        catch: {
          hint: '移动鼠标 / 拖动手指来滑动桶子。只接住与目标色块相符的宝石——接到错误颜色会结束游戏。漏接正确颜色没关系，继续就好。',
          seoNote: 'Prism Catch 是一款免费的在线颜色匹配游戏：各种颜色的宝石从上方落下，你只能接住与当前目标颜色相符的那些。漏接一颗正确颜色的宝石不会有任何损失，但只要接到一次错误颜色就会立刻结束游戏——而且目标颜色会不断变化，让持续保持专注成为最难的接物挑战之一。',
          targetLabel: '目标', tapToStart: '轻点开始', gameOver: '接错颜色了！轻点重试', bestLabel: '最佳 {n}'
        },
        voidjumper: {
          hint: '按住蓄力跳跃——蓄力时左右拖动来瞄准方向，松开即可跃起。虚空不断向上滚动，且越来越快。',
          seoNote: 'Void Jumper 是一款免费的高难度垂直跳跃游戏：蓄力跳跃，瞄准漂浮的小平台——有些落地即碎，有些左右移动——同时屏幕不断加速向上滚动。掉队或跳空即失败。你能爬多高？',
          tapToStart: '点击开始', gameOver: '坠入虚空！点击重试', bestMLabel: '最高 {n}m'
        },
        laneswitch: {
          hint: '方向键 / A-D（或在道路上点击左右）切换车道。躲避障碍物——速度不断提升，有时只剩一条安全车道。',
          seoNote: 'Lane Switch 是一款免费的高难度三车道反应游戏：障碍物向你滑来，你必须在左、中、右车道间切换以生存。始终有且只有一条安全车道，但随着速度不断提升，及时发现并做出反应成为浏览器中最难的躲避挑战之一。',
          tapToStart: '点击或按 ←/→ 开始', gameOver: '差一点！点击重试', bestMLabel: '最高 {n}m'
        },
        tiltbalance: {
          hint: '左右移动鼠标/拖动手指（或使用方向键）倾斜平台并滚动小球。别让球从两端掉落或掉进空洞。平台会随着存活时间变短并出现空洞。',
          seoNote: 'Tilt Balance 是一款免费的高难度物理平衡游戏：通过移动鼠标倾斜一块狭窄的平台，让霓虹小球安全滚动。平台会从两端逐渐变短，随机空洞也会随时间出现，需要持续而精确的微调。得分为存活的秒数——这是浏览器中最难的平衡游戏之一。',
          tapToStart: '点击开始', gameOver: '游戏结束——点击重试', bestSecLabel: '最高 {n}s'
        },
        flashgrid: {
          hint: '在蓝色格子熄灭前点击它。绝对不要点击红色陷阱格——那会立即结束游戏。错过蓝色格子会失去一条命，你共有3条命。',
          seoNote: 'Flash Grid 是一款免费的在线反应格子游戏：随机格子闪烁蓝光，你必须在它熄灭前点击，同时偶尔出现的红色陷阱格绝对不能触碰。随着分数提升，点亮时间变短、陷阱出现更频繁，瞬间的颜色识别与自我克制是在这个极难的反应测试中拿高分的关键。',
          bestLabel: '最高 {n}', scoreLabel: '得分：{n}', tapToStartTitle: '点击开始', tapToStartBody: '在蓝色格子熄灭前点击它。不要点击红色。',
          gameOverTitle: '游戏结束', finalScoreLabel: '得分：{n}', tapToRestart: '点击重新开始'
        },
        grappleswing: {
          hint: '按住勾住下一个锚点并像钟摆一样摆动。在弧顶松开以向前飞——时机对了才能成功，否则就会坠落。',
          seoNote: 'Grapple Swing 是一款免费的高难度物理游戏：按住勾住前方的锚点，通过摆动积累动量，然后在恰当的时刻松开飞向前方抓住下一个钩点。锚点会越来越难以到达。时机不对，重力就会把你拽下去。规则只有一个按钮，却需要极致的精准。',
          tapToStart: '按住开始摆动', gameOver: '坠落了！点击重试', bestLabel: '最高 {n}'
        },
        eyetrick: {
          hint: '一个颜色单词会以不同的墨水颜色显示。点击与墨水颜色相符的按钮，而不是单词的含义——时间窗口会随着分数提升而缩短。点错或超时都会失去一条命。共3条命。',
          seoNote: 'Eye Trick 是一款基于斯特鲁普效应（Stroop effect）的免费在线反应游戏，这是认知科学中一个著名现象：阅读颜色单词会干扰对实际墨水颜色的判断。只需点击真正的墨水颜色，时钟会随每次答对而缩短，偶尔出现的一致题目则用来测试你是真的在观察，还是只是习惯性地阅读文字。',
          tapToStart: '点击开始——点击墨水颜色，不是文字！', gameOver: '游戏结束——点击重试', bestLabel: '最高 {n}'
        },
        focuslock: {
          hint: '观察黄色的点，然后在所有点混合在一起时追踪它。当它们停下来时，点击你追踪的那个点。点错会失去一条命——你有3条命。',
          seoNote: 'Focus Lock 是一款基于多目标追踪（multiple object tracking）的免费在线专注力游戏，这是认知科学中测试持续视觉注意力的经典方法。一个点短暂闪烁后融入一群完全相同、漂移碰撞数秒的点群中。哪怕只是片刻失去目标都会结束你的连击，是浏览器中最难的专注力游戏之一——无需下载。',
          tapToStart: '点击开始', roundLabel: '第 {n} 轮', revealMsg: '看好黄色的点！', trackMsg: '追踪它！', chooseMsg: '点击你追踪的点',
          gameOver: '游戏结束', finalLine: '你到达了第 {n} 轮——点击重新开始', bestLabel: '最高 {n}'
        },
        trajectory: {
          hint: '像弹弓一样从发射点向后拖动，然后松开发射。拖得越远力量越大。击中霓虹光环得分——失误3次即结束。',
          seoNote: 'Trajectory 是一款基于真实抛物线物理的免费在线炮击瞄准游戏：向后拖动来设定角度和力量，然后松开射出发光的弹丸击中远处的光环目标。距离、目标大小、风力和垂直漂移都会随分数提升，让保持精准成为浏览器中最难的瞄准挑战之一。',
          scoreLabel: '得分：{n}', distanceLabel: '距离 {n}m', windLabel: '风 {dir} {n}', tapToStart: '从锚点向后拖动瞄准——松开发射',
          gameOver: '游戏结束——点击重试', bestLabel: '最高 {n}'
        }
      }
    },

    es: {
      common: {
        back: ARROW_L + ' Juegos', backAll: ARROW_L + ' Volver a todos los juegos', play: 'JUGAR ' + ARROW_R, moreHardGames: 'Más juegos difíciles:',
        leaderboard: '🏆 Clasificación', top10: '🏆 Top 10 — {game}', loading: 'Cargando…',
        noScoresYet: 'Aún no hay puntuaciones — ¡sé el primero! 🔥', scoreSavedAuto: 'Tu mejor puntuación se guarda automáticamente.',
        signInToBoard: '¡Inicia sesión con Google para aparecer en la clasificación!', signInToPlayTitle: 'Inicia sesión para jugar',
        signInToPlayBody: 'Inicia sesión con Google para jugar {game}, guardar tus mejores puntuaciones y subir en la clasificación.',
        signInGoogleFallback: 'Iniciar sesión con Google', player: 'jugador', signOutTitle: 'Cerrar sesión', close: 'Cerrar',
        start: 'INICIO', goal: 'META', playsLine: ARROW_R + ' <b>{n}</b> partidas',
        pin: 'Fijar en favoritos', unpin: 'Quitar de favoritos',
        donate: 'Donar', donateTooltip: 'Apoya a Chuong US Games por PayPal ❤️'
      },
      index: {
        tagline: 'Fácil de jugar · Difícil de ganar', heroLine1: 'Fácil de jugar', heroLine2: 'Extremadamente difícil de ganar',
        heroP: 'Se agregan juegos nuevos todo el tiempo — no necesitas instalar nada. Haz clic y juega. ¿Crees que puedes vencerlos todos? 🔥',
        cta: 'JUGAR AHORA',
        introP: 'Chuong US Games es una colección gratuita de juegos difíciles que puedes jugar en línea sin descargas ni registro. Cada uno se aprende en diez segundos — estilo flappy, esquivar balas, entrenamiento de puntería, velocidad de reacción, memoria, laberintos y más — pero muy pocos jugadores logran superar su propio mejor puntaje. Si buscas un juego realmente difícil para poner a prueba tus reflejos y tu paciencia, empieza abajo.',
        searchPlaceholder: '🔍 Buscar juegos… (ej. flappy, aim, maze)', faqTitle: 'Preguntas frecuentes',
        faq1Q: '¿Qué hace que estos juegos sean difíciles?',
        faq1A: 'Cada juego aquí tiene reglas simples de una línea, pero exige mucha precisión, tiempos exactos o reflejos rápidos. La mayoría de los jugadores no logra superar su propio mejor puntaje en los primeros intentos.',
        faq2Q: '¿Los juegos difíciles son gratis?',
        faq2A: 'Sí — todos los juegos son gratuitos, sin descargas ni registro. Una cuenta gratuita solo desbloquea la clasificación.',
        faq3Q: '¿Necesito descargar algo para jugar?',
        faq3A: 'No. Todos los juegos funcionan directamente en tu navegador, en computadora o celular.',
        footer: '© 2026 Chuong.us | chuonglife@gmail.com',
        card: {
          flappy: 'Toca para volar a través de los huecos. Todos saben jugarlo. Casi nadie llega a 10 puntos.',
          dodge: 'Guía el cuadrado azul a través de balas giratorias hasta la meta. Un toque te devuelve al inicio.',
          reaction: 'Haz clic en el instante en que la pantalla se ponga verde. Solo cuenta un puntaje menor a 200ms.',
          timer: 'Detén el reloj exactamente en 1.000 segundos. Un milisegundo de más ya es una derrota.',
          memory: 'Observa y repite una secuencia de colores que crece sin parar. ¿Hasta dónde llega tu memoria?',
          avoid: 'Esquiva una lluvia de meteoritos que no deja de acelerar. Sobrevive un segundo a la vez.',
          stack: 'Apila bloques con el momento perfecto. Cualquier saliente se corta — si te quedas sin bloque, se acabó.',
          aim: 'Acierta 20 objetivos cada vez más pequeños lo más rápido posible. Cada fallo añade una penalización.',
          maze: 'Guía tu cursor por un corredor estrecho hasta la meta. Tocar una pared te devuelve al inicio.',
          runner: 'Salta sobre pinchos a una velocidad que aumenta sin parar. ¿Hasta dónde puedes llegar?',
          colorrush: 'Toca solo cuando la tarjeta coincida con el color objetivo. Un toque erróneo o un fallo termina tu racha.',
          numrush: 'Toca del 1 al 25 en orden lo más rápido posible. Cada toque erróneo te cuesta un segundo.',
          serpent: 'Guía una serpiente que crece en una cuadrícula de 20x20. Cada bocado la hace más rápida — un giro en falso termina la partida.',
          keystrike: 'Escribe cada palabra que cae antes de que llegue a la línea inferior. La velocidad no deja de subir — una palabra perdida termina la partida.',
          siege: 'Esquiva balas disparadas desde todas las direcciones a la vez. Sobrevive un segundo a la vez.',
          breaker: 'Rebota la bola y destruye cada ladrillo. Los tableros se rellenan más rápido cada vez — un fallo y se acabó.',
          slice: 'Desliza para cortar orbes brillantes antes de que caigan. Cortar una bomba por error termina la partida al instante.',
          gravity: 'Invierte la gravedad para cambiar entre el suelo y el techo, esquivando pinchos en ambos lados. La velocidad no deja de subir.',
          echo: 'Toca en el instante en que el anillo que se encoge se alinea con el objetivo. La ventana se hace más pequeña cada ronda.',
          catch: 'Desliza el cubo para atrapar solo el color objetivo. Atrapar un color equivocado termina la partida.',
          voidjumper: 'Carga, apunta y salta entre plataformas que se desmoronan mientras el vacío sube cada vez más rápido.',
          laneswitch: 'Desliza entre 3 carriles para esquivar los bloques que se acercan. La velocidad nunca deja de subir — a veces solo queda un carril libre.',
          tiltbalance: 'Inclina una plataforma que se acorta para mantener la bola rodando — esquiva los agujeros, no caigas por el borde.',
          flashgrid: 'Toca la celda azul antes de que se apague — nunca toques la trampa roja, o pierdes al instante.',
          grappleswing: 'Mantén presionado para lanzar un gancho, balancéate como un péndulo y suelta en la cima del arco para volar al siguiente anclaje.',
          eyetrick: 'Toca el color de tinta real, no la palabra — la clásica trampa del efecto Stroop con un temporizador que se acorta.',
          focuslock: 'Sigue un punto brillante mientras se mezcla en un enjambre idéntico que se mueve — piérdelo de vista y es el fin.',
          trajectory: 'Tira hacia atrás como una honda y suelta para lanzar un disparo en arco a un anillo lejano — el viento hace que cada tiro sea más difícil de calcular.'
        }
      },
      profile: {
        title: '👤 Mi perfil', sub: 'Tu nombre de usuario, partidas jugadas, mejores puntuaciones y rangos.',
        signInNote: 'Inicia sesión con Google para guardar puntuaciones, competir en las clasificaciones y editar tu perfil.',
        usernameLabel: 'Nombre de usuario', usernamePlaceholder: 'tu_nombre', save: 'Guardar',
        countryLabel: '🌍 País', countryPlaceholder: 'Elige tu país', countryNote: 'Se muestra como una bandera junto a tu nombre en las clasificaciones.',
        usernameInvalid: '⚠️ 3–20 caracteres, solo letras/números/_.', usernameTaken: '⚠️ Ese nombre de usuario ya está en uso.',
        saved: '✅ ¡Guardado!', gamesPlayed: '🎮 Partidas jugadas', noScores: 'Aún no hay puntuaciones. ',
        goPlay: 'Ve a jugar algo desafiante 🔥', tableGame: 'Juego', tableBest: 'Mejor', tablePlays: 'Partidas', tableRank: 'Rango',
        favoritesTitle: '⭐ Juegos favoritos', noFavorites: 'Aún no tienes favoritos — toca ☆ en cualquier juego para fijarlo aquí.'
      },
      admin: {
        title: '📊 Panel de administración', sub: 'Estadísticas de jugadores y partidas por juego. Solo para administradores.',
        signInRequired: 'El acceso de administrador requiere iniciar sesión.', notAdmin: '⛔ Esta cuenta no es administradora.',
        overview: 'Resumen', registeredPlayers: 'JUGADORES REGISTRADOS', totalPlaysAll: 'PARTIDAS TOTALES (TODOS LOS VISITANTES)',
        perGame: 'Por juego', tableGame: 'Juego', tablePlayersWithScores: 'Jugadores con puntuación',
        tablePlaysByPlayers: 'Partidas de jugadores', tableTotalPlays: 'Partidas totales'
      },
      game: {
        flappy: {
          hint: 'Toca / haz clic / pulsa Espacio para volar. El hueco se desplaza hacia arriba y abajo a medida que se acerca cada tubo — calcula dónde estará, no dónde está ahora. Pasa un hueco para sumar 1 punto.',
          seoNote: 'Flappy Neon es un juego difícil de tocar-para-volar que puedes jugar gratis en línea, directamente en tu navegador. A diferencia de un hueco fijo, la abertura de cada tubo se desplaza hacia arriba y abajo al acercarse, obligándote a predecir dónde estará en vez de solo reaccionar a dónde está ahora — superar los 10 puntos lo convierte en uno de los juegos de volar más difíciles.',
          tapToStart: 'Toca para empezar', gameOver: '¡Buen intento! Toca para jugar de nuevo', bestLabel: 'MEJOR {n}'
        },
        dodge: {
          hint: 'Usa las flechas / WASD (o arrastra con el dedo) para mover el cuadrado azul de INICIO a META. Tocar una bala rosa = vuelves al inicio.',
          seoNote: 'Hardest Dodge es un juego gratuito de esquivar balas en línea, hecho para jugadores que quieren un reto real. Guía el cuadrado azul a través de balas giratorias hasta la meta — un toque y vuelves al inicio, lo que lo convierte en uno de los juegos de esquivar más difíciles en línea.',
          statusLine: 'Victorias: {wins}   Reintentos: {deaths}', winsLabel: 'VICTORIAS {n}'
        },
        reaction: {
          hint: 'Persona promedio: ~250ms. Gamer: ~180ms. ¿Y tú?',
          seoNote: 'Este juego gratuito de prueba de reacción mide qué tan rápidos son realmente tus reflejos. Haz clic en el instante en que la pantalla se ponga verde — cualquier resultado bajo 200 milisegundos es bueno, lo que hace de la consistencia uno de los retos de reflejos más difíciles en línea.',
          clickToStartTitle: 'Haz clic para empezar',
          clickToStartBody: 'Espera a que la pantalla se ponga VERDE, luego haz clic lo más rápido posible.<br>Hacer clic antes de tiempo en ROJO = falta.',
          waitTitle: 'Esperando el verde…', waitBody: '¡Todavía no hagas clic!', goTitle: '¡HAZ CLIC AHORA!',
          tooSoonTitle: '⏳ ¡Demasiado pronto!', tooSoonBody: 'Espera el verde. Toca para intentarlo de nuevo.',
          rankLightning: '🏆 ¡Relámpago!', rankFast: '⚡ Muy rápido', rankOk: '👍 No está mal', rankSlow: '🐢 Un poco lento…',
          tapAgain: 'Toca para jugar de nuevo.', bestMsLabel: 'MEJOR {n}ms'
        },
        timer: {
          hint: 'Diferencia ≤ 0.010s: sobrehumano · ≤ 0.030s: aprobado · > 0.030s: fallo. Tu puntaje es tu racha de victorias.',
          seoNote: 'Perfect Second es un juego difícil de precisión con una sola regla: detener el reloj exactamente en 1.000 segundos. No hay ninguna señal visual que te ayude — un milisegundo de diferencia ya cuenta como derrota, lo que lo convierte en uno de los juegos de precisión más difíciles que puedes jugar gratis en línea.',
          initialMsg: 'Pulsa INICIAR — el reloj corre y se <b>OCULTA tras 0.3s</b>.<br>Pulsa DETENER exactamente en <b>1.000 segundos</b>.',
          startBtn: 'INICIAR', stopBtn: 'DETENER', runningMsg: 'Cuenta mentalmente… ¡pulsa DETENER en <b>1.000s</b>!',
          godlike: '🏆 <b>{s}s</b> — ¡SOBREHUMANO! Diferencia de {ms}ms', pass: '✅ <b>{s}s</b> — ¡Aprobado! Diferencia de {ms}ms',
          fail: '<b>{s}s</b> — Diferencia de {ms}ms — ¡inténtalo de nuevo!', winStreak: '🔥 Racha de victorias: {n}', bestStreakLabel: 'MEJOR RACHA {n}'
        },
        memory: {
          hint: 'Observa la secuencia; luego los 4 paneles intercambian posiciones antes de tu turno — recuerda cada paso por COLOR, no por posición. La secuencia crece cada ronda y se reproduce MÁS RÁPIDO cada vez. Una nota equivocada termina la ronda.',
          seoNote: 'Neon Memory es un juego de memoria gratuito y difícil en línea: observa una secuencia de colores y luego repítela — pero los paneles se barajan a nuevas posiciones antes de que respondas, así que la memoria muscular espacial no te servirá, solo el recuerdo real del color. Cada ronda añade un paso más, así que un solo error termina la partida.',
          initialStatus: 'Memoriza la secuencia — luego repítela en orden', watch: '👀 Observa con atención…',
          yourTurn: '🎮 ¡Tu turno!', almost: '¡Casi! Llegaste a la ronda {n}', perfect: '✅ ¡Perfecto!',
          round: 'Ronda {n}', start: 'INICIAR', playAgain: 'JUGAR DE NUEVO', bestLabel: 'MEJOR {n}'
        },
        avoid: {
          hint: 'Mueve el ratón / arrastra el dedo para esquivar los meteoritos. Puntaje = segundos sobrevividos.',
          seoNote: 'Meteor Rain te sumerge en una lluvia constante de meteoritos que no deja de acelerar. Es un juego gratuito de esquivar en línea, sin ningún patrón seguro que memorizar — solo reflejos rápidos y algo de suerte para sobrevivir un segundo más.',
          tapToStart: 'Toca para empezar', gameOver: '¡Tan cerca! Toca para jugar de nuevo', bestSecLabel: 'MEJOR {n}s'
        },
        stack: {
          hint: 'Toca / Espacio para soltar el bloque. Cualquier saliente se corta — los bloques se hacen más delgados y la velocidad aumenta.',
          seoNote: 'Neon Stack es un juego gratuito de apilar en línea, difícil, centrado en una sola habilidad: el tiempo. Suelta cada bloque con precisión o la parte que sobresalga se cortará — si te quedas sin bloque, la torre se acaba, lo que lo hace uno de los juegos de apilar más difíciles.',
          gameOver: '¡Tan cerca! Toca para jugar de nuevo', bestLabel: 'MEJOR {n}'
        },
        aim: {
          hint: 'Acierta 20 objetivos — cada uno más pequeño que el anterior. Cada fallo añade una penalización de +1s. Gana el menor tiempo.',
          seoNote: 'Este entrenador de puntería gratuito en línea está hecho para castigar los clics descuidados: acierta 20 objetivos que se encogen lo más rápido posible mientras cada fallo añade una penalización de tiempo. Es un juego de puntería difícil, ya sea que estés calentando o buscando un mejor puntaje.',
          tapToStart: 'Toca para empezar — 20 objetivos', statsLine: '🎯 {hit}/{total}   ❌ {miss}   ⏱ {el}s',
          missPenalty: '(incluye {miss}s de penalización por fallos) — Toca para reintentar', bestSecLabel: 'MEJOR {n}s'
        },
        maze: {
          hint: 'Entra en el recuadro de INICIO, luego traza el corredor oscuro hasta la META antes de que se acabe el tiempo. Tocar el área brillante = vuelves al inicio. Móvil: arrastra el dedo.',
          seoNote: 'Wire Maze es un juego gratuito en línea de pulso firme: guía tu cursor por un corredor estrecho hasta la meta antes de que se acabe el tiempo, y tocar una pared te manda directo al inicio. Fácil de entender, genuinamente difícil de terminar.',
          moveIntoStart: 'Mueve el cursor dentro de INICIO', headToGoal: 'Dirígete a la META — ¡no toques las paredes brillantes!',
          wallTouched: '¡Tocaste la pared — de vuelta a INICIO!', cleared: '🏆 ¡SUPERADO! Entra en INICIO para jugar de nuevo.',
          outOfBounds: 'Fuera de límites — ¡de vuelta a INICIO!', timeUp: '⏰ ¡Muy lento — de vuelta a INICIO!',
          statusLine: '{msg}   (Victorias {wins} · Reintentos {deaths})', winsLabel: 'VICTORIAS {n}'
        },
        runner: {
          hint: 'Toca / Espacio para saltar los pinchos. La velocidad aumenta sin parar — el puntaje es la distancia.',
          seoNote: 'Spike Runner es un juego de correr sin fin, gratuito y difícil, en línea. Salta los pinchos, sobrevive a los aumentos de velocidad y descubre hasta dónde puedes llegar — un formato simple que se vuelve uno de los juegos de correr más difíciles cuando el ritmo se acelera.',
          tapToStart: 'Toca para correr', gameOver: '¡Buena carrera! Toca para jugar de nuevo', bestMLabel: 'MEJOR {n}m'
        },
        colorrush: {
          hint: 'Toca la tarjeta solo cuando su color coincida con el color OBJETIVO. Tocar el color equivocado o fallar una coincidencia reinicia tu racha — la ventana se acorta cuanto más sobrevivas.',
          seoNote: 'Color Rush es un juego gratuito en línea de reflejos tipo "go/no-go": observa el color objetivo y toca solo cuando la tarjeta que parpadea coincida con él. Tocar el color equivocado o dudar ante una coincidencia real termina tu racha, lo que hace que mantener la calma bajo una ventana de tiempo cada vez más corta sea uno de los retos de reflejos más difíciles.',
          targetLabel: 'OBJETIVO', tapToStartTitle: 'Toca para empezar',
          tapToStartBody: 'Observa el color OBJETIVO. Toca la tarjeta solo cuando coincida — ¡no toques cuando no coincida!',
          mistakeTapWrong: '❌ Color equivocado — ¡racha de {n} guardada, reiniciando!', mistakeMissedMatch: '⏰ ¡Lo perdiste — racha de {n} guardada, reiniciando!',
          streakLabel: 'Racha {n}', bestStreakLabel: 'MEJOR RACHA {n}'
        },
        numrush: {
          hint: 'Toca 1, 2, 3… hasta el 25, en orden, lo más rápido que puedas. Cada toque erróneo añade una penalización de +1s. Gana el menor tiempo.',
          seoNote: 'Number Rush es un juego gratuito en línea de velocidad y concentración basado en la clásica grilla de Schulte: encuentra y toca cada número del 1 al 25 en orden, lo más rápido posible, mientras cada toque erróneo te cuesta una penalización de tiempo. Fácil de explicar, brutalmente difícil de hacer rápido.',
          tapToStart: 'Toca el 1 para empezar — encuentra todos los números en orden', findLabel: 'Buscar {n}',
          missPenalty: '(incluye {miss}s de penalización por fallos)', bestLabel: 'MEJOR {n}s'
        },
        serpent: {
          hint: 'Usa las flechas / WASD, o desliza en móvil, para dirigirte. Come el punto para crecer — la velocidad aumenta cada vez. Chocar con una pared o tu propia cola termina la partida.',
          seoNote: 'Neon Serpent es un juego gratuito de serpiente en línea, difícil: guía una serpiente que crece en una cuadrícula de 20x20, comiendo puntos mientras esquivas las paredes y tu propia cola cada vez más larga. Las reglas son las clásicas que todos conocen — el aumento de velocidad es lo que lo convierte en uno de los juegos de serpiente más difíciles de sostener por mucho tiempo.',
          tapToStart: 'Toca o pulsa cualquier flecha para empezar', gameOver: '¡Buena partida! Toca para jugar de nuevo', bestLabel: 'MEJOR {n} pts'
        },
        keystrike: {
          hint: 'Escribe la palabra resaltada antes de que llegue a la línea roja inferior. Las teclas erróneas se ignoran — sigue escribiendo. La velocidad aumenta con cada palabra.',
          seoNote: 'Keystrike es un juego gratuito de mecanografía difícil en línea: las palabras caen desde arriba y debes escribir cada una, letra por letra, antes de que cruce la línea inferior. Empieza lento, pero la velocidad de caída y la frecuencia de aparición no dejan de subir, lo que hace de la precisión sostenida a alta velocidad uno de los retos de mecanografía más difíciles que encontrarás en un navegador.',
          tapToStart: 'Toca aquí o pulsa cualquier tecla para empezar', mobileHint: 'En móvil, toca el carril para abrir tu teclado.',
          gameOver: '¡Buena escritura! Toca para ir de nuevo', bestLabel: 'MEJOR {n} palabras'
        },
        siege: {
          hint: 'Mueve el ratón / arrastra el dedo para esquivar el fuego que llega desde todos los lados. Puntaje = segundos sobrevividos.',
          seoNote: 'Neon Siege te coloca en medio de una arena abierta bajo fuego desde todas las direcciones a la vez. Es un juego gratuito de supervivencia difícil en línea sin ningún patrón que memorizar — las balas apuntan hacia ti en el instante en que aparecen, así que solo el movimiento continuo y los reflejos rápidos te mantienen con vida un segundo más.',
          tapToStart: 'Toca para empezar', gameOver: '¡Tan cerca! Toca para jugar de nuevo', bestSecLabel: 'MEJOR {n}s'
        },
        breaker: {
          hint: 'Mueve el ratón / arrastra el dedo para dirigir la paleta. Toca / Espacio para lanzar. Destruye cada ladrillo — el tablero se rellena más rápido cada vez. Un fallo y se acabó.',
          seoNote: 'Neon Breaker es un juego gratuito de romper ladrillos difícil en línea: mantén la bola viva con tu paleta mientras despejas tableros completos de ladrillos. Cada tablero despejado trae uno nuevo con la bola un poco más rápida, así que aguantar una racha larga es lo que hace de este uno de los juegos de ladrillos más difíciles que encontrarás en un navegador.',
          tapToStart: 'Toca o pulsa Espacio para lanzar', gameOver: '¡Buena partida! Toca para jugar de nuevo', bestLabel: 'MEJOR {n} ladrillos'
        },
        slice: {
          hint: 'Desliza en la dirección que indica la flecha de cada orbe para cortarlo — la dirección equivocada solo cuenta como fallo, sin penalización. Cortar una bomba en CUALQUIER dirección termina la partida al instante.',
          seoNote: 'Neon Slice es un juego de corte rápido y gratuito que puedes jugar en línea directamente en tu navegador. Los orbes salen disparados desde abajo trazando un arco, cada uno marcado con una dirección de corte obligatoria — desliza en la dirección correcta para sumar puntos, mientras que cortar una bomba en cualquier dirección termina la partida al instante, lo que hace de la puntería direccional precisa a alta velocidad uno de los retos de corte más difíciles en línea.',
          tapToStart: 'Desliza para empezar', gameOver: '¡Cortaste una bomba! Desliza para jugar de nuevo', bestLabel: 'MEJOR {n}'
        },
        gravity: {
          hint: 'Toca / Espacio para invertir la gravedad entre el suelo y el techo. Esquiva los pinchos — la velocidad no deja de aumentar.',
          seoNote: 'Gravity Flip es un juego de plataformas difícil y gratuito en línea: invierte la gravedad para pegar tu bloque al suelo o al techo, esquivando pinchos en ambos lados mientras la velocidad no deja de subir. Una sola regla de un botón, brutalmente difícil de sostener por mucho tiempo — un giro mal cronometrado y se acabó.',
          tapToStart: 'Toca para empezar', gameOver: '¡Buena partida! Toca para jugar de nuevo', bestMLabel: 'MEJOR {n}m'
        },
        echo: {
          hint: 'Toca / haz clic / pulsa Espacio en el instante en que el anillo que se encoge se alinee con el anillo objetivo punteado. Demasiado pronto, demasiado tarde o no tocar termina la partida.',
          seoNote: 'Echo Tap es un juego gratuito de precisión rítmica en línea: un anillo se encoge hacia un objetivo fijo y debes tocar en el instante exacto en que se alinean. Cada acierto acelera el ritmo y reduce la ventana de tolerancia, lo que hace de la precisión sostenida uno de los retos de tiempo más difíciles que encontrarás en un navegador.',
          tapToStart: 'Toca para empezar', gameOver: '¡Tan cerca! Toca para intentarlo de nuevo', bestLabel: 'MEJOR {n}'
        },
        catch: {
          hint: 'Mueve el ratón / arrastra el dedo para deslizar el cubo. Atrapa solo las gemas que coincidan con el color OBJETIVO — atrapar el color equivocado termina la partida. Perder una gema buena no importa, sigue intentando.',
          seoNote: 'Prism Catch es un juego gratuito de coincidencia de colores en línea: gemas de todos los colores caen desde arriba y solo debes atrapar las que coincidan con el color objetivo actual. Perder una gema buena no cuesta nada, pero atrapar un solo color equivocado termina la partida al instante — y el objetivo sigue cambiando, lo que hace de mantener la concentración uno de los retos de atrapar más difíciles que hay.',
          targetLabel: 'OBJETIVO', tapToStart: 'Toca para empezar', gameOver: '¡Color equivocado! Toca para intentarlo de nuevo', bestLabel: 'MEJOR {n}'
        },
        voidjumper: {
          hint: 'Mantén presionado para cargar un salto — arrastra izquierda/derecha mientras cargas para apuntar, suelta para saltar. El vacío se desplaza hacia arriba sin parar, cada vez más rápido.',
          seoNote: 'Void Jumper es un plataformero vertical gratuito y muy difícil: carga tu salto, apunta entre pequeñas plataformas flotantes — algunas se desmoronan al aterrizar, otras se mueven de lado — mientras la pantalla se desplaza hacia arriba a velocidad creciente. Quedarte atrás o fallar una plataforma termina la partida. ¿Qué tan alto puedes llegar?',
          tapToStart: 'Toca para empezar', gameOver: '¡Caíste al vacío! Toca para reintentar', bestMLabel: 'MEJOR {n}m'
        },
        laneswitch: {
          hint: 'Flechas / A-D (o toca izquierda/derecha en la carretera) para cambiar de carril. Esquiva los bloques — la velocidad sube sin parar y a veces solo queda un carril libre.',
          seoNote: 'Lane Switch es un juego de reflejos gratuito y muy difícil con 3 carriles: los bloques se deslizan hacia ti y debes moverte entre el carril izquierdo, central y derecho para sobrevivir. Siempre hay exactamente un carril seguro, pero con la velocidad en constante aumento, detectarlo y reaccionar a tiempo se vuelve uno de los retos de esquiva más difíciles del navegador.',
          tapToStart: 'Toca o presiona ←/→ para empezar', gameOver: '¡Tan cerca! Toca para reintentar', bestMLabel: 'MEJOR {n}m'
        },
        tiltbalance: {
          hint: 'Mueve el mouse / arrastra el dedo izquierda-derecha (o usa las flechas) para inclinar la plataforma y rodar la bola. No dejes que caiga por los extremos ni por un agujero. La plataforma se acorta y aparecen agujeros mientras sobrevives más tiempo.',
          seoNote: 'Tilt Balance es un juego físico de equilibrio gratuito y muy difícil: inclina una plataforma estrecha moviendo el mouse para mantener una bola de neón rodando sobre ella. La plataforma se acorta poco a poco desde ambos extremos y aparecen agujeros aleatorios con el tiempo, exigiendo ajustes constantes y precisos. La puntuación son los segundos que mantienes la bola con vida — uno de los juegos de equilibrio más difíciles del navegador.',
          tapToStart: 'Toca / haz clic para empezar', gameOver: 'Fin de la partida — toca para reintentar', bestSecLabel: 'MEJOR {n}s'
        },
        flashgrid: {
          hint: 'Toca la celda AZUL brillante antes de que se apague. Nunca toques la celda trampa ROJA — eso termina la partida al instante. Perder una celda azul cuesta una vida; tienes 3.',
          seoNote: 'Flash Grid es un juego gratuito de reflejos en cuadrícula: una celda aleatoria se ilumina en azul y debes tocarla antes de que se apague, mientras que ocasionales celdas trampa rojas nunca deben tocarse. La ventana de tiempo se acorta y las trampas aparecen más seguido conforme sube tu puntuación, haciendo que el reconocimiento instantáneo de color y el autocontrol sean la clave para una puntuación alta en esta brutal prueba de reflejos.',
          bestLabel: 'MEJOR {n}', scoreLabel: 'Puntos: {n}', tapToStartTitle: 'Toca para empezar', tapToStartBody: 'Toca la celda azul antes de que se apague. Nunca toques la roja.',
          gameOverTitle: 'Fin de la partida', finalScoreLabel: 'Puntos: {n}', tapToRestart: 'Toca para jugar de nuevo'
        },
        grappleswing: {
          hint: 'Mantén presionado para engancharte al siguiente punto de anclaje y balancearte como un péndulo. Suelta en la cima del arco para volar hacia adelante — cronométralo bien o caerás.',
          seoNote: 'Grapple Swing es un juego físico gratuito y muy difícil: mantén presionado para engancharte a puntos de anclaje por delante, gana impulso balanceándote como un péndulo, y suelta justo en el instante preciso para volar hacia adelante y atrapar el siguiente gancho. Los anclajes se vuelven más difíciles de alcanzar. Fallar el momento y la gravedad te hará caer. Una sola regla de un botón, pero con una precisión implacable.',
          tapToStart: 'Mantén presionado para empezar a balancearte', gameOver: '¡Caíste! Toca para reintentar', bestLabel: 'MEJOR {n}'
        },
        eyetrick: {
          hint: 'Aparece una palabra de color pintada con una tinta de color diferente. Toca el botón que coincida con el COLOR DE LA TINTA, no con lo que dice la palabra — la ventana de tiempo se acorta conforme sube tu puntuación. Un toque equivocado o quedarte sin tiempo cuesta una vida. 3 vidas en total.',
          seoNote: 'Eye Trick es un juego de reflejos gratuito basado en el efecto Stroop, un famoso fenómeno de la ciencia cognitiva en el que leer una palabra de color interfiere con nombrar el color de tinta en que está impresa. Toca solo el color de tinta real mientras el reloj se acorta con cada respuesta correcta, y pruebas ocasionales coincidentes comprueban si realmente estás mirando o solo leyendo en piloto automático.',
          tapToStart: 'Toca para empezar — ¡toca el COLOR DE TINTA, no la palabra!', gameOver: 'Fin de la partida — toca para reintentar', bestLabel: 'MEJOR {n}'
        },
        focuslock: {
          hint: 'Observa el punto amarillo, luego síguelo mientras todos los puntos se mezclan. Cuando se detengan, toca el que seguiste. Un toque equivocado cuesta una vida — tienes 3.',
          seoNote: 'Focus Lock es un juego de atención gratuito basado en el seguimiento de múltiples objetos, una prueba clásica de la ciencia cognitiva sobre la atención visual sostenida. Un punto destella brevemente y luego se mezcla en un enjambre idéntico que se desplaza y rebota durante varios segundos. Perder de vista tu objetivo un instante termina la racha, lo que lo convierte en uno de los juegos de concentración más difíciles que encontrarás en un navegador — sin descargas.',
          tapToStart: 'Toca para empezar', roundLabel: 'Ronda {n}', revealMsg: '¡Observa el punto amarillo!', trackMsg: '¡Síguelo!', chooseMsg: 'Toca el punto que seguiste',
          gameOver: 'Fin de la partida', finalLine: 'Llegaste a la ronda {n} — Toca para jugar de nuevo', bestLabel: 'MEJOR {n}'
        },
        trajectory: {
          hint: 'Arrastra hacia atrás desde el punto de lanzamiento como una honda, luego suelta para disparar. Más distancia de arrastre = más potencia. Acierta en el anillo de neón para sumar puntos — 3 fallos y se acaba.',
          seoNote: 'Trajectory es un juego gratuito de puntería tipo artillería basado en física parabólica real: arrastra hacia atrás para fijar el ángulo y la potencia, luego suelta para lanzar un proyectil brillante hacia un anillo distante. La distancia, el tamaño del objetivo, el viento y la deriva vertical aumentan con tu puntuación, haciendo que mantener la precisión sea uno de los retos de puntería más difíciles que encontrarás en un navegador.',
          scoreLabel: 'Puntos: {n}', distanceLabel: 'DIST {n}m', windLabel: 'VIENTO {dir} {n}', tapToStart: 'Arrastra hacia atrás desde el ancla para apuntar — suelta para disparar',
          gameOver: 'Fin de la partida — toca para reintentar', bestLabel: 'MEJOR {n}'
        }
      }
    },

    pt: {
      common: {
        back: ARROW_L + ' Jogos', backAll: ARROW_L + ' Voltar para todos os jogos', play: 'JOGAR ' + ARROW_R, moreHardGames: 'Mais jogos difíceis:',
        leaderboard: '🏆 Classificação', top10: '🏆 Top 10 — {game}', loading: 'Carregando…',
        noScoresYet: 'Ainda não há pontuações — seja o primeiro! 🔥', scoreSavedAuto: 'Sua melhor pontuação é salva automaticamente.',
        signInToBoard: 'Entre com o Google para aparecer na classificação!', signInToPlayTitle: 'Entre para jogar',
        signInToPlayBody: 'Entre com o Google para jogar {game}, salvar suas melhores pontuações e subir na classificação.',
        signInGoogleFallback: 'Entrar com o Google', player: 'jogador', signOutTitle: 'Sair', close: 'Fechar',
        start: 'INÍCIO', goal: 'META', playsLine: ARROW_R + ' <b>{n}</b> jogadas',
        pin: 'Fixar nos favoritos', unpin: 'Remover dos favoritos',
        donate: 'Doar', donateTooltip: 'Apoie o Chuong US Games pelo PayPal ❤️'
      },
      index: {
        tagline: 'Fácil de jogar · Difícil de vencer', heroLine1: 'Fácil de jogar', heroLine2: 'Extremamente difícil de vencer',
        heroP: 'Novos jogos adicionados o tempo todo — sem necessidade de instalação. Clique e jogue. Acha que consegue vencer todos? 🔥',
        cta: 'JOGAR AGORA',
        introP: 'Chuong US Games é uma coleção gratuita de jogos difíceis que você pode jogar on-line sem download nem cadastro. Cada um leva dez segundos para aprender — estilo flappy, desviar de balas, treino de mira, velocidade de reação, memória, labirinto e muito mais — mas pouquíssimos jogadores conseguem superar sua própria melhor pontuação. Se você procura um jogo realmente difícil para testar seus reflexos e paciência, comece abaixo.',
        searchPlaceholder: '🔍 Buscar jogos… (ex.: flappy, aim, maze)', faqTitle: 'Perguntas frequentes',
        faq1Q: 'O que torna esses jogos difíceis?',
        faq1A: 'Cada jogo aqui tem regras simples de uma linha, mas exige tempo, precisão ou reflexos muito apertados. A maioria dos jogadores não consegue superar sua própria melhor pontuação nas primeiras tentativas.',
        faq2Q: 'Os jogos difíceis são gratuitos?',
        faq2A: 'Sim — todos os jogos são gratuitos, sem download nem cadastro. Uma conta gratuita apenas desbloqueia a classificação.',
        faq3Q: 'Preciso baixar algo para jogar?',
        faq3A: 'Não. Todos os jogos rodam direto no seu navegador, no computador ou no celular.',
        footer: '© 2026 Chuong.us | chuonglife@gmail.com',
        card: {
          flappy: 'Toque para voar pelos vãos. Todo mundo sabe jogar. Quase ninguém marca 10.',
          dodge: 'Guie o quadrado azul por entre balas giratórias até a meta. Um toque te manda de volta ao início.',
          reaction: 'Clique no instante em que a tela ficar verde. Só conta pontuação abaixo de 200ms.',
          timer: 'Pare o relógio exatamente em 1.000 segundos. Um milissegundo a mais já é derrota.',
          memory: 'Observe e repita uma sequência de cores que só aumenta. Até onde vai a sua memória?',
          avoid: 'Desvie de uma chuva de meteoros que não para de acelerar. Sobreviva um segundo de cada vez.',
          stack: 'Empilhe blocos com o tempo perfeito. Qualquer parte saliente é cortada — sem bloco, acabou.',
          aim: 'Acerte 20 alvos cada vez menores o mais rápido possível. Cada erro adiciona uma penalidade.',
          maze: 'Trace o cursor por um corredor estreito até a meta. Tocar uma parede te manda de volta ao início.',
          runner: 'Pule espinhos numa velocidade que só aumenta. Até onde você consegue correr?',
          colorrush: 'Toque só quando o cartão bater com a cor alvo. Um toque errado ou uma falha zera sua sequência.',
          numrush: 'Toque de 1 a 25 em ordem o mais rápido possível. Cada toque errado custa um segundo.',
          serpent: 'Guie uma cobra que cresce numa grade de 20x20. Cada mordida deixa tudo mais rápido — uma curva errada encerra a corrida.',
          keystrike: 'Digite cada palavra que cai antes que ela chegue na linha inferior. A velocidade só aumenta — perder uma palavra encerra a partida.',
          siege: 'Desvie de balas disparadas de todas as direções ao mesmo tempo. Sobreviva um segundo de cada vez.',
          breaker: 'Rebata a bola e destrua todos os tijolos. Os quadros se enchem mais rápido a cada vez — uma falha e acabou.',
          slice: 'Deslize para cortar orbes brilhantes antes que caiam. Cortar uma bomba por engano encerra a partida na hora.',
          gravity: 'Inverta a gravidade para trocar entre o chão e o teto, desviando de espinhos dos dois lados. A velocidade nunca para de subir.',
          echo: 'Toque no instante em que o anel encolhendo se alinha com o alvo. A janela fica menor a cada rodada.',
          catch: 'Deslize o balde para pegar somente a cor alvo. Pegar a cor errada encerra a partida.',
          voidjumper: 'Carregue, mire e salte entre plataformas que desmoronam enquanto o vazio sobe cada vez mais rápido.',
          laneswitch: 'Deslize entre 3 faixas para desviar dos blocos que se aproximam. A velocidade nunca para de subir — às vezes só resta uma faixa livre.',
          tiltbalance: 'Incline uma plataforma que encolhe para manter a bola rolando — desvie dos buracos, não caia pela borda.',
          flashgrid: 'Toque na célula azul antes que ela apague — nunca toque na armadilha vermelha, ou é game over instantâneo.',
          grappleswing: 'Segure para lançar um gancho, balance como um pêndulo e solte no topo do arco para voar até a próxima âncora.',
          eyetrick: 'Toque na cor real da tinta, não na palavra — a clássica armadilha do efeito Stroop com um cronômetro que encolhe.',
          focuslock: 'Acompanhe um ponto brilhante enquanto ele se mistura em um enxame idêntico em movimento — perdê-lo de vista é o fim.',
          trajectory: 'Puxe para trás como um estilingue e solte para lançar um tiro em arco a um anel distante — o vento torna cada tiro mais difícil de calcular.'
        }
      },
      profile: {
        title: '👤 Meu perfil', sub: 'Seu nome de usuário, jogos jogados, melhores pontuações e posições.',
        signInNote: 'Entre com o Google para salvar pontuações, competir na classificação e editar seu perfil.',
        usernameLabel: 'Nome de usuário', usernamePlaceholder: 'seu_nome', save: 'Salvar',
        countryLabel: '🌍 País', countryPlaceholder: 'Selecione seu país', countryNote: 'Aparece como uma bandeira ao lado do seu nome nas classificações.',
        usernameInvalid: '⚠️ 3–20 caracteres, apenas letras/números/_.', usernameTaken: '⚠️ Esse nome de usuário já está em uso.',
        saved: '✅ Salvo!', gamesPlayed: '🎮 Jogos jogados', noScores: 'Ainda não há pontuações. ',
        goPlay: 'Vá jogar algo desafiador 🔥', tableGame: 'Jogo', tableBest: 'Melhor', tablePlays: 'Jogadas', tableRank: 'Posição',
        favoritesTitle: '⭐ Jogos favoritos', noFavorites: 'Ainda sem favoritos — toque em ☆ em qualquer jogo para fixá-lo aqui.'
      },
      admin: {
        title: '📊 Painel de administração', sub: 'Estatísticas de jogadores e jogadas por jogo. Somente para administradores.',
        signInRequired: 'O acesso de administrador exige login.', notAdmin: '⛔ Esta conta não é administradora.',
        overview: 'Visão geral', registeredPlayers: 'JOGADORES CADASTRADOS', totalPlaysAll: 'TOTAL DE JOGADAS (TODOS OS VISITANTES)',
        perGame: 'Por jogo', tableGame: 'Jogo', tablePlayersWithScores: 'Jogadores com pontuação',
        tablePlaysByPlayers: 'Jogadas de jogadores', tableTotalPlays: 'Total de jogadas'
      },
      game: {
        flappy: {
          hint: 'Toque / clique / pressione Espaço para voar. O vão se desloca para cima e para baixo conforme cada cano se aproxima — calcule onde ele vai estar, não onde está agora. Passe por um vão para marcar 1 ponto.',
          seoNote: 'Flappy Neon é um jogo difícil de tocar-para-voar que você pode jogar de graça on-line, direto no navegador. Diferente de um vão fixo, a abertura de cada cano se desloca para cima e para baixo ao se aproximar, obrigando você a prever onde ela vai estar em vez de só reagir a onde está agora — ultrapassar 10 pontos faz dele um dos jogos de voar mais difíceis que existem.',
          tapToStart: 'Toque para começar', gameOver: 'Boa tentativa! Toque para jogar de novo', bestLabel: 'MELHOR {n}'
        },
        dodge: {
          hint: 'Use as setas / WASD (ou arraste com o dedo) para mover o quadrado azul do INÍCIO até a META. Tocar uma bala rosa = volta ao início.',
          seoNote: 'Hardest Dodge é um jogo gratuito de desviar de balas on-line, feito para quem quer um desafio de verdade. Guie o quadrado azul por entre balas giratórias até a meta — um toque e você volta ao início, o que faz dele um dos jogos de desviar mais difíceis on-line.',
          statusLine: 'Vitórias: {wins}   Tentativas: {deaths}', winsLabel: 'VITÓRIAS {n}'
        },
        reaction: {
          hint: 'Pessoa comum: ~250ms. Gamer: ~180ms. E você?',
          seoNote: 'Este jogo gratuito de teste de reação mede o quão rápidos são seus reflexos de verdade. Clique no instante em que a tela ficar verde — qualquer resultado abaixo de 200 milissegundos é uma boa pontuação, o que torna a consistência um dos desafios de reflexo mais difíceis on-line.',
          clickToStartTitle: 'Clique para começar',
          clickToStartBody: 'Espere a tela ficar VERDE e clique o mais rápido possível.<br>Clicar cedo, no VERMELHO, é falta.',
          waitTitle: 'Esperando o verde…', waitBody: 'Ainda não clique!', goTitle: 'CLIQUE AGORA!',
          tooSoonTitle: '⏳ Cedo demais!', tooSoonBody: 'Espere o verde. Toque para tentar de novo.',
          rankLightning: '🏆 Raio!', rankFast: '⚡ Muito rápido', rankOk: '👍 Nada mal', rankSlow: '🐢 Meio devagar…',
          tapAgain: 'Toque para jogar de novo.', bestMsLabel: 'MELHOR {n}ms'
        },
        timer: {
          hint: 'Diferença ≤ 0.010s: excepcional · ≤ 0.030s: aprovado · > 0.030s: falhou. Sua pontuação é a sequência de vitórias.',
          seoNote: 'Perfect Second é um jogo difícil de precisão com uma única regra: parar o relógio exatamente em 1.000 segundo. Não há nenhuma pista visual para ajudar — um milissegundo de diferença já conta como derrota, o que faz dele um dos jogos de precisão mais difíceis que você pode jogar de graça on-line.',
          initialMsg: 'Aperte INICIAR — o relógio roda e <b>SOME após 0.3s</b>.<br>Aperte PARAR bem em <b>1.000 segundo</b>.',
          startBtn: 'INICIAR', stopBtn: 'PARAR', runningMsg: 'Conte de cabeça… aperte PARAR em <b>1.000s</b>!',
          godlike: '🏆 <b>{s}s</b> — EXCEPCIONAL! Diferença de {ms}ms', pass: '✅ <b>{s}s</b> — Aprovado! Diferença de {ms}ms',
          fail: '<b>{s}s</b> — Diferença de {ms}ms — tente de novo!', winStreak: '🔥 Sequência de vitórias: {n}', bestStreakLabel: 'MELHOR SEQUÊNCIA {n}'
        },
        memory: {
          hint: 'Observe a sequência; depois os 4 painéis trocam de posição antes da sua vez — memorize cada passo pela COR, não pela posição. A sequência cresce a cada rodada e fica MAIS RÁPIDA a cada vez. Uma nota errada encerra a rodada.',
          seoNote: 'Neon Memory é um jogo de memória gratuito e difícil on-line: observe uma sequência de cores e depois repita — mas os painéis embaralham para novas posições antes de você responder, então a memória muscular espacial não ajuda, só a memória real de cor. Cada rodada acrescenta mais um passo, então um único erro encerra a partida.',
          initialStatus: 'Memorize a sequência — depois repita na ordem', watch: '👀 Observe com atenção…',
          yourTurn: '🎮 Sua vez!', almost: 'Quase! Você chegou até a rodada {n}', perfect: '✅ Perfeito!',
          round: 'Rodada {n}', start: 'INICIAR', playAgain: 'JOGAR DE NOVO', bestLabel: 'MELHOR {n}'
        },
        avoid: {
          hint: 'Mova o mouse / arraste o dedo para desviar dos meteoros. Pontuação = segundos sobrevividos.',
          seoNote: 'Meteor Rain te coloca em uma chuva de meteoros constante que não para de acelerar. É um jogo gratuito de desviar on-line, sem nenhum padrão seguro para decorar — só reflexos rápidos e um pouco de sorte para sobreviver mais um segundo.',
          tapToStart: 'Toque para começar', gameOver: 'Tão perto! Toque para jogar de novo', bestSecLabel: 'MELHOR {n}s'
        },
        stack: {
          hint: 'Toque / Espaço para soltar o bloco. Qualquer parte saliente é cortada — os blocos ficam mais finos e a velocidade aumenta.',
          seoNote: 'Neon Stack é um jogo gratuito de empilhar on-line, difícil, construído em torno de uma única habilidade: o tempo. Solte cada bloco com precisão ou a parte saliente é cortada — sem bloco, a torre acaba, o que faz dele um dos jogos de empilhar mais difíceis por aí.',
          gameOver: 'Tão perto! Toque para jogar de novo', bestLabel: 'MELHOR {n}'
        },
        aim: {
          hint: 'Acerte 20 alvos — cada um menor que o anterior. Cada erro adiciona uma penalidade de +1s. Menor tempo vence.',
          seoNote: 'Este treinador de mira gratuito on-line foi feito para punir cliques desleixados: acerte 20 alvos cada vez menores o mais rápido possível enquanto cada erro adiciona uma penalidade de tempo. É um jogo difícil de treino de mira, seja para aquecer ou para bater um recorde.',
          tapToStart: 'Toque para começar — 20 alvos', statsLine: '🎯 {hit}/{total}   ❌ {miss}   ⏱ {el}s',
          missPenalty: '(inclui {miss}s de penalidade por erros) — Toque para tentar de novo', bestSecLabel: 'MELHOR {n}s'
        },
        maze: {
          hint: 'Entre na caixa de INÍCIO e depois trace o corredor escuro até a META antes que o tempo acabe. Tocar a área clara = volta ao início. No celular: arraste o dedo.',
          seoNote: 'Wire Maze é um jogo gratuito de pulso firme on-line: trace o cursor por um corredor estreito até a meta antes que o tempo acabe, e tocar uma parede te manda direto de volta ao início. Simples de entender, genuinamente difícil de terminar.',
          moveIntoStart: 'Mova o cursor para dentro do INÍCIO', headToGoal: 'Siga para a META — não toque nas paredes claras!',
          wallTouched: 'Tocou a parede — de volta ao INÍCIO!', cleared: '🏆 CONCLUÍDO! Entre no INÍCIO para jogar de novo.',
          outOfBounds: 'Fora dos limites — de volta ao INÍCIO!', timeUp: '⏰ Devagar demais — de volta ao INÍCIO!',
          statusLine: '{msg}   (Vitórias {wins} · Tentativas {deaths})', winsLabel: 'VITÓRIAS {n}'
        },
        runner: {
          hint: 'Toque / Espaço para pular os espinhos. A velocidade aumenta sem parar — a pontuação é a distância.',
          seoNote: 'Spike Runner é um jogo de corrida infinita gratuito e difícil, on-line. Pule os espinhos, sobreviva aos aumentos de velocidade e veja até onde consegue chegar — um formato simples que vira um dos jogos de corrida mais difíceis quando o ritmo acelera.',
          tapToStart: 'Toque para correr', gameOver: 'Boa corrida! Toque para jogar de novo', bestMLabel: 'MELHOR {n}m'
        },
        colorrush: {
          hint: 'Toque no cartão somente quando a cor dele bater com a cor ALVO. Tocar a cor errada ou perder uma combinação zera sua sequência — a janela de tempo fica mais curta quanto mais você sobrevive.',
          seoNote: 'Color Rush é um jogo gratuito de reflexos on-line no estilo "go/no-go": observe a cor alvo e toque somente quando o cartão piscante bater com ela. Tocar a cor errada ou hesitar numa combinação real zera sua sequência na hora, o que torna manter a calma sob uma janela de tempo cada vez menor um dos desafios de reflexo mais difíceis.',
          targetLabel: 'ALVO', tapToStartTitle: 'Toque para começar',
          tapToStartBody: 'Observe a cor ALVO. Toque no cartão somente quando ele bater com ela — não toque quando não bater!',
          mistakeTapWrong: '❌ Cor errada — sequência de {n} salva, zerando agora!', mistakeMissedMatch: '⏰ Você perdeu — sequência de {n} salva, zerando agora!',
          streakLabel: 'Sequência {n}', bestStreakLabel: 'MELHOR SEQUÊNCIA {n}'
        },
        numrush: {
          hint: 'Toque 1, 2, 3… até o 25, em ordem, o mais rápido possível. Cada toque errado adiciona uma penalidade de +1s. Vence o menor tempo.',
          seoNote: 'Number Rush é um jogo gratuito de velocidade e foco on-line baseado na clássica grade de Schulte: encontre e toque cada número de 1 a 25 em ordem, o mais rápido possível, enquanto cada toque errado custa uma penalidade de tempo. Fácil de explicar, brutalmente difícil de fazer rápido.',
          tapToStart: 'Toque no 1 para começar — encontre todos os números em ordem', findLabel: 'Encontrar {n}',
          missPenalty: '(inclui {miss}s de penalidade por erro)', bestLabel: 'MELHOR {n}s'
        },
        serpent: {
          hint: 'Use as setas / WASD, ou deslize no celular, para guiar. Coma o ponto para crescer — a velocidade aumenta a cada vez. Bater na parede ou no próprio rabo encerra a partida.',
          seoNote: 'Neon Serpent é um jogo gratuito de cobrinha on-line, difícil: guie uma cobra que cresce numa grade de 20x20, comendo pontos enquanto desvia das paredes e do próprio rabo cada vez mais longo. As regras são as clássicas que todo mundo conhece — o aumento de velocidade é o que faz dele um dos jogos de cobrinha mais difíceis de sustentar por muito tempo.',
          tapToStart: 'Toque ou pressione qualquer seta para começar', gameOver: 'Boa corrida! Toque para jogar de novo', bestLabel: 'MELHOR {n} pts'
        },
        keystrike: {
          hint: 'Digite a palavra em destaque antes que ela chegue na linha vermelha inferior. Teclas erradas são ignoradas — continue digitando. A velocidade aumenta a cada palavra.',
          seoNote: 'Keystrike é um jogo gratuito de digitação difícil on-line: palavras caem do topo e você precisa digitar cada uma, letra por letra, antes que cruze a linha inferior. Começa devagar, mas a velocidade de queda e a frequência de aparição não param de subir, o que torna a precisão sustentada em alta velocidade um dos desafios de digitação mais difíceis que você vai encontrar num navegador.',
          tapToStart: 'Toque aqui ou pressione qualquer tecla para começar', mobileHint: 'No celular, toque na pista para abrir o teclado.',
          gameOver: 'Boa digitação! Toque para jogar de novo', bestLabel: 'MELHOR {n} palavras'
        },
        siege: {
          hint: 'Mova o mouse / arraste o dedo para desviar do fogo que vem de todos os lados. Pontuação = segundos sobrevividos.',
          seoNote: 'Neon Siege te coloca no meio de uma arena aberta sob fogo de todas as direções ao mesmo tempo. É um jogo gratuito de sobrevivência difícil on-line sem nenhum padrão para decorar — as balas miram em você no instante em que surgem, então só o movimento contínuo e reflexos rápidos te mantêm vivo por mais um segundo.',
          tapToStart: 'Toque para começar', gameOver: 'Tão perto! Toque para jogar de novo', bestSecLabel: 'MELHOR {n}s'
        },
        breaker: {
          hint: 'Mova o mouse / arraste o dedo para guiar a raquete. Toque / Espaço para lançar. Destrua todos os tijolos — o quadro se enche mais rápido a cada vez. Uma falha e acabou.',
          seoNote: 'Neon Breaker é um jogo gratuito de quebrar tijolos difícil on-line: mantenha a bola viva com sua raquete enquanto limpa quadros inteiros de tijolos. Cada quadro limpo traz um novo conjunto com a bola um pouco mais rápida, então aguentar uma corrida longa é o que faz dele um dos jogos de tijolos mais difíceis que você vai encontrar num navegador.',
          tapToStart: 'Toque ou pressione Espaço para lançar', gameOver: 'Boa corrida! Toque para jogar de novo', bestLabel: 'MELHOR {n} tijolos'
        },
        slice: {
          hint: 'Deslize na direção que a seta de cada orbe indica para cortá-lo — direção errada só conta como erro, sem penalidade. Cortar uma bomba em QUALQUER direção encerra a partida na hora.',
          seoNote: 'Neon Slice é um jogo de corte rápido e gratuito que você pode jogar on-line direto no navegador. Os orbes disparam de baixo em um arco, cada um marcado com uma direção de corte obrigatória — deslize na direção certa para pontuar, enquanto cortar uma bomba em qualquer direção encerra a partida na hora, tornando a mira direcional precisa em alta velocidade um dos desafios de corte mais difíceis on-line.',
          tapToStart: 'Deslize para começar', gameOver: 'Cortou uma bomba! Deslize para jogar de novo', bestLabel: 'MELHOR {n}'
        },
        gravity: {
          hint: 'Toque / Espaço para inverter a gravidade entre o chão e o teto. Desvie dos espinhos — a velocidade nunca para de aumentar.',
          seoNote: 'Gravity Flip é um jogo de corrida difícil e gratuito on-line: inverta a gravidade para grudar seu bloco no chão ou no teto, desviando de espinhos dos dois lados enquanto a velocidade só aumenta. Regra de um único botão, mas brutalmente difícil de manter vivo por muito tempo — uma inversão no momento errado e acabou.',
          tapToStart: 'Toque para começar', gameOver: 'Boa corrida! Toque para jogar de novo', bestMLabel: 'MELHOR {n}m'
        },
        echo: {
          hint: 'Toque / clique / pressione Espaço no instante em que o anel encolhendo se alinha com o anel alvo pontilhado. Cedo demais, tarde demais ou não tocar encerra a partida.',
          seoNote: 'Echo Tap é um jogo gratuito de precisão rítmica on-line: um anel encolhe em direção a um alvo fixo e você precisa tocar no instante exato em que se alinham. Cada acerto acelera o ritmo e encolhe a janela de tolerância, tornando a precisão sustentada um dos desafios de tempo mais difíceis que você vai encontrar num navegador.',
          tapToStart: 'Toque para começar', gameOver: 'Tão perto! Toque para tentar de novo', bestLabel: 'MELHOR {n}'
        },
        catch: {
          hint: 'Mova o mouse / arraste o dedo para deslizar o balde. Pegue somente as gemas que combinam com a cor ALVO — pegar a cor errada encerra a partida. Perder uma gema boa não tem problema, é só continuar.',
          seoNote: 'Prism Catch é um jogo gratuito de combinação de cores on-line: gemas de todas as cores caem do topo e você só deve pegar as que combinam com a cor alvo atual. Perder uma gema boa não custa nada, mas pegar uma única cor errada encerra a partida na hora — e o alvo continua mudando, tornando manter o foco um dos desafios de captura mais difíceis que existem.',
          targetLabel: 'ALVO', tapToStart: 'Toque para começar', gameOver: 'Cor errada! Toque para tentar de novo', bestLabel: 'MELHOR {n}'
        },
        voidjumper: {
          hint: 'Segure para carregar um pulo — arraste para a esquerda/direita enquanto carrega para mirar, solte para saltar. O vazio rola para cima sem parar, cada vez mais rápido.',
          seoNote: 'Void Jumper é um jogo de plataforma vertical gratuito e muito difícil: carregue seu pulo, mire entre pequenas plataformas flutuantes — algumas desmoronam assim que você pousa, outras se movem de lado — enquanto a tela rola para cima em velocidade crescente. Ficar para trás ou errar uma plataforma encerra a partida. Até onde você consegue subir?',
          tapToStart: 'Toque para começar', gameOver: 'Caiu no vazio! Toque para tentar de novo', bestMLabel: 'MELHOR {n}m'
        },
        laneswitch: {
          hint: 'Setas / A-D (ou toque esquerda/direita na estrada) para trocar de faixa. Desvie dos blocos — a velocidade sobe sem parar e às vezes só resta uma faixa livre.',
          seoNote: 'Lane Switch é um jogo de reflexos gratuito e muito difícil com 3 faixas: blocos deslizam em sua direção e você precisa alternar entre a faixa esquerda, central e direita para sobreviver. Sempre há exatamente uma faixa segura, mas com a velocidade sempre em alta, identificá-la e reagir a tempo se torna um dos desafios de desvio mais difíceis do navegador.',
          tapToStart: 'Toque ou pressione ←/→ para começar', gameOver: 'Tão perto! Toque para tentar de novo', bestMLabel: 'MELHOR {n}m'
        },
        tiltbalance: {
          hint: 'Mova o mouse / arraste o dedo para a esquerda-direita (ou use as setas) para inclinar a plataforma e rolar a bola. Não deixe cair pelas pontas nem por um buraco. A plataforma encolhe e buracos aparecem conforme você sobrevive mais tempo.',
          seoNote: 'Tilt Balance é um jogo físico de equilíbrio gratuito e muito difícil: incline uma plataforma estreita movendo o mouse para manter uma bola neon rolando sobre ela. A plataforma encolhe aos poucos pelas duas pontas e buracos aleatórios aparecem com o tempo, exigindo ajustes constantes e precisos. A pontuação é o número de segundos que você mantém a bola viva — um dos jogos de equilíbrio mais difíceis do navegador.',
          tapToStart: 'Toque / clique para começar', gameOver: 'Fim de jogo — toque para tentar de novo', bestSecLabel: 'MELHOR {n}s'
        },
        flashgrid: {
          hint: 'Toque na célula AZUL brilhante antes que ela apague. Nunca toque na célula armadilha VERMELHA — isso encerra o jogo instantaneamente. Perder uma célula azul custa uma vida; você tem 3.',
          seoNote: 'Flash Grid é um jogo gratuito de reflexos em grade: uma célula aleatória acende em azul e você deve tocá-la antes que apague, enquanto células armadilha vermelhas ocasionais nunca devem ser tocadas. A janela de tempo encolhe e as armadilhas aparecem com mais frequência conforme sua pontuação sobe, tornando o reconhecimento instantâneo de cor e o autocontrole a chave para uma pontuação alta neste teste de reflexos brutalmente difícil.',
          bestLabel: 'MELHOR {n}', scoreLabel: 'Pontos: {n}', tapToStartTitle: 'Toque para começar', tapToStartBody: 'Toque na célula azul antes que ela apague. Nunca toque na vermelha.',
          gameOverTitle: 'Fim de jogo', finalScoreLabel: 'Pontos: {n}', tapToRestart: 'Toque para jogar de novo'
        },
        grappleswing: {
          hint: 'Segure para se prender ao próximo ponto de ancoragem e balançar como um pêndulo. Solte no topo do arco para voar para frente — acerte o tempo ou caia.',
          seoNote: 'Grapple Swing é um jogo físico gratuito e muito difícil: segure para se prender a pontos de ancoragem à frente, ganhe impulso balançando como um pêndulo, e solte no instante exato para voar para frente e agarrar o próximo gancho. Os pontos de ancoragem ficam cada vez mais difíceis de alcançar. Errar o momento e a gravidade vai te derrubar. Uma única regra de botão, mas com precisão implacável.',
          tapToStart: 'Segure para começar a balançar', gameOver: 'Caiu! Toque para tentar de novo', bestLabel: 'MELHOR {n}'
        },
        eyetrick: {
          hint: 'Uma palavra de cor aparece pintada com uma cor de tinta diferente. Toque no botão que corresponde à COR DA TINTA, não ao que a palavra diz — a janela de tempo encolhe conforme sua pontuação sobe. Um toque errado ou tempo esgotado custa uma vida. 3 vidas no total.',
          seoNote: 'Eye Trick é um jogo de reflexos gratuito baseado no efeito Stroop, um famoso fenômeno da ciência cognitiva em que ler uma palavra de cor interfere em nomear a cor da tinta em que está impressa. Toque apenas na cor real da tinta enquanto o relógio encolhe a cada acerto, e testes ocasionais coincidentes verificam se você está realmente observando ou apenas lendo no piloto automático.',
          tapToStart: 'Toque para começar — toque na COR DA TINTA, não na palavra!', gameOver: 'Fim de jogo — toque para tentar de novo', bestLabel: 'MELHOR {n}'
        },
        focuslock: {
          hint: 'Observe o ponto amarelo, depois acompanhe-o enquanto todos os pontos se misturam. Quando pararem, toque no que você acompanhou. Um toque errado custa uma vida — você tem 3.',
          seoNote: 'Focus Lock é um jogo de atenção gratuito baseado em rastreamento de múltiplos objetos, um teste clássico da ciência cognitiva sobre atenção visual sustentada. Um ponto pisca brevemente e depois se mistura em um enxame idêntico que flutua e colide por vários segundos. Perder de vista o alvo por um instante encerra a sequência, tornando este um dos jogos de foco mais difíceis que você encontrará em um navegador — sem download.',
          tapToStart: 'Toque para começar', roundLabel: 'Rodada {n}', revealMsg: 'Observe o ponto amarelo!', trackMsg: 'Acompanhe-o!', chooseMsg: 'Toque no ponto que você acompanhou',
          gameOver: 'Fim de jogo', finalLine: 'Você chegou à rodada {n} — Toque para jogar de novo', bestLabel: 'MELHOR {n}'
        },
        trajectory: {
          hint: 'Arraste para trás a partir do ponto de lançamento como um estilingue, depois solte para disparar. Quanto mais arrastar, mais força. Acerte o anel neon para pontuar — 3 erros e acabou.',
          seoNote: 'Trajectory é um jogo gratuito de mira estilo artilharia baseado em física parabólica real: arraste para trás para definir ângulo e força, depois solte para lançar um projétil brilhante em direção a um anel distante. Distância, tamanho do alvo, vento e deriva vertical aumentam com sua pontuação, tornando manter a precisão um dos desafios de mira mais difíceis que você encontrará em um navegador.',
          scoreLabel: 'Pontos: {n}', distanceLabel: 'DIST {n}m', windLabel: 'VENTO {dir} {n}', tapToStart: 'Arraste para trás a partir da âncora para mirar — solte para disparar',
          gameOver: 'Fim de jogo — toque para tentar de novo', bestLabel: 'MELHOR {n}'
        }
      }
    }

  };

  const lang = detectLang();

  function get(path, dict) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict);
  }

  function t(key, vars) {
    let str = get(key, DICT[lang]);
    if (str === undefined) str = get(key, DICT.en);
    if (str === undefined) return key;
    if (vars) for (const k in vars) str = str.split('{' + k + '}').join(vars[k]);
    return str;
  }

  function apply(root) {
    root = root || document;
    root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    root.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    root.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.getAttribute('data-i18n-placeholder')); });
    root.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.getAttribute('data-i18n-title')); });
  }

  document.documentElement.lang = lang;
  window.I18N = { lang, t, apply, SUPPORTED };
  document.addEventListener('DOMContentLoaded', () => apply());
})();
