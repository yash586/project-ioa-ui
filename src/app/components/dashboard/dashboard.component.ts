import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';
import { TransactService } from 'src/app/services/transact.user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  amount: string = '';
  operation: string = '';
  accnumber: string = '';
  name: string | null = '';
  lastName: string | null = '';
  constructor(private route: Router,private service: TransactService, private sessionService: SessionStorageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.name = this.sessionService.getItem('name');
    this.lastName = this.sessionService.getItem('lastname');
  }
  onSubmit(){
    const userTransaction = {
      transaction_type: this.operation,
      amount: this.amount,
      customer_id: this.accnumber
    }
    this.service.transact(userTransaction).subscribe(()=>{
      alert('transaction complete');
    },
    (error) => {
      console.error(error);
      alert('Error');
    })
  } 
  // logout(){
  //   this.authService.loggedOut();
  //   this.route.navigateByUrl('/login');
  // }
}
