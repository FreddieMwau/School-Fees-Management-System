import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
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
  regNo:string=''
  balance=0
  msg:string=''
  id!:string

  constructor(private studentService: StudentService, private router: Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params) => {
      this.regNo = params['regNo']
      this.student = this.studentService.getStudent(this.id)
      if(this.student){
        this.balance = this.student.balance
      }
    })
  }

  options: AnimationOptions = {
    path: '/assets/lottie/edit.json'
  }

  animationCreated(animationItem: AnimationItem): void{
    console.log(animationItem);
    
  }


  editBalance(){
    this.route.params.subscribe((params:Params)=> {
      this.regNo= params['id']
      console.log(this.regNo);
      
      this.studentService.updateStudentFee(this.regNo, this.balance)
      console.log(this.balance);
      
      this.msg = 'Updated successfully'

      setTimeout(()=>{
        this.msg = ''
        this.router.navigate(['/students'])
      }, 2500)
    })
  }

}
