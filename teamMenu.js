document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButtons = document.querySelectorAll('.hamburger-button');
  const sidebars = document.querySelectorAll('.sidebar');
  const closeButtons = document.querySelectorAll('.close-button');

  // ハンバーガーメニューボタンの機能設定
  hamburgerButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetMenu = document.getElementById(this.dataset.target);
      if (targetMenu.style.display === 'block') {
        targetMenu.style.display = 'none';
      } else {
        // 他のメニューを非表示にして、クリックされたメニューを表示
        sidebars.forEach(menu => menu.style.display = 'none');
        targetMenu.style.display = 'block';
      }
    });
  });

  // 閉じるボタンの機能設定
  closeButtons.forEach(button => {
    button.addEventListener('click', function() {
      // ボタンの親要素（メニュー）を非表示にする
      this.parentElement.style.display = 'none';
    });
  });

  // 画面のサイズが変わった時の処理を追加
  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) { // 768px 以上のとき
      // サイドバーを全て表示状態にする
      sidebars.forEach(menu => menu.style.display = 'block');
    } else {
      // モバイルサイズではボタンの状態に基づいて表示制御を行う
      sidebars.forEach(menu => menu.style.display = 'none');
    }
  });
});

