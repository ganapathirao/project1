import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  country = "india";
  countries: Array<any>[];
  selectedStates: Array<any> = [];
  citiesList: Array<any> = [];
  selectedCountries: Array<any> = [];
  countriesList: Array<any> = [
    {
      name: 'Germany', states: [{ stateName: 'state1', countryNames: ["country1", "country2"] }, { stateName: 'state2', countryNames: ["country3", "country4"] }]
    },
    {
      name: 'india', states: [{ stateName: 'west', countryNames: ["marteru", "palkol"] }, { stateName: 'east', countryNames: ["rvpm", "rjy"] }]
    }
    ];
  statesList: Array<any> = [];
  changeState(selectedstate) {
    this.selectedStates = [];
    for (let i = 0; i < this.countriesList.find(x => x.name == selectedstate).states.length; i++) {
      this.statesList = this.countriesList.find(x => x.name == selectedstate).states[i].stateName;
      this.selectedStates.push(this.statesList);
    }
  }



  changeCountry(selectedcountry) {
    for (let i = 0; i < this.selectedStates.length; i++) {
      if (this.countriesList.find(x => x.states[i].stateName == selectedcountry)) {
        let citiesCount = this.countriesList.find(x => x.states[i].stateName == selectedcountry).states[i].countryNames.length;
        for (let t = 0; t < citiesCount; t++) {
          this.selectedCountries[t] = this.countriesList.find(x => x.states[i].stateName == selectedcountry).states[i].countryNames[t];
        }
      }

    }
    console.log(this.selectedCountries);

    // this.selectedCountries = this.countriesList.find(x => x.states[selectedcountry] == selectedcountry).countries;
  }

  constructor() { }

  ngOnInit() {
  }

  registerUser(empform) {
    console.log(empform.value);
  }

}
