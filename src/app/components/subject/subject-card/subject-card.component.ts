import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Subject } from 'src/app/common/models/subject.model';
import { Teacher } from 'src/app/common/models/teacher.model';
import { SubjectService } from 'src/app/common/services/subject.service';
import { TeacherService } from 'src/app/common/services/teacher.service';

@Component({
  selector: 'sm-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.scss']
})
export class SubjectCardComponent implements OnInit {

  subjects: Observable<Subject[]> = this.subjectService.getSubjects();

  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void { }
}
