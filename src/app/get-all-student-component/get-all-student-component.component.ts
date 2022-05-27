import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/model';
import { StudentService } from '../services/services.service';

@Component({
  selector: 'app-get-all-student-component',
  templateUrl: './get-all-student-component.component.html',
  styleUrls: ['./get-all-student-component.component.css']
})
export class GetAllStudentComponentComponent implements OnInit {

  students:Student[]=[]
  constructor(private studentService:StudentService) { }

  ngOnInit(): void {
    this.students = this.studentService.getAllStudents()
  }

}
