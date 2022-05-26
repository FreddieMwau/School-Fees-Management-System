import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponentComponent } from './add-student-component/add-student-component.component';
import { BalanceComponentComponent } from './balance-component/balance-component.component';
import { ClearedComponentComponent } from './cleared-component/cleared-component.component';
import { GetAllStudentComponentComponent } from './get-all-student-component/get-all-student-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
  {path: '', component: HomeComponentComponent},
  {path:'addStudent', component: AddStudentComponentComponent},
  {path: 'students', component: GetAllStudentComponentComponent},
  {path: 'balances', component:BalanceComponentComponent},
  {path: 'cleared', component:ClearedComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
