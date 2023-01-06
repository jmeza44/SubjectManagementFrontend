import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SubjectComponent } from './subject.component';



@NgModule({
  declarations: [
    SubjectComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SubjectComponent
  ]
})
export class SubjectModule { }
