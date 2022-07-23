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
    // const tempArray = [{ name: 'Home', link: '/home' }, { name: 'About US', link: '/about-us' }, { name: 'Login', link: '/login' } ];
    // const loginIndex = this.navBarService.navBarItems.findIndex(item => item.name === 'Login');
    // this.navBarService.navBarItems.splice(loginIndex, 1, { name: 'Logout', link: 'logout' })
     this.navBarService.navBarItems.next([ { name: 'Home', link: '/home' }, { name: 'About US', link: '/about-us' }, { name: 'Logout', link: '/logout' } ]);
   console.log(this.navBarService.navBarItems)
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
