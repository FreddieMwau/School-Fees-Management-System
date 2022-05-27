import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Student } from '../interfaces/model';
import { StudentService } from '../services/services.service';

@Component({
  selector: 'app-cleared-component',
  templateUrl: './cleared-component.component.html',
  styleUrls: ['./cleared-component.component.css']
})
export class ClearedComponentComponent implements OnInit {

  students: Student[] = []
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudentsWithoutBalance()
  }

  options: AnimationOptions = {
    path: '/assets/lottie/completed.json'
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

}
