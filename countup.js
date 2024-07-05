document.addEventListener('DOMContentLoaded', function() {
  let awayTotal = 0;
  let homeTotal = 0;

  document.querySelectorAll('.away-score-countup button, .home-score-countup button').forEach(button => {
      button.addEventListener('click', function() {
          const team = this.parentElement.classList.contains('away-score-countup') ? 'away' : 'home';
          const points = parseInt(this.id.split('-')[2], 10);
          const selectedPlayerRadio = document.querySelector(`input[type="radio"][name="${team}-player"]:checked`);

          if (!selectedPlayerRadio) {
              alert(`Please select a player from the ${team} team.`);
              return;
          }

          function updateTotal(team, points) {
              if (team === 'away') {
                  awayTotal += points;
                  document.getElementById('away-total').textContent = awayTotal;
              } else if (team === 'home') {
                  homeTotal += points;
                  document.getElementById('home-total').textContent = homeTotal;
              }
          }

          updateTotal(team, points);

          const playerScoreSpan = document.getElementById(`${selectedPlayerRadio.id}-score`);
          if (playerScoreSpan) {
              let currentScore = parseInt(playerScoreSpan.textContent);
              currentScore += points;
              playerScoreSpan.textContent = currentScore;

              const logEntry = document.createElement('div');
              const playerName = document.querySelector(`label[for="${selectedPlayerRadio.id}"]`).textContent;
              logEntry.textContent = `${playerName}: +${points} points, Total: ${currentScore}`;
              document.querySelector(`.${team}-score-log`).appendChild(logEntry);
          } else {
              console.error('Score span not found for selected player.');
          }
      });
  });
});
