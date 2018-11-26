import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router: Router, private _http: Http) { }
  loginData: any;
  isUserValid: boolean = false;
 
  ngOnInit() {
    this.getLogin();
  }

  // Check the username and password
  showFormData(username, password) {
    console.log(username, password)
    for (let i = 0; i < this.loginData.length; i++) {
      if (username == this.loginData[i].name && password == this.loginData[i].password) {
        this._router.navigate(['/register']);
        this.isUserValid = true;
      }
    }
    if (this.isUserValid == false) {
      alert("Invalid Credintials.....");
    }
  }

 //Get the username and password from the JSON.
  getLogin() {
    this._http.get("../../assets/json/test.json").subscribe(resp => {
      this.loginData = JSON.parse(resp['_body']);
      return this.loginData;
    });
  }

}
