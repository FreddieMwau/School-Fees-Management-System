import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authService } from '../services/auth.service';

@Component({
  selector: 'app-nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  constructor(private authService: authService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logOut()
    setTimeout(()=>{
      this.router.navigate([''])
    }, 1000)
  }

}
