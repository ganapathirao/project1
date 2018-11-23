import { Component, OnInit } from '@angular/core';
import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {
  showLoader: boolean = true;
  constructor(private _router: Router) {

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

  ngOnInit() {
  }



}
