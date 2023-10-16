document.addEventListener('DOMContentLoaded', function () {
  let countrySelect = document.getElementById('country');
  let citiesSelect = document.getElementById('cities');
  const paragraph = document.querySelector('p');

  const citiesByCountry = {
    ger: ['Berlin', 'Munich', 'Hamburg'],
    usa: ['New York', 'Los Angeles', 'Chicago'],
    ukr: ['Kyiv', 'Kharkiv', 'Lviv'],
  };

  countrySelect.addEventListener('change', function () {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry] || [];

    citiesSelect.innerHTML = '';

    cities.forEach(function (city) {
      const option = document.createElement('option');
      option.value = city;
      option.text = city;
      citiesSelect.add(option);
    });

    updateParagraph();
  });

  citiesSelect.addEventListener('change', function () {
    updateParagraph();
  });

  function updateParagraph() {
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
    const selectedCity = citiesSelect.value;
    paragraph.textContent = selectedCountry + ', ' + selectedCity;
  }
});




