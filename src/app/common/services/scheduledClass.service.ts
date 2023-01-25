import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ScheduledClass } from '../models/scheduledClass.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduledClassService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  getScheduledClassesOf(subjectId: number): Observable<ScheduledClass[]> {
    return this.httpClient.get<ScheduledClass[]>(`${this.baseUrl}/ScheduledClass/Subject/${subjectId}`)
      .pipe(catchError(err => { throw err }));
  }
}
