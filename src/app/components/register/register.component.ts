import { AfterContentInit, AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  username: string= '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  dateofbirth: string = '';
  phoneNumber: string =  '';
  type: string = 'Customer';

  constructor(private service: UserService, private route: Router) {}

  ngOnInit(): void {
    
  }

  onSubmit(){
    const userData = {
      first_name :this.firstName,
      last_name: this.lastName,
      dob :this.dateofbirth,
      password: this.password,
      email :this.username,
      phone_number:this.phoneNumber
    }
    this.service.register(userData, this.type)
    .subscribe(() => {
       this.route.navigateByUrl('/login')
    },
    (error) => {
      console.error(error);
      alert('Error');
    })
  }

}
