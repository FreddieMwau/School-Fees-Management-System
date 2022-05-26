import { Injectable } from '@angular/core';
import { Student } from '../interfaces/model';
import { v4 as uid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students:Student[]=[]
  constructor() { }

  addStudent(name:string, email:string, phoneNo:number, school:string, course:string){
    this.students.push({
      id:uid(),
      name, email, phoneNo, school, course
    })
  }

  getAllStudents(){
    return this.students;
  }

  getStudent(id:string){
    return this.students.find(student => student.id === id)
  }

  getStudentsWithBalance(){
    return this.students.find(student => {
      if (student.balance) return true
      return false
    })
  }

  getStudentsWithoutBalance(){
    return this.students.find(student => {
      if (student.balance) return false
      return true
    })
  }

  deleteStudent(id:string){
    const index = this.students.findIndex(student => student.id === id)
    return this.students.splice(index, 1)
  }

  updateStudentFee(id:string, newBalance:number){
    const student = this.getStudent(id)
    if(student){
      student.balance = newBalance
    }
  }
}
