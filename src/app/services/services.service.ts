import { Injectable } from '@angular/core';
import { Student } from '../interfaces/model';
import { v4 as uid } from "uuid";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    {
      id: '1f9f3152-d141-4b46-a791-c3e25fd31f0e',
      name: 'Jackson Ndolo',
      email: 'ndolo@jackson.com',
      phoneNo: 78799808880,
      balance: 0,
      school: 'Mwisho wa Mawazo Primary School',
      course: 'UnderGraduate in Character Development with Information Technology '
    },
    {
      id: '1f9f3152-d141-4b46-c893-c3e25fd31f0e',
      name: 'Jackson Ndolo',
      email: 'ndolo@jackson.com',
      phoneNo: 78799808880,
      balance: 9212,
      school: 'Mwisho wa Mawazo Primary School',
      course: 'UnderGraduate in Character Development with Information Technology '

    },
    {
      id: '1f9f3152-d141-4b46-p123-c3e25fd31f0e',
      name: 'Jackson Ndolo',
      email: 'ndolo@jackson.com',
      phoneNo: 78799808880,
      balance: -2000,
      school: 'Mwisho wa Mawazo Primary School',
      course: 'UnderGraduate in Character Development with Information Technology '

    },
    {
      id: '1f9f3152-d141-4b46-a932-c3e25fd31f0e',
      name: 'Jackson Ndolo',
      email: 'ndolo@jackson.com',
      phoneNo: 78799808880,
      balance: 9212,
      school: 'Mwisho wa Mawazo Primary School',
      course: 'UnderGraduate in Character Development with Information Technology '

    },
  ]
  constructor() { }

  addStudent(name: string, email: string, phoneNo: number, school: string, course: string) {
    this.students.push({
      id: uid(),
      name, email, phoneNo, school, course
    })
  }

  getAllStudents() {
    return this.students;
  }

  getStudent(id: string) {
    return this.students.find(student => student.id === id)
  }

  getStudentsWithBalance() {
    return this.students.filter(student => student.balance! > 0)
  }

  getStudentsWithoutBalance() {
    return this.students.filter(student => student.balance! <= 0)
  }

  deleteStudent(id: string) {
    const index = this.students.findIndex(student => student.id === id)
    return this.students.splice(index, 1)
  }

  updateStudentFee(id: string, newBalance: number) {
    const student = this.getStudent(id)
    if (student) {
      student.balance = newBalance
    }
  }
}
