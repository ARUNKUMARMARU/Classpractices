https://docs.google.com/document/d/1j_YQ5BVKG_4m4_MXtklxul-MEmc64ZXYIdczjmoVGu8/edit

const countryDropdown = document.getElementById('countryDropdown');
const stateDropdown = document.getElementById('stateDropdown');
const districtDropdown = document.getElementById('districtDropdown');

const states = {
  india: ['tamilnadu', 'kerala', 'karnataka', 'andhra', 'telangana'],
  usa: ['california', 'torronto'],
};

const districts = {
  tamilnadu: ['coimbatore', 'chennai', 'madurai'],
  california: ['xyz', 'abc'],
};

// Initialize the country dropdown with a default value
countryDropdown.value = 'india';
populateStates(stateDropdown, states['india']);

function populateStates(stateDropdown, data) {
  stateDropdown.innerHTML = '';
  let option = document.createElement('option');
  option.text = '--select state--';
  stateDropdown.appendChild(option);
  data.forEach((state) => {
    let option = document.createElement('option');
    option.value = state;
    option.text = state;
    stateDropdown.appendChild(option);
  });
  // Reset the districts dropdown
  populateDistricts(districtDropdown, []);
}

function populateDistricts(districtDropdown, data) {
  districtDropdown.innerHTML = '';
  let option = document.createElement('option');
  option.text = '--select district--';
  districtDropdown.appendChild(option);
  data.forEach((district) => {
    let option = document.createElement('option');
    option.value = district;
    option.text = district;
    districtDropdown.appendChild(option);
  });
}

countryDropdown.addEventListener('change', function () {
  populateStates(stateDropdown, states[countryDropdown.value]);
  // Reset the districts dropdown when the country changes
  populateDistricts(districtDropdown, []);
});

stateDropdown.addEventListener('change', function () {
  populateDistricts(districtDropdown, districts[stateDropdown.value]);
});

// Trigger the initial population of the districts dropdown
populateDistricts(districtDropdown, districts[stateDropdown.value]);

