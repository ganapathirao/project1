import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/map'; 

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {  
  showLoader: boolean = true;
  employees:object;
  
  constructor(private _router: Router) {
    
 
      
  } 

  ngOnInit() {
    this._router.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) {
        this.showLoader = true;
        console.log(this.showLoader);
      }
      if (routerEvent instanceof NavigationEnd) {
        this.showLoader = false;
        console.log(this.showLoader);
      }  
    }); 
  }

  
  // getLogin():Observable<Response>{
  //   this._http.get("../../assets/json/test.json").map((response:Response)  => {
  //     console.log(response);
  //   })
  


}
