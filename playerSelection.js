document.addEventListener('DOMContentLoaded', function() {
  const awayPlayerList = document.getElementById('away-player-list');
  const homePlayerList = document.getElementById('home-player-list');

  // プレイヤー選択を処理する関数
  function handlePlayerSelection(event, team) {
    const checkbox = event.target;
    const playerNumber = checkbox.id.split('-')[2]; // "away-player-1" の "1" を取得
    const playerName = checkbox.nextSibling.textContent;
    const playerDivId = `${team}-player-${playerNumber}-div`;

    // チェックされた場合
    if (checkbox.checked) {
      const playerDiv = document.createElement('div');
      playerDiv.id = playerDivId;
      playerDiv.className = 'player-div';

      const radio = document.createElement('input');
      radio.type = 'radio';
      radio.name = `${team}-player-radio`;
      radio.id = `${team}-player-${playerNumber}-radio`;
      radio.value = `${playerNumber}`;

      const label = document.createElement('label');
      label.htmlFor = radio.id;
      label.textContent = `${playerName}`;

      playerDiv.appendChild(radio);
      playerDiv.appendChild(label);

      document.getElementById(`${team}-players`).appendChild(playerDiv);
    } else {
      // チェックが外れた場合
      const existingDiv = document.getElementById(playerDivId);
      if (existingDiv) {
        existingDiv.remove();
      }
    }
  }

  // Away と Home のプレイヤーリストにイベントリスナーを設定
  awayPlayerList.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
      handlePlayerSelection(event, 'away');
    }
  });

  homePlayerList.addEventListener('change', function(event) {
    if (event.target.type === 'checkbox') {
      handlePlayerSelection(event, 'home');
    }
  });
});
