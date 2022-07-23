import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
   navBarItems: any[] = [];
  

  constructor(private navBarService :NavBarService,private authService : AuthService) {
   }

  ngOnInit(): void {
    this.navBarService.getNavItems().subscribe((a: any) => {
      this.navBarItems = a;
     })
     this.navBarService.navBarItems.next([ { name: 'Home', link: '/home' }, { name: 'About US', link: '/about-us' }, { name: 'Login', link: '/login' } ]);
  }
  onLogout(){
     this.authService.loggedOut();
  }
}
