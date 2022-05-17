import { Component } from '@angular/core';
import { retry } from 'rxjs';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent {

  public students: {name: string, feeBalance:number}[]= []
  public newStudents: { name: string, feeBalance: number }[] = []
  public errorMsg: string = ''
  public successMsg:string =''

  constructor() { }

  addStudent(name:string, feeBalance:number){
    if (name === ''){
      this.errorMsg = 'Please fill the student name'
      setTimeout(() => {
        this.errorMsg=''
      }, 3500)
    } else {
      this.students.push({name, feeBalance})
      this.successMsg = 'Entry added successfully'
      setTimeout(()=> {
        this.successMsg=''
      }, 3500)
    }
  }


  showAllStudents(){
    this.newStudents = this.students
    return this.newStudents
  }

  studentsWithBalance(){
    let filteredData = []
    for(let student of this.students){
      if(student.feeBalance > 0){
        filteredData.push(student)
      }
    }
    this.newStudents = filteredData
  }

  studentsWithoutBalance(){
    let filteredData = []
    for (let student of this.students) {
      if (student.feeBalance <= 0) {
        filteredData.push(student)
      }
    }
    this.newStudents = filteredData
  }

}
