document.addEventListener('DOMContentLoaded', function() {
  const awayForm = document.getElementById('awayPlayerForm');
  const homeForm = document.getElementById('homePlayerForm');
  const awayPlayerList = document.getElementById('away-player-list');
  const homePlayerList = document.getElementById('home-player-list');
  const awayPlayersSelection = document.querySelector('.away-players');
  const homePlayersSelection = document.querySelector('.home-players');

  function addPlayerToList(playerList, playerNameInput, playerNumberInput, team) {
    const name = playerNameInput.value;
    const number = parseInt(playerNumberInput.value, 10);
    const playerId = `${team}-player-${number}`;

    // チェックボックスをつけてセレクションエリアに配置するプレイヤーを選べるようにする
    // const checkBox = document.createElement('input');
    // checkBox.type = 'checkbox';
    // checkBox.name = `${team}-player`;
    // checkBox.id = `${playerId}`;

    const li = document.createElement('li');
    li.id = `${playerId}`; // リストアイテムにIDを設定
    li.textContent = `${name} - ${number}: `;
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

    // セレクションエリアはチェックボックスが実装したらseleection.jsを作り隔離する
    // Add radio button to the selection area
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.name = `${team}-player`;
    radioInput.id = playerId;
    radioInput.value = number;

    const label = document.createElement('label');
    label.htmlFor = playerId;
    label.textContent = `${name} - ${number}`;

    const selectionArea = team === 'away' ? awayPlayersSelection : homePlayersSelection; // if文の略式
    selectionArea.appendChild(radioInput);
    selectionArea.appendChild(label);

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