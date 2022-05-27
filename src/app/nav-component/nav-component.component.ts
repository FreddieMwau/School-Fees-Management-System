import { Component, OnInit } from '@angular/core';
import { authService } from '../services/auth.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  constructor(private authService: authService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logOut()
  }

}
