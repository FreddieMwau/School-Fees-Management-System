import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { authGuard } from '../services/auth-guard.service';
import { authService } from '../services/auth.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor(private authService:authService, private router:Router) { }

  ngOnInit(): void {
  }

  logIn(){
    this.authService.logIn()
    this.router.navigate(['/students'])
  }

  options: AnimationOptions = {
    path: '/assets/lottie/login.json'
  }

  animationCreated(animationItem: AnimationItem): void{
    console.log(animationItem);
    
  }

}
