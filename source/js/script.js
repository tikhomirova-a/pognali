var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--opened');
  }
});


// var travelerFilter = document.querySelectorAll('.traveler-filter__fieldset');
// var travelerFilterToggle = travelerFilter.querySelectorAll('.traveler-filter__button');

// travelerFilter.forEach(element => element.classList.remove('traveler-filter__fieldset--opened'));

// for (i=0; i < travelerFilter.length; i++) {
//   travelerFilterToggle[i].addEventListener('click', runFilter.bind(i));
// }

// function runFilter(evt) {
//   evt.preventDefault();
//   if (travelerFilter[this].classList.contains('traveler-filter__fieldset--opened')) {
//     travelerFilter[this].classList.remove('traveler-filter__fieldset--opened');
//   } else {
//     travelerFilter[this].classList.add('traveler-filter__fieldset--opened');
//   }
// }

// travelerFilterToggle.addEventListener('click', function() {
//   if (travelerFilter.classList.contains('traveler-filter__fieldset--opened')) {
//     travelerFilter.classList.remove('traveler-filter__fieldset--opened');
//   } else {
//     travelerFilter.classList.add('traveler-filter__fieldset--opened');
//   }
// });

// var widthMediaQuery = window.matchMedia('(min-width: 1440px)');

// // filter.classList.remove('country-filter--opened');

// widthMediaQuery.addListener(function(data) {
//   if (data.matches) {
//     filter.classList.add('country-filter--opened');
//   }
//   else {
//     filter.classList.remove('country-filter--opened');
//   }
// });
