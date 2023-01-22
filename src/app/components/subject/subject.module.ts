import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCardComponent } from './subject-card/subject-card.component';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    SubjectCardComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [
    SubjectCardComponent
  ]
})
export class SubjectModule { }
