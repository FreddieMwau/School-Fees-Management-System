import { Injectable } from '@angular/core';
import { Student } from '../interfaces/model';
import { v4 as uid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    {
      regNo: '1f9f3152-d141-4b46-p123-c3e25fd31f0e',
      studentName: 'Jackson Ndolo',
      balance: -2000,
      studentSchool: 'Mwisho wa Mawazo Primary School',
      studentCourse: 'UnderGraduate in Character Development with Information Technology ',
      contactInfo: {
        studentEmail: 'ndolo@jackson.com',
        studentPhoneNumber: 78799808880,
      }

    },
    {
      regNo: '1f9f3152-d141-4b46-p12e3-c3e25fd31f0e',
      studentName: 'Jackson Ndolo',
      balance: -2000,
      studentSchool: 'Mwisho wa Mawazo Primary School',
      studentCourse: 'UnderGraduate in Character Development with Information Technology ',
      contactInfo: {
        studentEmail: 'ndolo@jackson.com',
        studentPhoneNumber: 78799808880,
      }

    },
    {
      regNo: '1f9f3152-d141-4b46-p1e23-c3e25fd31f0e',
      studentName: 'Jackson Ndolo',
      balance: -2000,
      studentSchool: 'Mwisho wa Mawazo Primary School',
      studentCourse:'UnderGraduate in Character Development with Information Technology ',
      contactInfo: {
        studentEmail: 'ndolo@jackson.com',
        studentPhoneNumber:  78799808880,
      }

    },
    {
      regNo: '1f9f3152-d141-4eb46-p123-c3e25fd31f0e',
      studentName: 'Jackson Ndolo',
      balance: -2000,
      studentSchool: 'Mwisho wa Mawazo Primary School',
      studentCourse: 'UnderGraduate in Character Development with Information Technology ',
      contactInfo: {
        studentEmail: 'ndolo@jackson.com',
        studentPhoneNumber: 78799808880,
      }

    },
  ]
  constructor() { }

  addStudent(student:Student){
    this.students.push(student)
  }

  getAllStudents() {
    return this.students;
  }

  getStudent(regNo: string) {
    return this.students.find(student => student.regNo === regNo)
  }

  getStudentsWithBalance() {
    return this.students.filter(student => student.balance! > 0)
  }

  getStudentsWithoutBalance() {
    return this.students.filter(student => student.balance! <= 0)
  }

  deleteStudent(regNo: string) {
    const index = this.students.findIndex(student => student.regNo === regNo)
    return this.students.splice(index, 1)
  }

  updateStudentFee(regNo: string, newBalance: number) {    
    // return this.students.find(student =>{
    //   student.regNo === regNo
    //   // this.getStudent(regNo)
    //   student.balance = newBalance
    // })
    const student = this.getStudent(regNo)
    if(student){
      // student!.balance = newBalance
      student.balance = newBalance
    }
  }
}
