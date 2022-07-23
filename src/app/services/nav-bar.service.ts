import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {

  navBarItems = new Subject();

  constructor() {}

  getNavItems() {
    return this.navBarItems;
  }


}
