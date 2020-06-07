window.onload = function() {
  let left_burger = this.document.querySelector('.left_sidebar_burger');
  let left_sidebar = this.document.querySelector('.left_sidebar');

  let body = this.document.querySelector('body');

  left_burger.addEventListener('click', function() {
    left_burger.classList.toggle('active');
    left_sidebar.classList.toggle('active');
    body.classList.toggle('lock');
  });

  let right_burger = this.document.querySelector('.right_sidebar_burger');
  let right_sidebar = this.document.querySelector('.right_sidebar');
  
  right_burger.addEventListener('click', function() {
    right_burger.classList.toggle('active');
    right_sidebar.classList.toggle('active');
  });
}