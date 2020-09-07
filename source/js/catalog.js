var countryFilter = document.querySelector('.country-filter');
var countryFilterToggle = countryFilter.querySelector('.country-filter__toggle');
var countryFilterClose = countryFilter.querySelector('.countries-dropdown__button-close');

countryFilter.classList.remove('country-filter--opened');

countryFilterToggle.addEventListener('click', function() {
  if (countryFilter.classList.contains('country-filter--opened')) {
    countryFilter.classList.remove('country-filter--opened');
  } else {
    countryFilter.classList.add('country-filter--opened');
  }
});

countryFilterClose.addEventListener('click', function() {
  countryFilter.classList.remove('country-filter--opened');
});
