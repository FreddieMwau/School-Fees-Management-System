import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/services.service';

@Component({
  selector: 'app-add-student-component',
  templateUrl: './add-student-component.component.html',
  styleUrls: ['./add-student-component.component.css']
})
export class AddStudentComponentComponent implements OnInit {
  isValid:boolean = false
  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
  }

  addStudents(name:string, email:string, phoneNumber:number, school:string, course:string){
    if(name.length === 0 || email.length === 0 || phoneNumber <= 0 || school.length === 0 || course.length === 0){
      this.isValid= true
      setTimeout(() => {
        this.isValid=false
      }, 3500)
    } else {
      this.studentService.addStudent(name, email, phoneNumber,school, course)
    }
  }
}
