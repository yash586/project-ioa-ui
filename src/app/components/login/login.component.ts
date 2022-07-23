import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NavBarService } from 'src/app/services/nav-bar.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  type: string = 'Customer';

  constructor(private service: UserService, private route: Router, private authService: AuthService) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      this.route.navigateByUrl('/dashboard');
    }
  }

  onSubmit() {
    const loginData = {
      type: this.type,
      username: this.username,
      password: this.password
    }
    this.service.login(loginData).subscribe( (response: any)=>{
      // navigate to dashboard
      this.authService.loggedIn(response.first_name, response.last_nme);
      this.route.navigateByUrl('/dashboard')
    },
    (error)=>{
      console.error(error);
      
    })
  }


}
