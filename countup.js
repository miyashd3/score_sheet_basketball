document.addEventListener('DOMContentLoaded', function() {
  const awayButtons = document.querySelectorAll('.away .countup');
  const awayScoreDisplay = document.querySelector('.away .away-count');
  const awayLog = document.querySelector('.away-score-log');
  const awayPlayers = document.getElementsByName('away-player');

  const homeButtons = document.querySelectorAll('.home .countup');
  const homeScoreDisplay = document.querySelector('.home .home-count');
  const homeLog = document.querySelector('.home-score-log');
  const homePlayers = document.getElementsByName('home-player');

  function updatePlayerScore(team, playerId, points) {
    const playerScoreDisplay = document.getElementById(`${team}-player-${playerId}-score`);
    let currentScore = parseInt(playerScoreDisplay.textContent);
    playerScoreDisplay.textContent = currentScore + points;
  }

  function updateScore(team, scoreDisplay, logDisplay, players, points) {
    const selectedPlayer = Array.from(players).find(player => player.checked);
    if (selectedPlayer) {
      let currentScore = parseInt(scoreDisplay.textContent);
      scoreDisplay.textContent = currentScore + points;
      updatePlayerScore(team, selectedPlayer.value, points);
      logDisplay.innerHTML += `<div>プレイヤー${selectedPlayer.value}: ${points}点追加, 合計 ${currentScore + points}点</div><hr>`;
    }
  }

  awayButtons.forEach(button => {
    button.addEventListener('click', function() {
      const points = parseInt(this.textContent);
      updateScore('away', awayScoreDisplay, awayLog, awayPlayers, points);
    });
  });

  homeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const points = parseInt(this.textContent);
      updateScore('home', homeScoreDisplay, homeLog, homePlayers, points);
    });
  });
});