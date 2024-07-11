document.addEventListener('DOMContentLoaded', function() {
  const playerLists = document.querySelectorAll('.player-list');

  playerLists.forEach(playerList => {
    playerList.addEventListener('click', function(event) {
      if (event.target.classList.contains('delete-btn')) {
        const playerId = event.target.previousElementSibling.id; // "score" の span の ID
        const playerNumber = playerId.split('-')[2]; // "away-player-1-score" の "1" を取得
        const team = playerId.split('-')[0]; // "away-player-1-score" の "away" を取得

        // プレイヤーリストから削除
        const playerLi = event.target.closest('li');
        if (playerLi) {
          playerLi.remove();
        }

        // 選択エリアの対応するdivも削除
        const playerDivId = `${team}-player-${playerNumber}-div`;
        const playerDiv = document.getElementById(playerDivId);
        if (playerDiv) {
          playerDiv.remove();
        }
      }
    });
  });
});
