document.addEventListener('DOMContentLoaded', function() {
  // Away teamとHome teamのプレイヤーリストの取得
  const awayPlayerList = document.getElementById('away-player-list');
  const homePlayerList = document.getElementById('home-player-list');

  // プレイヤーが選択（チェックボックスが変更）されたときの処理を追加
  awayPlayerList.addEventListener('change', function(event) {
    handlePlayerCheckboxChange(event, 'away');
  });

  homePlayerList.addEventListener('change', function(event) {
    handlePlayerCheckboxChange(event, 'home');
  });

  // プレイヤーの選択状態を処理する関数
  function handlePlayerCheckboxChange(event, team) {
    const target = event.target;
    if (target.type === 'checkbox') {
      const playerName = target.parentElement.querySelector('span').textContent;
      const playerId = target.id;
      const selectionArea = document.querySelector(`.${team}-players`);

      if (target.checked) {
        // チェックされたら、新しい選択要素を作成して追加
        const selectedPlayer = document.createElement('div');
        selectedPlayer.id = playerId;
        selectedPlayer.name = `${team}-player`;

        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = `${team}-player`;
        radioInput.id = playerId;
        selectedPlayer.appendChild(radioInput);

        const label = document.createElement('label');
        label.htmlFor = playerId;
        label.textContent = `${playerName}`;
        selectedPlayer.appendChild(label);

        selectionArea.appendChild(selectedPlayer);
      } else {
        // チェックが外れたら、main-contentの対応する${team}-playersから要素を削除
        const existingPlayer = selectionArea.querySelector(`div[id="${playerId}"]`);
        if (existingPlayer) {
          existingPlayer.remove();
        }
      }
    }
  }
});

