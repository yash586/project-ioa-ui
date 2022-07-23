import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/services/nav-bar.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private navService: NavBarService) { }

  ngOnInit(): void {
  }

}
