document.addEventListener('DOMContentLoaded', function() {
  const playerStats = {};

  document.querySelectorAll('.score-btn, .fail-shot').forEach(button => {
      button.addEventListener('click', function() {
          const team = this.dataset.team;
          const type = this.dataset.type;
          const isSuccess = this.classList.contains('score-btn');

          const selectedPlayerRadio = document.querySelector(`input[name="${team}-player-radio"]:checked`);
          if (!selectedPlayerRadio) {
              alert("Please select a player.");
              return;
          }
          const playerNumber = selectedPlayerRadio.value; // IDから直接プレイヤー番号を取得

          updatePlayerStats(team, playerNumber, type, isSuccess);
      });
  });

  function updatePlayerStats(team, playerNumber, type, isSuccess) {
      const playerKey = `${team}-player-${playerNumber}`;
      if (!playerStats[playerKey]) {
          playerStats[playerKey] = { ft: { success: 0, total: 0 }, fg: { success: 0, total: 0 }, three: { success: 0, total: 0 } };
      }

      playerStats[playerKey][type].total++;
      if (isSuccess) {
          playerStats[playerKey][type].success++;
      }

      updateDisplay(team, playerNumber, type);
  }

  function updateDisplay(team, playerNumber, type) {
      const successSpan = document.getElementById(`${team}-player-${playerNumber}-${type}Late-success`);
      const totalSpan = document.getElementById(`${team}-player-${playerNumber}-${type}Late-total`);

      if (!successSpan || !totalSpan) {
          console.error('Element not found!');
          return;
      }

      successSpan.textContent = `Success: ${playerStats[`${team}-player-${playerNumber}`][type].success}`;
      totalSpan.textContent = `Total: ${playerStats[`${team}-player-${playerNumber}`][type].total}`;
  }
});

