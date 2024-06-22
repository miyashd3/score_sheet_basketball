document.addEventListener('DOMContentLoaded', function() {
  // Awayチームのボタンとスコア表示要素を取得
  const awayButtons = document.querySelectorAll('.away .countup');
  const awayScoreDisplay = document.querySelector('.away .away-count');

  // Homeチームのボタンとスコア表示要素を取得
  const homeButtons = document.querySelectorAll('.home .countup');
  const homeScoreDisplay = document.querySelector('.home .home-count');

  // スコアを更新する関数
  function updateScore(scoreDisplay, points) {
    let currentScore = parseInt(scoreDisplay.textContent);
    scoreDisplay.textContent = currentScore + points;
  }

  // Awayチームのボタンにイベントリスナーを設定
  awayButtons.forEach(button => {
    button.addEventListener('click', function() {
      const points = parseInt(this.textContent);
      updateScore(awayScoreDisplay, points);
    });
  });

  // Homeチームのボタンにイベントリスナーを設定
  homeButtons.forEach(button => {
    button.addEventListener('click', function() {
      const points = parseInt(this.textContent);
      updateScore(homeScoreDisplay, points);
    });
  });
});