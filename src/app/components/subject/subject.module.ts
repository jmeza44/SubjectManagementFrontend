import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCardComponent } from './subject-card/subject-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SubjectCardComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatIconModule
  ],
  exports: [
    SubjectCardComponent
  ]
})
export class SubjectModule { }
