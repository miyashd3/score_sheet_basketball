document.addEventListener('DOMContentLoaded', function() {
  const scoreButtons = document.querySelectorAll('.score-btn');

  scoreButtons.forEach(button => {
      button.addEventListener('click', function() {
          const team = this.dataset.team; // 'away' または 'home'
          const points = parseInt(this.dataset.points, 10); // ボタンに設定されたポイントを取得
          updateScore(team, points);
      });
  });

  function updateScore(team, points) {
      const selectedPlayerRadio = document.querySelector(`input[name="${team}-player-radio"]:checked`);
      if (!selectedPlayerRadio) {
          alert(`Please select a player from the ${team} team.`);
          return;
      }

      // 選択されたプレイヤーのスコア要素とプレイヤー名を取得
      const playerScoreSpan = document.getElementById(`${selectedPlayerRadio.id.replace('-radio', '-score')}`);
      const playerName = selectedPlayerRadio.parentElement.textContent;
      let currentScore = parseInt(playerScoreSpan.textContent);
      currentScore += points;
      playerScoreSpan.textContent = currentScore;

      // チームの合計スコアを更新
      const teamTotalElement = document.getElementById(`${team}-total`);
      let teamTotal = parseInt(teamTotalElement.textContent);
      teamTotal += points;
      teamTotalElement.textContent = teamTotal;

      // スコアログにエントリを追加
      const logEntry = document.createElement('div');
      logEntry.textContent = `${playerName}: +${points} points, Total: ${teamTotal}`;
      document.getElementById(`${team}-score-log`).appendChild(logEntry);
  }
});

