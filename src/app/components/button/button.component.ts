import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    @Input() text!: string;
    @Input() btnClass!: string;

  constructor(private service: UserService, private authService: AuthService, private route: Router){}

  ngOnInit(): void {
  }
  
}
