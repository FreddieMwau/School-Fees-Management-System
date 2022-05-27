import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Student } from 'src/app/interfaces/model';
import { StudentService } from 'src/app/services/services.service';

@Component({
  selector: 'app-edit-student-component',
  templateUrl: './edit-student-component.component.html',
  styleUrls: ['./edit-student-component.component.css']
})
export class EditStudentComponentComponent implements OnInit {

  isValid:boolean = false
  student?:Student
  studentBalance?=0
  id!:string

  constructor(private studentService: StudentService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.id=params['id']
      this.student = this.studentService.getStudent(this.id)
      if(this.student){
        this.studentBalance = this.student.balance
      }
    })
  }

  editBalance(){
  }

}
