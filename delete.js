document.addEventListener('DOMContentLoaded', function() {
  const playerLists = document.querySelectorAll('ul[id$="-player-list"]'); // IDが "-player-list" で終わるすべてのul要素を取得

  playerLists.forEach(playerList => {
    playerList.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-btn')) {
        const playerId = event.target.id;
        const playerLi = document.getElementById(playerId);
        if (playerLi) {
          playerLi.remove(); // プレイヤーリストから削除
        }

        // スコアボードからも削除
        const scoreEntries = document.querySelectorAll(`.score-log div[id="${playerId}"]`);
        scoreEntries.forEach(entry => {
          entry.remove();
        });

        // main-contentのラジオボタンとラベルを削除
        const selectedPlayer = document.querySelector(`div[id="${playerId}"]`);
        const radioInput = document.querySelector(`input[id="${playerId}"]`);
        const label = document.querySelector(`label[for="${playerId}"]`);
        if (selectedPlayer) {
          selectedPlayer.remove();
        }
        if (radioInput) {
          radioInput.remove();
        }
        if (label) {
          label.remove();
        }
      }
    });
  });
});