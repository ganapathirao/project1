import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwordDone: boolean;
  constructor(private _http: Http) { }
  loginData: any;
  yourPassword: string;
  isUserValid: boolean = true;
  ngOnInit() {
    this._http.get("../../assets/json/test.json").subscribe(resp => {
      this.loginData = JSON.parse(resp['_body']);
    });
  }

   //retriving the User password
  getPassword(email) {
    this.passwordDone= false;
    this.yourPassword = undefined;
    console.log(email);
    for (let i = 0; i < this.loginData.length; i++) {
      if (email == this.loginData[i].email) {
        this.yourPassword = this.loginData[i].password;
        this.isUserValid = true;
      }
    }
    if (this.yourPassword == undefined || this.yourPassword == '') {
      this.isUserValid = false;
    }
    else {
      this.passwordDone = true;
    }

    


  }


}
