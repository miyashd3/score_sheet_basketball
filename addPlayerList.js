document.addEventListener('DOMContentLoaded', function() {
  const awayForm = document.getElementById('awayPlayerForm');
  const homeForm = document.getElementById('homePlayerForm');
  const awayPlayerList = document.getElementById('away-player-list');
  const homePlayerList = document.getElementById('home-player-list');

  function addPlayerToList(playerList, playerNameInput, playerNumberInput, team) {
    const name = playerNameInput.value;
    const number = parseInt(playerNumberInput.value, 10);
    const playerId = `${team}-player-${number}`;

    const li = document.createElement('li');
    li.id = `${playerId}`; // リストアイテムにIDを設定
    
    // チェックボックスをつけてセレクションエリアに配置するプレイヤーを選べるようにする
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.name = `${team}-player`;
    checkBox.id = `${playerId}`;
    li.appendChild(checkBox);

    const textSpan = document.createElement('span');
    textSpan.textContent = `${name} - ${number}: `;
    li.appendChild(textSpan); // テキストをli要素に追加

    const span = document.createElement('span');
    span.className = 'score';
    span.id = `${playerId}-score`;
    span.textContent = '0';
    li.appendChild(span);

    // 削除ボタンの作成
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    deleteBtn.className = 'delete-btn';
    deleteBtn.id = `${playerId}`; // 削除ボタンにIDを設定
    li.appendChild(deleteBtn);

    playerList.appendChild(li);

    playerNameInput.value = '';
    playerNumberInput.value = '';
  }

  awayForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addPlayerToList(awayPlayerList, document.getElementById('awayPlayerName'), document.getElementById('awayPlayerNumber'), 'away');
  });

  homeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addPlayerToList(homePlayerList, document.getElementById('homePlayerName'), document.getElementById('homePlayerNumber'), 'home');
  });
});