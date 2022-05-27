import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';
import { Student } from 'src/app/interfaces/model';
import { StudentService } from 'src/app/services/services.service';

@Component({
  selector: 'app-student-component',
  templateUrl: './student-component.component.html',
  styleUrls: ['./student-component.component.css']
})

export class StudentComponentComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/lottie/student.json'
  }

  id!:string
  student?:Student
  constructor(private studentService:StudentService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id=params['id']
      this.student = this.studentService.getStudent(this.id)
    })
  }

  animationCreated(animationItem: AnimationItem): void{
    console.log(animationItem);

  }

  editBalance(){
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

  deleteStudent(reg:string){
    this.studentService.deleteStudent(reg)

    setTimeout(()=>{
      this.router.navigate(['/students'])
    })
  }

}
