import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCardComponent } from './subject-card/subject-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddSubjectFormComponent } from './add-subject-form/add-subject-form.component'



@NgModule({
  declarations: [
    SubjectCardComponent,
    AddSubjectFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SubjectCardComponent
  ]
})
export class SubjectModule { }
