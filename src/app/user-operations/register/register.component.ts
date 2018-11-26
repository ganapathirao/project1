import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  country = "india";

  countriesList: Array<any> = [
    { name: 'Germany', states: ['Duesseldorf', 'Leinfelden-Echterdingen', 'Eschborn'], countries: ['germany country'] },
    { name: 'Spain', states: ['Barcelona'], countries:['spain country'] },
    { name: 'india', states: ['westGodavari'], countries:['marteru'] },
    { name: 'USA', states: ['Downers Grove'],countries:['usa countries'] },
    { name: 'Mexico', states: ['Puebla'], countries:['mexico countries'] },
    { name: 'China', states: ['Beijing'], countries:['china countries'] },
  ];
  selectedStates: Array<any>;
  changeState(selectedstate){
    this.selectedStates = this.countriesList.find(x => x.name == selectedstate).states;
  }

  selectedCountries:Array<any>;
  changeCountry(selectedcountry){
    console.log(this.countriesList.find(x => x.states));
    
    this.selectedCountries = this.countriesList.find(x => x.states[selectedcountry  ] == selectedcountry ).countries;
  }

  constructor() { }

  ngOnInit() {
  }

  registerUser(empform) {
    console.log(empform.value);
  }

}
