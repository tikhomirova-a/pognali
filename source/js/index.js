var profileButton = document.querySelector('.profile__link');
var modal = document.querySelector('.modal');
var modalButtonClose = modal.querySelector('.business__button-close');

profileButton.addEventListener('click', function () {
  event.preventDefault();
  modal.classList.add('modal--show');
});

modalButtonClose.addEventListener('click', function() {
  event.preventDefault();
  modal.classList.remove('modal--show');
});
