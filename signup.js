let session = document.querySelector('#session');
const day = document.querySelector("#day");
const month = document.querySelector("#month"); 
const year = document.querySelector("#year");

let yr = 2015;

const months = [
      'January',
      'February',
      'march',
      'April',
      'May',
      'June',
      'July',
      'Aurgust',
      'September',
      'October',
      'November',
      'December'
]

let departmentOfColleges = {
      'CST': [
        {value: 'select', text: 'Select department'},
       {value: 'CS', text: 'Computer Science'},
       {value: 'PT', text: 'Printing Technology'},
       {value: 'FT', text: 'Food Technology'},
       {value: 'AT', text: 'Agricultural Technology'},
       {value: 'ES', text: 'Environmental Science'},
       {value: 'AC', text: 'Applied Chemistry'},
       {value: 'AP', text: 'Applied Physics'},
       {value: 'AB', text: 'Applied Biology'},
       {value: 'NAD', text: 'Nutrition And Dietetics'},
       {value: 'MS', text: 'Mathematics And Statistics'},
       {value: 'LIS', text: 'Library And Information Science'},
       {value: 'TMT', text: 'Tourism Management Technology'},
       {value: 'FDT', text: 'Fashion And Design Technology'},
       {value: 'MPT', text: 'Mechanical And Production Technology'}
      ],  
      'COE': [
            {value: 'select', text: 'Select department'},
            {value: 'CE', text: 'Computer Engineering'},
            {value: 'EE', text: 'Electrical Engineering'},
            {value: 'CE', text: 'Chemical Engineering'},
            {value: 'CIE', text: 'Civil Engineering'},
            {value: 'EEE', text: 'Electrical Electronics Engineering'},
            {value: 'ME', text: 'Mechanical Engineering'},
            {value: 'MPRE', text: 'Mineral And Petroleum resources Engineering'},
            {vlaue: 'PGPE', text: 'Petroleum And Gas Processing Engineering'},
            {value: 'WRE', text: 'Water Resources Engineering'},
            {value: 'REE', text: 'Renewable Energy Engineering'},

      ]
 }   

 function updatDropdown2(){

      let firstSelect = document.querySelector('#dropdown');
      
      let secondSelect = document.querySelector('#department');

      secondSelect.textContent = ''; 

      
      var selectedValue = firstSelect.value;

      var options = departmentOfColleges[selectedValue];

      for (let i = 0; i < options.length; i++){
            addOption(secondSelect, options[i].value, options[i].text);
           
      }


 };

 document.addEventListener('change', updatDropdown2);


 function addOption(selectElement, value, text){
      var option = document.createElement("option");
      option.value = value;
      option.text = text;
      selectElement.appendChild(option);

 }

 
       


for (let d = 1; d <= 31; d++){
      let days = document.createElement("option");
      days.value = d;
      days.textContent = d;
      day.appendChild(days);
}    


for (let m = 0; m < months.length; m++){
      let mnth = document.createElement("option");
      mnth.value = months[m];
      mnth.textContent = months[m];
      month.appendChild(mnth);
}

for (let y = yr; y >= 1960; y--){
      let years = document.createElement("option");
      years.value = y;
      years.textContent = y;
      year.appendChild(years);
}

// console.log(day);

















































































































