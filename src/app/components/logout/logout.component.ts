import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private route:Router, private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.authService.loggedOut();
    this.route.navigateByUrl('/login');
     this.navbarService.navBarItems.next([ { name: 'Home', link: '/home' }, { name: 'About US', link: '/about-us' }, { name: 'Login', link: '/login' } ]);

  }
   
}
