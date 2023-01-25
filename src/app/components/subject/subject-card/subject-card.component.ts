import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ScheduledClass } from 'src/app/common/models/scheduledClass.model';
import { Subject } from 'src/app/common/models/subject.model';
import { ScheduledClassService } from 'src/app/common/services/scheduledClass.service';
import { SubjectService } from 'src/app/common/services/subject.service';

@Component({
  selector: 'sm-subject-card',
  templateUrl: './subject-card.component.html',
  styleUrls: ['./subject-card.component.scss']
})
export class SubjectCardComponent implements OnInit {

  subjects: Observable<Subject[]> = this.subjectService.getSubjects();
  scheduledClasses: ScheduledClass[] | undefined;

  constructor(private subjectService: SubjectService, private scheduledClassService: ScheduledClassService) { }

  ngOnInit(): void { }

  onExpansionPanelExpand(expandedSubject: Subject): void {
    this.scheduledClassService.getScheduledClassesOf(expandedSubject.id)
      .subscribe(data => this.scheduledClasses = data)
  }
}
