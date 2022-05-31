import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../interfaces/model';
import { StudentService } from '../services/services.service';

@Component({
  selector: 'app-add-student-component',
  templateUrl: './add-student-component.component.html',
  styleUrls: ['./add-student-component.component.css']
})
export class AddStudentComponentComponent implements OnInit {
  // isValid:boolean = false
  constructor(private studentService: StudentService, private router:Router) { }
  studentDetails!:FormGroup
  student?:Student
  msg:string =''

  ngOnInit(): void {
    this.studentDetails = new FormGroup({
      regNo: new FormControl('', Validators.required),
      studentName: new FormControl('', Validators.required),
      studentSchool: new FormControl('', Validators.required),
      studentCourse: new FormControl('', Validators.required),
      balance: new FormControl(0),
      contactInfo: new FormGroup({
        studentEmail: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^[a-z]+@thejitu.com$/)]),
        studentPhoneNumber: new FormControl('', [Validators.required,Validators.pattern(/^[0-9]\d*$/), Validators.maxLength(10), Validators.minLength(10)]),
      })
    })
  }

  onSubmit(){
    console.log(this.studentDetails);
    // this.student = this.studentDetails.value 
    this.studentService.addStudent(this.studentDetails.value)
    console.log(this.studentDetails.value);
    
    this.studentService.getAllStudents
    this.msg = "Student added successfully"
    setTimeout(()=>{
      this.msg = ""
      this.router.navigate(['/students'])
    }, 2000)
  }
}
