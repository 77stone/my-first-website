const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
  btn.textContent = '已按下！';
  setTimeout(() => {
    btn.textContent = '按我';
  }, 1000);
});
