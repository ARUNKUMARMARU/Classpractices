const  countryDropdown = document.getElementById("countryDropdown");

const  stateDropdown = document.getElementById("stateDropdown");

const  districtDropdown = document.getElementById("districtDropdown");

const states = {
    Bharat:["Tamilnadu", 'kerala', "delhi", 'goa'],
    USA:['california', 'florida', 'texas', 'virginia'],
    Russia:["Republic of Sakha", 'Republic of Adygea', 'Altai Republic']
}

let papulateStates = (stateDropdown, data) => {
    stateDropdown.innerHTML= '';
    let option = document.createElement('option');
    option.text= '--select state--';
    stateDropdown.appendChild(option);
    data.forEach((state) => {
        let option = document.createElement('option');
        option.value = state;
        option.text = state;
        stateDropdown.appendChild(option);

    // data.forEach((state) => {
    //      let option = document.createElement('option');
    //      option.value = state;
    //      option.text = state;
    //      stateDropdown.appendChild(option);
    })
        
    };


countryDropdown.addEventListener("change", function() {
    papulateStates(stateDropdown, states[countryDropdown.value])
});