import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  showFormData(empForm){
    console.log(empForm.value);
    if(empForm.value.user == "admin" && empForm.value.password == "admin@123"){
      this._router.navigate(['/register']);
    }
  }

}
