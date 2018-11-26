import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  passwordDone: boolean;
  loginData: any;
  yourUserName: string;
  isUserValid: boolean = true;
  constructor(private _http: Http) { }

  ngOnInit() {
    this._http.get("../../assets/json/test.json").subscribe(resp => {
      this.loginData = JSON.parse(resp['_body']);
    });
  }

  getUserName(email) {
    this.passwordDone= false;
    this.yourUserName = undefined;
    console.log(email);
    for (let i = 0; i < this.loginData.length; i++) {
      if (email == this.loginData[i].email) {
        this.yourUserName = this.loginData[i].name;
        this.isUserValid = true;
      }
    }
    if (this.yourUserName == undefined || this.yourUserName == '') {
      this.isUserValid = false;
    }
    else {
      this.passwordDone = true;
    }
  }

}
