import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Student } from '../interfaces/model';
import { StudentService } from '../services/services.service';

@Component({
  selector: 'app-balance-component',
  templateUrl: './balance-component.component.html',
  styleUrls: ['./balance-component.component.css']
})
export class BalanceComponentComponent implements OnInit {

  students:Student[]=[]
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudentsWithBalance()
    console.log(this.students);
    
  }

  options: AnimationOptions = {
    path: '/assets/lottie/incompleted.json'
  }

  animationCreated(animationItem: AnimationItem): void{
    console.log(animationItem);
    
  }

}
