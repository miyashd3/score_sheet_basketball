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
    nameLabel.textContent = `${playerName} #${playerNumber}`;
    
    const scoreSpan = document.createElement('span');
    scoreSpan.className = 'score';
    scoreSpan.id = `${team}-player-${playerNumber}-score`;
    scoreSpan.textContent = '0';
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '削除';

    const successLate = document.createElement('div');
    successLate.className = 'late';
    successLate.id = `${team}-player-${playerNumber}-late`;

    // シュートタイプと対応するIDの接尾辞をマッピング
    const shots = [
      { type: 'FT', suffix: 'ftLate' },
      { type: 'FG', suffix: 'fgLate' },
      { type: '3P', suffix: 'threeLate' }
    ];

    // 各シュートタイプに対して要素を作成
    shots.forEach(shot => {
      const shotLate = document.createElement('p');
      shotLate.className = `${shot.suffix.split('Late')[0]}-late`;

      const typeSpan = document.createElement('span');
      typeSpan.textContent = `${shot.type} `;

      // 成功回数を表示するspan
      const successSpan = document.createElement('span');
      successSpan.id = `${team}-player-${playerNumber}-${shot.suffix}-success`;
      successSpan.textContent = `Success: 0 `;
      successSpan.style.marginRight = '10px'; // スペースを追加

      // 総試行回数を表示するspan
      const totalSpan = document.createElement('span');
      totalSpan.id = `${team}-player-${playerNumber}-${shot.suffix}-total`;
      totalSpan.textContent = 'Total: 0';

      // spanタグをpタグに追加
      shotLate.appendChild(typeSpan);
      shotLate.appendChild(successSpan);
      shotLate.appendChild(totalSpan);

      // pタグをdivに追加
      successLate.appendChild(shotLate);
    });

    li.appendChild(checkBox);
    li.appendChild(nameLabel);
    li.appendChild(scoreSpan);
    li.appendChild(deleteBtn);
    li.appendChild(successLate);
    
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
