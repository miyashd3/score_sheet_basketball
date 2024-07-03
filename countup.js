document.addEventListener('DOMContentLoaded', function() {
  const awayScoreLog = document.querySelector('.away-score-log');
  const homeScoreLog = document.querySelector('.home-score-log');

  document.querySelectorAll('.away-players button, .home-players button').forEach(button => {
    button.addEventListener('click', function() {
      const team = this.id.includes('away') ? 'away' : 'home';
      const points = parseInt(this.id.split('-')[2], 10);
      updateScore(team, points);
    });
  });

  function updateScore(team, points) {
    const selectedPlayerRadio = document.querySelector(`input[name="${team}-player"]:checked`);
    if (!selectedPlayerRadio) {
      alert('Please select a player from the ' + team + ' team.');
      return;
    }
    const playerId = selectedPlayerRadio.id;
    const playerScoreSpan = document.getElementById(`${playerId}-score`);
    let currentScore = parseInt(playerScoreSpan.textContent);
    currentScore += points;
    playerScoreSpan.textContent = currentScore;

    const logEntry = document.createElement('div');
    logEntry.textContent = `Player ${playerId.split('-')[2]}: +${points} points, Total: ${currentScore}`;
    if (team === 'away') {
      awayScoreLog.appendChild(logEntry);
    } else {
      homeScoreLog.appendChild(logEntry);
    }
  }
});