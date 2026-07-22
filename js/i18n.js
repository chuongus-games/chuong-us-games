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

  const DICT = {

    en: {
      common: {
        back: '◂ Games', backAll: '◂ Back to all games', play: 'PLAY ▸', moreHardGames: 'More hard games:',
        leaderboard: '🏆 Leaderboard', top10: '🏆 Top 10 — {game}', loading: 'Loading…',
        noScoresYet: 'No scores yet — be the first! 🔥', scoreSavedAuto: 'Your best score is saved automatically.',
        signInToBoard: 'Sign in with Google to get on the board!', signInToPlayTitle: 'Sign in to play',
        signInToPlayBody: 'Sign in with Google to play {game}, save your best scores and climb the leaderboard.',
        signInGoogleFallback: 'Sign in with Google', player: 'player', signOutTitle: 'Sign out', close: 'Close',
        start: 'START', goal: 'GOAL', playsLine: '▶ <b>{n}</b> plays'
      },
      index: {
        tagline: 'Easy to play · Hard to win', heroLine1: 'Simple to play.', heroLine2: 'Extremely hard to win.',
        heroP: 'New games added all the time — no install needed. Click and play. Think you can beat them all? 🔥',
        cta: 'PLAY NOW',
        introP: 'Chuong US Games is a free collection of hard games you can play online with no download and no signup. Each one takes ten seconds to learn — flappy bird, bullet dodging, aim training, reaction speed, memory, maze and more — but very few players manage to beat their own best score. If you\'re looking for a genuinely difficult game to test your reflexes and patience, start below.',
        searchPlaceholder: '🔍 Search games… (e.g. flappy, aim, maze)', faqTitle: 'Frequently asked questions',
        faq1Q: 'What makes these games hard?',
        faq1A: 'Every game here has simple, one-line rules but tight timing, precision or reflex requirements. Most players won\'t beat their own best score on the first few tries.',
        faq2Q: 'Are the hard games free to play?',
        faq2A: 'Yes — all games are free, with no download and no signup required. A free account only unlocks the leaderboard.',
        faq3Q: 'Do I need to download anything to play?',
        faq3A: 'No. Every game runs directly in your browser on desktop or mobile.',
        footer: '© 2026 chuong.us — Simple games, extreme challenge. Made with 🔥 in Da Lat.',
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
          runner: 'Jump over spikes at ever-increasing speed. How far can you run?'
        }
      },
      profile: {
        title: '👤 My Profile', sub: 'Your username, games played, best scores and ranks.',
        signInNote: 'Sign in with Google to save scores, compete on leaderboards and edit your profile.',
        usernameLabel: 'Username', usernamePlaceholder: 'your_name', save: 'Save',
        usernameInvalid: '⚠️ 3–20 chars, letters/numbers/_ only.', usernameTaken: '⚠️ That username is taken.',
        saved: '✅ Saved!', gamesPlayed: '🎮 Games played', noScores: 'No scores yet. ',
        goPlay: 'Go play something challenging 🔥', tableGame: 'Game', tableBest: 'Best', tablePlays: 'Plays', tableRank: 'Rank'
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
          hint: 'Tap / click / press Space to fly. Pass a gap to score 1 point.',
          seoNote: 'Flappy Neon is a hard flappy bird game you can play free online, right in your browser. The rule is simple — tap to fly through the gap — but scoring past 10 makes this one of the hardest flappy-style games around.',
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
          hint: 'The sequence grows every round and plays FASTER each time. One wrong note ends the round.',
          seoNote: 'Simon Memory is a free hard memory game online: watch a color sequence, then repeat it back. Every round adds one more step, so a single slip ends the run — a tough test for anyone who thinks their memory game skills are solid.',
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
          hint: 'Enter the START box, then trace the dark corridor to GOAL. Touch the bright area = back to start. Mobile: drag your finger.',
          seoNote: 'Wire Maze is a free steady-hand maze game online: trace your cursor through a narrow corridor to the goal, and touching a wall sends you straight back to start. Simple to understand, genuinely hard to finish.',
          moveIntoStart: 'Move your cursor into START', headToGoal: 'Head to GOAL — don\'t touch the bright walls!',
          wallTouched: 'Wall touched — back to START!', cleared: '🏆 CLEARED! Enter START to go again.',
          outOfBounds: 'Out of bounds — back to START!', statusLine: '{msg}   (Wins {wins} · Retries {deaths})',
          winsLabel: 'WINS {n}'
        },
        runner: {
          hint: 'Tap / Space to jump over the spikes. Speed increases forever — score is distance.',
          seoNote: 'Spike Runner is a free hard endless runner game online. Jump the spikes, survive the speed increases, and see how far you can get — a simple format that turns into one of the hardest runner games once the pace picks up.',
          tapToStart: 'Tap to run', gameOver: 'Great run! Tap to go again', bestMLabel: 'BEST {n}m'
        }
      }
    },

    vi: {
      common: {
        back: '◂ Trò chơi', backAll: '◂ Về tất cả trò chơi', play: 'CHƠI ▸', moreHardGames: 'Trò chơi khó khác:',
        leaderboard: '🏆 Bảng xếp hạng', top10: '🏆 Top 10 — {game}', loading: 'Đang tải…',
        noScoresYet: 'Chưa có điểm nào — hãy là người đầu tiên! 🔥', scoreSavedAuto: 'Điểm cao nhất của bạn được tự động lưu.',
        signInToBoard: 'Đăng nhập bằng Google để lên bảng xếp hạng!', signInToPlayTitle: 'Đăng nhập để chơi',
        signInToPlayBody: 'Đăng nhập bằng Google để chơi {game}, lưu điểm cao nhất và leo lên bảng xếp hạng.',
        signInGoogleFallback: 'Đăng nhập bằng Google', player: 'người chơi', signOutTitle: 'Đăng xuất', close: 'Đóng',
        start: 'BẮT ĐẦU', goal: 'ĐÍCH', playsLine: '▶ <b>{n}</b> lượt chơi'
      },
      index: {
        tagline: 'Dễ chơi · Khó thắng', heroLine1: 'Chơi thì dễ.', heroLine2: 'Thắng thì cực khó.',
        heroP: 'Trò chơi mới được thêm liên tục — không cần cài đặt. Bấm và chơi ngay. Bạn nghĩ mình có thể vượt qua tất cả? 🔥',
        cta: 'CHƠI NGAY',
        introP: 'Chuong US Games là bộ sưu tập trò chơi khó miễn phí, chơi trực tuyến, không cần tải về hay đăng ký. Mỗi trò chỉ mất mười giây để học — flappy bird, né đạn, luyện ngắm, tốc độ phản xạ, trí nhớ, mê cung và nhiều hơn nữa — nhưng rất ít người chơi vượt qua được điểm cao nhất của chính mình. Nếu bạn đang tìm một trò chơi thực sự thử thách phản xạ và sự kiên nhẫn, hãy bắt đầu bên dưới.',
        searchPlaceholder: '🔍 Tìm trò chơi… (vd: flappy, aim, maze)', faqTitle: 'Câu hỏi thường gặp',
        faq1Q: 'Điều gì khiến các trò chơi này khó?',
        faq1A: 'Mỗi trò chơi ở đây có luật chơi đơn giản chỉ một dòng, nhưng đòi hỏi thời gian, độ chính xác hoặc phản xạ cực kỳ chặt chẽ. Hầu hết người chơi không thể vượt qua điểm cao nhất của chính mình ngay từ những lần thử đầu tiên.',
        faq2Q: 'Các trò chơi khó này có miễn phí không?',
        faq2A: 'Có — tất cả trò chơi đều miễn phí, không cần tải về hay đăng ký. Tài khoản miễn phí chỉ mở khóa bảng xếp hạng.',
        faq3Q: 'Tôi có cần tải gì để chơi không?',
        faq3A: 'Không. Mọi trò chơi chạy trực tiếp trên trình duyệt của bạn, cả máy tính lẫn di động.',
        footer: '© 2026 chuong.us — Trò chơi đơn giản, thử thách cực độ. Làm với 🔥 tại Đà Lạt.',
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
          runner: 'Nhảy qua chông với tốc độ tăng dần. Bạn chạy được bao xa?'
        }
      },
      profile: {
        title: '👤 Hồ sơ của tôi', sub: 'Tên người dùng, số lần chơi, điểm cao nhất và thứ hạng của bạn.',
        signInNote: 'Đăng nhập bằng Google để lưu điểm, thi đấu trên bảng xếp hạng và chỉnh sửa hồ sơ.',
        usernameLabel: 'Tên người dùng', usernamePlaceholder: 'ten_cua_ban', save: 'Lưu',
        usernameInvalid: '⚠️ 3–20 ký tự, chỉ chữ/số/dấu gạch dưới.', usernameTaken: '⚠️ Tên này đã có người dùng.',
        saved: '✅ Đã lưu!', gamesPlayed: '🎮 Trò chơi đã chơi', noScores: 'Chưa có điểm nào. ',
        goPlay: 'Đi chơi thử thách ngay 🔥', tableGame: 'Trò chơi', tableBest: 'Điểm cao nhất', tablePlays: 'Số lần chơi', tableRank: 'Hạng'
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
          hint: 'Chạm / bấm / phím Space để bay. Qua một khe hở được 1 điểm.',
          seoNote: 'Flappy Neon là trò chơi flappy bird khó, chơi miễn phí ngay trên trình duyệt. Luật rất đơn giản — chạm để bay qua khe hở — nhưng vượt qua điểm 10 khiến đây trở thành một trong những trò flappy khó nhất.',
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
          hint: 'Chuỗi màu dài thêm mỗi vòng và chạy NHANH hơn mỗi lần. Bấm sai một nốt là kết thúc vòng chơi.',
          seoNote: 'Simon Memory là trò chơi trí nhớ khó, miễn phí: xem chuỗi màu rồi lặp lại. Mỗi vòng thêm một bước, chỉ cần sai một lần là kết thúc — thử thách khó cho bất kỳ ai tự tin về trí nhớ của mình.',
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
          hint: 'Vào ô BẮT ĐẦU, rồi rê chuột theo hành lang tối tới ĐÍCH. Chạm vùng sáng = quay lại từ đầu. Di động: kéo bằng ngón tay.',
          seoNote: 'Wire Maze là trò mê cung đòi hỏi tay vững, miễn phí: rê chuột qua hành lang hẹp để tới đích, chạm tường sẽ đưa bạn quay lại từ đầu ngay lập tức. Dễ hiểu nhưng thực sự khó để hoàn thành.',
          moveIntoStart: 'Đưa chuột vào ô BẮT ĐẦU', headToGoal: 'Tiến tới ĐÍCH — đừng chạm vùng sáng!',
          wallTouched: 'Chạm tường rồi — quay lại BẮT ĐẦU!', cleared: '🏆 HOÀN THÀNH! Vào lại BẮT ĐẦU để chơi tiếp.',
          outOfBounds: 'Ra ngoài vùng chơi — quay lại BẮT ĐẦU!', statusLine: '{msg}   (Thắng {wins} · Thử lại {deaths})',
          winsLabel: 'THẮNG {n}'
        },
        runner: {
          hint: 'Chạm / Space để nhảy qua chông. Tốc độ tăng liên tục — điểm là quãng đường.',
          seoNote: 'Spike Runner là trò endless runner khó, miễn phí. Nhảy qua chông, sống sót qua từng đợt tăng tốc, xem bạn chạy được bao xa — một luật chơi đơn giản nhưng trở nên cực khó khi tốc độ tăng lên.',
          tapToStart: 'Chạm để chạy', gameOver: 'Chạy tốt lắm! Chạm để chơi lại', bestMLabel: 'CAO NHẤT {n}m'
        }
      }
    },

    zh: {
      common: {
        back: '◂ 游戏列表', backAll: '◂ 返回所有游戏', play: '开始 ▸', moreHardGames: '更多高难度游戏：',
        leaderboard: '🏆 排行榜', top10: '🏆 前10名 — {game}', loading: '加载中…',
        noScoresYet: '暂无成绩 — 抢先上榜！🔥', scoreSavedAuto: '你的最佳成绩会自动保存。',
        signInToBoard: '使用 Google 登录即可上榜！', signInToPlayTitle: '登录后开始游戏',
        signInToPlayBody: '使用 Google 登录来玩{game}，保存最佳成绩并冲击排行榜。',
        signInGoogleFallback: '使用 Google 登录', player: '玩家', signOutTitle: '退出登录', close: '关闭',
        start: '起点', goal: '终点', playsLine: '▶ <b>{n}</b> 次游玩'
      },
      index: {
        tagline: '易上手 · 难通关', heroLine1: '上手很简单。', heroLine2: '通关极其困难。',
        heroP: '不断新增游戏 — 无需安装，点击即玩。你觉得能全部通关吗？🔥',
        cta: '立即开始',
        introP: 'Chuong US Games 是一个免费的高难度小游戏合集，在线即可畅玩，无需下载也无需注册。每款游戏只需十秒就能学会——flappy bird、躲避子弹、瞄准训练、反应速度、记忆挑战、迷宫等等——但很少有玩家能超越自己的最佳成绩。如果你想找一款真正考验反应力和耐心的游戏，就从下面开始吧。',
        searchPlaceholder: '🔍 搜索游戏…（如 flappy、aim、maze）', faqTitle: '常见问题',
        faq1Q: '这些游戏为什么这么难？',
        faq1A: '这里的每款游戏规则都很简单，但对时机、精准度或反应速度要求极高。大多数玩家在前几次尝试中都无法超越自己的最佳成绩。',
        faq2Q: '这些高难度游戏免费吗？',
        faq2A: '是的 — 所有游戏均免费，无需下载也无需注册。免费账号仅用于解锁排行榜功能。',
        faq3Q: '游玩需要下载什么吗？',
        faq3A: '不需要。所有游戏都直接在你的浏览器中运行，电脑和手机均可。',
        footer: '© 2026 chuong.us — 简单的游戏，极致的挑战。用 🔥 制作于大叻。',
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
          runner: '以不断加快的速度跳过尖刺。你能跑多远？'
        }
      },
      profile: {
        title: '👤 我的资料', sub: '你的用户名、游玩次数、最佳成绩和排名。',
        signInNote: '使用 Google 登录即可保存成绩、参与排行榜竞争并编辑个人资料。',
        usernameLabel: '用户名', usernamePlaceholder: '你的名字', save: '保存',
        usernameInvalid: '⚠️ 需3–20个字符，仅限字母/数字/下划线。', usernameTaken: '⚠️ 该用户名已被占用。',
        saved: '✅ 已保存！', gamesPlayed: '🎮 已玩游戏', noScores: '暂无成绩。 ',
        goPlay: '去挑战一下吧 🔥', tableGame: '游戏', tableBest: '最佳成绩', tablePlays: '游玩次数', tableRank: '排名'
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
          hint: '轻点 / 点击 / 按空格键起飞。飞过一个缝隙得1分。',
          seoNote: 'Flappy Neon 是一款高难度的 flappy bird 风格游戏，可在浏览器中免费在线畅玩。规则很简单——轻点即可飞过缝隙——但要突破10分，这就成了最难的 flappy 类游戏之一。',
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
          hint: '序列每轮都会变长，播放速度也会越来越快。按错一个就会结束本轮。',
          seoNote: 'Simon Memory 是一款免费的高难度记忆游戏：观察颜色序列，然后重复出来。每轮都会多一步，只要失误一次就会结束——对任何自信记忆力不错的人来说都是严峻考验。',
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
          hint: '进入起点方块，然后沿着深色通道拖到终点。碰到亮色区域 = 回到起点。手机端：用手指拖动。',
          seoNote: 'Wire Maze 是一款免费的稳手迷宫游戏：拖动光标穿过狭窄通道到达终点，碰到墙壁就会立刻回到起点。规则简单易懂，但要真正通关却很难。',
          moveIntoStart: '将光标移入起点区域', headToGoal: '前往终点 — 不要碰到亮色墙壁！',
          wallTouched: '碰到墙壁了 — 回到起点！', cleared: '🏆 通关！回到起点区域再来一次。',
          outOfBounds: '超出范围 — 回到起点！', statusLine: '{msg}   （过关 {wins} · 重试 {deaths}）',
          winsLabel: '过关 {n}'
        },
        runner: {
          hint: '轻点 / 空格键跳过尖刺。速度会持续加快 — 得分即为跑动距离。',
          seoNote: 'Spike Runner 是一款免费的高难度无尽奔跑游戏。跳过尖刺，挺过一次次加速，看看你能跑多远——规则简单，但一旦提速就成了最难的跑酷类游戏之一。',
          tapToStart: '轻点开始奔跑', gameOver: '跑得不错！轻点再来一次', bestMLabel: '最佳 {n}米'
        }
      }
    },

    es: {
      common: {
        back: '◂ Juegos', backAll: '◂ Volver a todos los juegos', play: 'JUGAR ▸', moreHardGames: 'Más juegos difíciles:',
        leaderboard: '🏆 Clasificación', top10: '🏆 Top 10 — {game}', loading: 'Cargando…',
        noScoresYet: 'Aún no hay puntuaciones — ¡sé el primero! 🔥', scoreSavedAuto: 'Tu mejor puntuación se guarda automáticamente.',
        signInToBoard: '¡Inicia sesión con Google para aparecer en la clasificación!', signInToPlayTitle: 'Inicia sesión para jugar',
        signInToPlayBody: 'Inicia sesión con Google para jugar {game}, guardar tus mejores puntuaciones y subir en la clasificación.',
        signInGoogleFallback: 'Iniciar sesión con Google', player: 'jugador', signOutTitle: 'Cerrar sesión', close: 'Cerrar',
        start: 'INICIO', goal: 'META', playsLine: '▶ <b>{n}</b> partidas'
      },
      index: {
        tagline: 'Fácil de jugar · Difícil de ganar', heroLine1: 'Fácil de jugar.', heroLine2: 'Extremadamente difícil de ganar.',
        heroP: 'Se agregan juegos nuevos todo el tiempo — no necesitas instalar nada. Haz clic y juega. ¿Crees que puedes vencerlos todos? 🔥',
        cta: 'JUGAR AHORA',
        introP: 'Chuong US Games es una colección gratuita de juegos difíciles que puedes jugar en línea sin descargas ni registro. Cada uno se aprende en diez segundos — flappy bird, esquivar balas, entrenamiento de puntería, velocidad de reacción, memoria, laberintos y más — pero muy pocos jugadores logran superar su propio mejor puntaje. Si buscas un juego realmente difícil para poner a prueba tus reflejos y tu paciencia, empieza abajo.',
        searchPlaceholder: '🔍 Buscar juegos… (ej. flappy, aim, maze)', faqTitle: 'Preguntas frecuentes',
        faq1Q: '¿Qué hace que estos juegos sean difíciles?',
        faq1A: 'Cada juego aquí tiene reglas simples de una línea, pero exige mucha precisión, tiempos exactos o reflejos rápidos. La mayoría de los jugadores no logra superar su propio mejor puntaje en los primeros intentos.',
        faq2Q: '¿Los juegos difíciles son gratis?',
        faq2A: 'Sí — todos los juegos son gratuitos, sin descargas ni registro. Una cuenta gratuita solo desbloquea la clasificación.',
        faq3Q: '¿Necesito descargar algo para jugar?',
        faq3A: 'No. Todos los juegos funcionan directamente en tu navegador, en computadora o celular.',
        footer: '© 2026 chuong.us — Juegos simples, desafío extremo. Hecho con 🔥 en Da Lat.',
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
          runner: 'Salta sobre pinchos a una velocidad que aumenta sin parar. ¿Hasta dónde puedes llegar?'
        }
      },
      profile: {
        title: '👤 Mi perfil', sub: 'Tu nombre de usuario, partidas jugadas, mejores puntuaciones y rangos.',
        signInNote: 'Inicia sesión con Google para guardar puntuaciones, competir en las clasificaciones y editar tu perfil.',
        usernameLabel: 'Nombre de usuario', usernamePlaceholder: 'tu_nombre', save: 'Guardar',
        usernameInvalid: '⚠️ 3–20 caracteres, solo letras/números/_.', usernameTaken: '⚠️ Ese nombre de usuario ya está en uso.',
        saved: '✅ ¡Guardado!', gamesPlayed: '🎮 Partidas jugadas', noScores: 'Aún no hay puntuaciones. ',
        goPlay: 'Ve a jugar algo desafiante 🔥', tableGame: 'Juego', tableBest: 'Mejor', tablePlays: 'Partidas', tableRank: 'Rango'
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
          hint: 'Toca / haz clic / pulsa Espacio para volar. Pasa un hueco para sumar 1 punto.',
          seoNote: 'Flappy Neon es un juego difícil estilo flappy bird que puedes jugar gratis en línea, directamente en tu navegador. La regla es simple — toca para volar por el hueco — pero superar los 10 puntos lo convierte en uno de los juegos flappy más difíciles.',
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
          hint: 'La secuencia crece cada ronda y se reproduce MÁS RÁPIDO cada vez. Una nota equivocada termina la ronda.',
          seoNote: 'Simon Memory es un juego de memoria gratuito y difícil en línea: observa una secuencia de colores y luego repítela. Cada ronda añade un paso más, así que un solo error termina la partida — una prueba dura para quien crea que su memoria es sólida.',
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
          hint: 'Entra en el recuadro de INICIO, luego traza el corredor oscuro hasta la META. Tocar el área brillante = vuelves al inicio. Móvil: arrastra el dedo.',
          seoNote: 'Wire Maze es un juego gratuito en línea de pulso firme: guía tu cursor por un corredor estrecho hasta la meta, y tocar una pared te manda directo al inicio. Fácil de entender, genuinamente difícil de terminar.',
          moveIntoStart: 'Mueve el cursor dentro de INICIO', headToGoal: 'Dirígete a la META — ¡no toques las paredes brillantes!',
          wallTouched: '¡Tocaste la pared — de vuelta a INICIO!', cleared: '🏆 ¡SUPERADO! Entra en INICIO para jugar de nuevo.',
          outOfBounds: 'Fuera de límites — ¡de vuelta a INICIO!', statusLine: '{msg}   (Victorias {wins} · Reintentos {deaths})',
          winsLabel: 'VICTORIAS {n}'
        },
        runner: {
          hint: 'Toca / Espacio para saltar los pinchos. La velocidad aumenta sin parar — el puntaje es la distancia.',
          seoNote: 'Spike Runner es un juego de correr sin fin, gratuito y difícil, en línea. Salta los pinchos, sobrevive a los aumentos de velocidad y descubre hasta dónde puedes llegar — un formato simple que se vuelve uno de los juegos de correr más difíciles cuando el ritmo se acelera.',
          tapToStart: 'Toca para correr', gameOver: '¡Buena carrera! Toca para jugar de nuevo', bestMLabel: 'MEJOR {n}m'
        }
      }
    },

    pt: {
      common: {
        back: '◂ Jogos', backAll: '◂ Voltar para todos os jogos', play: 'JOGAR ▸', moreHardGames: 'Mais jogos difíceis:',
        leaderboard: '🏆 Classificação', top10: '🏆 Top 10 — {game}', loading: 'Carregando…',
        noScoresYet: 'Ainda não há pontuações — seja o primeiro! 🔥', scoreSavedAuto: 'Sua melhor pontuação é salva automaticamente.',
        signInToBoard: 'Entre com o Google para aparecer na classificação!', signInToPlayTitle: 'Entre para jogar',
        signInToPlayBody: 'Entre com o Google para jogar {game}, salvar suas melhores pontuações e subir na classificação.',
        signInGoogleFallback: 'Entrar com o Google', player: 'jogador', signOutTitle: 'Sair', close: 'Fechar',
        start: 'INÍCIO', goal: 'META', playsLine: '▶ <b>{n}</b> jogadas'
      },
      index: {
        tagline: 'Fácil de jogar · Difícil de vencer', heroLine1: 'Fácil de jogar.', heroLine2: 'Extremamente difícil de vencer.',
        heroP: 'Novos jogos adicionados o tempo todo — sem necessidade de instalação. Clique e jogue. Acha que consegue vencer todos? 🔥',
        cta: 'JOGAR AGORA',
        introP: 'Chuong US Games é uma coleção gratuita de jogos difíceis que você pode jogar on-line sem download nem cadastro. Cada um leva dez segundos para aprender — flappy bird, desviar de balas, treino de mira, velocidade de reação, memória, labirinto e muito mais — mas pouquíssimos jogadores conseguem superar sua própria melhor pontuação. Se você procura um jogo realmente difícil para testar seus reflexos e paciência, comece abaixo.',
        searchPlaceholder: '🔍 Buscar jogos… (ex.: flappy, aim, maze)', faqTitle: 'Perguntas frequentes',
        faq1Q: 'O que torna esses jogos difíceis?',
        faq1A: 'Cada jogo aqui tem regras simples de uma linha, mas exige tempo, precisão ou reflexos muito apertados. A maioria dos jogadores não consegue superar sua própria melhor pontuação nas primeiras tentativas.',
        faq2Q: 'Os jogos difíceis são gratuitos?',
        faq2A: 'Sim — todos os jogos são gratuitos, sem download nem cadastro. Uma conta gratuita apenas desbloqueia a classificação.',
        faq3Q: 'Preciso baixar algo para jogar?',
        faq3A: 'Não. Todos os jogos rodam direto no seu navegador, no computador ou no celular.',
        footer: '© 2026 chuong.us — Jogos simples, desafio extremo. Feito com 🔥 em Da Lat.',
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
          runner: 'Pule espinhos numa velocidade que só aumenta. Até onde você consegue correr?'
        }
      },
      profile: {
        title: '👤 Meu perfil', sub: 'Seu nome de usuário, jogos jogados, melhores pontuações e posições.',
        signInNote: 'Entre com o Google para salvar pontuações, competir na classificação e editar seu perfil.',
        usernameLabel: 'Nome de usuário', usernamePlaceholder: 'seu_nome', save: 'Salvar',
        usernameInvalid: '⚠️ 3–20 caracteres, apenas letras/números/_.', usernameTaken: '⚠️ Esse nome de usuário já está em uso.',
        saved: '✅ Salvo!', gamesPlayed: '🎮 Jogos jogados', noScores: 'Ainda não há pontuações. ',
        goPlay: 'Vá jogar algo desafiador 🔥', tableGame: 'Jogo', tableBest: 'Melhor', tablePlays: 'Jogadas', tableRank: 'Posição'
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
          hint: 'Toque / clique / pressione Espaço para voar. Passe por um vão para marcar 1 ponto.',
          seoNote: 'Flappy Neon é um jogo difícil estilo flappy bird que você pode jogar de graça on-line, direto no navegador. A regra é simples — toque para voar pelo vão — mas ultrapassar 10 pontos faz dele um dos jogos flappy mais difíceis que existem.',
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
          hint: 'A sequência cresce a cada rodada e fica MAIS RÁPIDA a cada vez. Uma nota errada encerra a rodada.',
          seoNote: 'Simon Memory é um jogo de memória gratuito e difícil on-line: observe uma sequência de cores e depois repita. Cada rodada acrescenta mais um passo, então um único erro encerra a partida — um teste difícil para quem confia na própria memória.',
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
          hint: 'Entre na caixa de INÍCIO e depois trace o corredor escuro até a META. Tocar a área clara = volta ao início. No celular: arraste o dedo.',
          seoNote: 'Wire Maze é um jogo gratuito de pulso firme on-line: trace o cursor por um corredor estreito até a meta, e tocar uma parede te manda direto de volta ao início. Simples de entender, genuinamente difícil de terminar.',
          moveIntoStart: 'Mova o cursor para dentro do INÍCIO', headToGoal: 'Siga para a META — não toque nas paredes claras!',
          wallTouched: 'Tocou a parede — de volta ao INÍCIO!', cleared: '🏆 CONCLUÍDO! Entre no INÍCIO para jogar de novo.',
          outOfBounds: 'Fora dos limites — de volta ao INÍCIO!', statusLine: '{msg}   (Vitórias {wins} · Tentativas {deaths})',
          winsLabel: 'VITÓRIAS {n}'
        },
        runner: {
          hint: 'Toque / Espaço para pular os espinhos. A velocidade aumenta sem parar — a pontuação é a distância.',
          seoNote: 'Spike Runner é um jogo de corrida infinita gratuito e difícil, on-line. Pule os espinhos, sobreviva aos aumentos de velocidade e veja até onde consegue chegar — um formato simples que vira um dos jogos de corrida mais difíceis quando o ritmo acelera.',
          tapToStart: 'Toque para correr', gameOver: 'Boa corrida! Toque para jogar de novo', bestMLabel: 'MELHOR {n}m'
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
