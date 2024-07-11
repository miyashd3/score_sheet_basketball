document.addEventListener('DOMContentLoaded', function() {
  const awayForm = document.getElementById('awayPlayerForm');
  const homeForm = document.getElementById('homePlayerForm');
  const awayPlayerList = document.getElementById('away-player-list');
  const homePlayerList = document.getElementById('home-player-list');

  // プレイヤーをリストに追加する関数
  function addPlayerToList(playerList, playerName, playerNumber, team) {
    const li = document.createElement('li');
    li.className = 'player-item';
    
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.id = `${team}-player-${playerNumber}`;
    checkBox.name = `${team}-player`;
    
    const nameLabel = document.createElement('label');
    nameLabel.htmlFor = checkBox.id;
    nameLabel.textContent = `${playerName} - ${playerNumber}`;
    
    const scoreSpan = document.createElement('span');
    scoreSpan.className = 'score';
    scoreSpan.id = `${team}-player-${playerNumber}-score`;
    scoreSpan.textContent = '0';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '削除';
    
    li.appendChild(checkBox);
    li.appendChild(nameLabel);
    li.appendChild(scoreSpan);
    li.appendChild(deleteBtn);
    
    playerList.appendChild(li);
  }

  // Away フォームの送信イベントハンドラー
  awayForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const playerName = document.getElementById('awayPlayerName').value;
    const playerNumber = document.getElementById('awayPlayerNumber').value;
    addPlayerToList(awayPlayerList, playerName, playerNumber, 'away');
    this.reset(); // フォームをリセット
  });

  // Home フォームの送信イベントハンドラー
  homeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const playerName = document.getElementById('homePlayerName').value;
    const playerNumber = document.getElementById('homePlayerNumber').value;
    addPlayerToList(homePlayerList, playerName, playerNumber, 'home');
    this.reset(); // フォームをリセット
  });
});
