import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponentComponent } from './nav-component/nav-component.component';
import { BodyComponentComponent } from './body-component/body-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { FormsModule } from '@angular/forms';
import { SortPipe } from './sort.pipe';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AddStudentComponentComponent } from './add-student-component/add-student-component.component';
import { GetAllStudentComponentComponent } from './get-all-student-component/get-all-student-component.component';
import { BalanceComponentComponent } from './balance-component/balance-component.component';
import { ClearedComponentComponent } from './cleared-component/cleared-component.component';
import { StudentComponentComponent } from './get-all-student-component/student-component/student-component.component';
import { EditStudentComponentComponent } from './get-all-student-component/edit-student-component/edit-student-component.component';
import { CommonModule } from '@angular/common';
import { LottieModule } from 'ngx-lottie';
import { NotFoundComponent } from './not-found/not-found.component';

export function playerFactory(){
  return import('lottie-web');
}
@NgModule({
  declarations: [
    AppComponent,
    NavComponentComponent,
    BodyComponentComponent,
    FooterComponentComponent,
    SortPipe,
    HomeComponentComponent,
    AddStudentComponentComponent,
    GetAllStudentComponentComponent,
    BalanceComponentComponent,
    ClearedComponentComponent,
    StudentComponentComponent,
    EditStudentComponentComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    [LottieModule.forRoot({player: playerFactory})]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
