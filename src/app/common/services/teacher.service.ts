import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiResponse } from '../models/api-response.model';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private baseUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

  getTeacher(id: number): Observable<ApiResponse<Teacher>> {
    return this.httpClient.get<ApiResponse<Teacher>>(`${this.baseUrl}/Teacher/${id}` )
      .pipe(catchError(err => { throw err }));
  }
}
