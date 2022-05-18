import { Component } from '@angular/core';

@Component({
  selector: 'app-body-component',
  templateUrl: './body-component.component.html',
  styleUrls: ['./body-component.component.css']
})
export class BodyComponentComponent {

  students: {name: string, feeBalance:number}[]= []
  newStudents: { name: string, feeBalance: number }[] = this.students
  errorMsg: string = ''
  successMsg:string =''
  nameInput= <HTMLInputElement>  document.getElementById('nameInput')
  balanceInput: HTMLInputElement | null = null;


  constructor() { }

  addStudent(name:string, feeBalance:number){  
    if (!name.trim()){
      this.errorMsg = 'Please fill the student name'
      setTimeout(() => {
        this.errorMsg=''
      }, 3500)
    } else if (this.students.find((student) => student.name === name)){
      this.errorMsg = 'Student with this name already exists'
      setTimeout(() => {
        this.errorMsg=''
      }, 3500)
    }else {
      this.students.push({name, feeBalance})
      this.successMsg = 'Entry added successfully'
      // this.nameInput.value=''
      setTimeout(()=> {
        this.successMsg=''
        name=''
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
