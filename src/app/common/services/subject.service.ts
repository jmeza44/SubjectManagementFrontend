import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subject } from '../models/subject.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  getSubjects(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(`${this.baseUrl}/Subject` )
      .pipe(catchError(err => { throw err }));
  }

  getSubjectsWithScheduledClasses(): Observable<Subject[]> {
    return this.httpClient.get<Subject[]>(`${this.baseUrl}/SubjectWithScheduledClasses` )
      .pipe(catchError(err => { throw err }));
  }
}
