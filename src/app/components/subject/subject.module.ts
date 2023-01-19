import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCardComponent } from './subject-card/subject-card.component';



@NgModule({
  declarations: [
    SubjectCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubjectCardComponent
  ]
})
export class SubjectModule { }
