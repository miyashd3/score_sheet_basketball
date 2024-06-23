document.addEventListener('DOMContentLoaded', function() {
  // Awayチームの要素を取得
  const awayButtons = document.querySelectorAll('.away .countup');
  const awayScoreDisplay = document.querySelector('.away .away-count');
  const awayLog = document.querySelector('.away-score-log');

  // Homeチームの要素を取得
  const homeButtons = document.querySelectorAll('.home .countup');
  const homeScoreDisplay = document.querySelector('.home .home-count');
  const homeLog = document.querySelector('.home-score-log');

  // スコアを更新し、ログに記録する関数
  function updateScore(scoreDisplay, logDisplay, points) {
    let currentScore = parseInt(scoreDisplay.textContent);
    scoreDisplay.textContent = currentScore + points;
    // ログに追加
    logDisplay.innerHTML += `<div>${points}点追加: ${currentScore + points}</div><hr>`;
  }

  // Awayチームのボタンにイベントリスナーを設定
  awayButtons.forEach(button => {
    button.addEventListener('click', function() {
      const points = parseInt(this.textContent);
      updateScore(awayScoreDisplay, awayLog, points);
    });
  });

  // Homeチームのボタンにイベントリスナーを設定
  homeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const points = parseInt(this.textContent);
      updateScore(homeScoreDisplay, homeLog, points);
    });
  });
});