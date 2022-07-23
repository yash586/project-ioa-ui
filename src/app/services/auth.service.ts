import { Injectable } from '@angular/core';
import { NavBarService } from './nav-bar.service';
import { SessionStorageService } from './session-storage.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private sessionStorage: SessionStorageService, private navBarService: NavBarService) { 
  }

  loggedIn(name: string, lastname: string) {
    this.sessionStorage.setItem('loggedIn', 'TRUE');
    this.sessionStorage.setItem('name', name);
    this.sessionStorage.setItem('lastname', lastname);
     this.navBarService.navBarItems.next([ { name: 'Home', link: '/home' }, { name: 'About US', link: '/about-us' }, { name: 'Logout', link: '/logout' } ]);
  }

  loggedOut() {
    this.sessionStorage.clear();
  }

  isLoggedIn() {
    const loggedIn = this.sessionStorage.getItem('loggedIn');
    if(loggedIn) {
      return true;
    }
    return false;
  }
}
