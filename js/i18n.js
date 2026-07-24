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
        start: 'START', goal: 'GOAL', playsLine: '▶ <b>{n}</b> plays',
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
          breaker: 'Bounce the ball and clear every brick. Boards refill faster each time — miss once and it\'s over.'
        }
      },
      profile: {
        title: '👤 My Profile', sub: 'Your username, games played, best scores and ranks.',
        signInNote: 'Sign in with Google to save scores, compete on leaderboards and edit your profile.',
        usernameLabel: 'Username', usernamePlaceholder: 'your_name', save: 'Save',
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
          hint: 'Tap / click / press Space to fly. Pass a gap to score 1 point.',
          seoNote: 'Flappy Neon is a hard flappy-style tap game you can play free online, right in your browser. The rule is simple — tap to fly through the gap — but scoring past 10 makes this one of the hardest flappy-style games around.',
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
          seoNote: 'Neon Memory is a free hard memory game online: watch a color sequence, then repeat it back. Every round adds one more step, so a single slip ends the run — a tough test for anyone who thinks their memory game skills are solid.',
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
        start: 'BẮT ĐẦU', goal: 'ĐÍCH', playsLine: '▶ <b>{n}</b> lượt chơi',
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
          breaker: 'Nảy bóng phá hết từng viên gạch. Bảng gạch được làm đầy lại nhanh hơn mỗi lần — trượt một lần là hết.'
        }
      },
      profile: {
        title: '👤 Hồ sơ của tôi', sub: 'Tên người dùng, số lần chơi, điểm cao nhất và thứ hạng của bạn.',
        signInNote: 'Đăng nhập bằng Google để lưu điểm, thi đấu trên bảng xếp hạng và chỉnh sửa hồ sơ.',
        usernameLabel: 'Tên người dùng', usernamePlaceholder: 'ten_cua_ban', save: 'Lưu',
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
          hint: 'Chạm / bấm / phím Space để bay. Qua một khe hở được 1 điểm.',
          seoNote: 'Flappy Neon là trò chơi kiểu flappy khó, chơi miễn phí ngay trên trình duyệt. Luật rất đơn giản — chạm để bay qua khe hở — nhưng vượt qua điểm 10 khiến đây trở thành một trong những trò flappy khó nhất.',
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
          seoNote: 'Neon Memory là trò chơi trí nhớ khó, miễn phí: xem chuỗi màu rồi lặp lại. Mỗi vòng thêm một bước, chỉ cần sai một lần là kết thúc — thử thách khó cho bất kỳ ai tự tin về trí nhớ của mình.',
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
        start: '起点', goal: '终点', playsLine: '▶ <b>{n}</b> 次游玩',
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
          breaker: '弹球打碎所有砖块。每次清空后砖块会更快地重新填满——失误一次就结束。'
        }
      },
      profile: {
        title: '👤 我的资料', sub: '你的用户名、游玩次数、最佳成绩和排名。',
        signInNote: '使用 Google 登录即可保存成绩、参与排行榜竞争并编辑个人资料。',
        usernameLabel: '用户名', usernamePlaceholder: '你的名字', save: '保存',
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
          hint: '轻点 / 点击 / 按空格键起飞。飞过一个缝隙得1分。',
          seoNote: 'Flappy Neon 是一款高难度的 flappy 风格游戏，可在浏览器中免费在线畅玩。规则很简单——轻点即可飞过缝隙——但要突破10分，这就成了最难的 flappy 类游戏之一。',
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
          seoNote: 'Neon Memory 是一款免费的高难度记忆游戏：观察颜色序列，然后重复出来。每轮都会多一步，只要失误一次就会结束——对任何自信记忆力不错的人来说都是严峻考验。',
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
        start: 'INICIO', goal: 'META', playsLine: '▶ <b>{n}</b> partidas',
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
          breaker: 'Rebota la bola y destruye cada ladrillo. Los tableros se rellenan más rápido cada vez — un fallo y se acabó.'
        }
      },
      profile: {
        title: '👤 Mi perfil', sub: 'Tu nombre de usuario, partidas jugadas, mejores puntuaciones y rangos.',
        signInNote: 'Inicia sesión con Google para guardar puntuaciones, competir en las clasificaciones y editar tu perfil.',
        usernameLabel: 'Nombre de usuario', usernamePlaceholder: 'tu_nombre', save: 'Guardar',
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
          hint: 'Toca / haz clic / pulsa Espacio para volar. Pasa un hueco para sumar 1 punto.',
          seoNote: 'Flappy Neon es un juego difícil estilo flappy que puedes jugar gratis en línea, directamente en tu navegador. La regla es simple — toca para volar por el hueco — pero superar los 10 puntos lo convierte en uno de los juegos flappy más difíciles.',
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
          seoNote: 'Neon Memory es un juego de memoria gratuito y difícil en línea: observa una secuencia de colores y luego repítela. Cada ronda añade un paso más, así que un solo error termina la partida — una prueba dura para quien crea que su memoria es sólida.',
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
        start: 'INÍCIO', goal: 'META', playsLine: '▶ <b>{n}</b> jogadas',
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
          breaker: 'Rebata a bola e destrua todos os tijolos. Os quadros se enchem mais rápido a cada vez — uma falha e acabou.'
        }
      },
      profile: {
        title: '👤 Meu perfil', sub: 'Seu nome de usuário, jogos jogados, melhores pontuações e posições.',
        signInNote: 'Entre com o Google para salvar pontuações, competir na classificação e editar seu perfil.',
        usernameLabel: 'Nome de usuário', usernamePlaceholder: 'seu_nome', save: 'Salvar',
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
          hint: 'Toque / clique / pressione Espaço para voar. Passe por um vão para marcar 1 ponto.',
          seoNote: 'Flappy Neon é um jogo difícil estilo flappy que você pode jogar de graça on-line, direto no navegador. A regra é simples — toque para voar pelo vão — mas ultrapassar 10 pontos faz dele um dos jogos flappy mais difíceis que existem.',
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
          seoNote: 'Neon Memory é um jogo de memória gratuito e difícil on-line: observe uma sequência de cores e depois repita. Cada rodada acrescenta mais um passo, então um único erro encerra a partida — um teste difícil para quem confia na própria memória.',
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
