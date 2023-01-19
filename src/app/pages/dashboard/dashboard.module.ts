import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectModule } from 'src/app/components/subject/subject.module';
import { DashboardComponent } from './dashboard.component';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SubjectModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
