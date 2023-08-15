import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { BASE_URL } from 'src/app/config/config';
import { SurveyResponse } from '../../models/responseSurvey.model';
@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }
  send(surveyResponse: SurveyResponse[]): Observable<SurveyResponse[]> {
    return this.http.post(`${BASE_URL}surveypb/create`, surveyResponse).pipe(
      map((resp: any) => resp),
      catchError(e => {
        console.error('ERROR', e.error);
        Swal.fire(e.error.header, e.error.message, 'error');
        return throwError(() => e);
      })
    );
  }

  getSurveyById(surveyId: number): Observable<any> {
    const url = `${BASE_URL}surveypb/${surveyId}`;
    return this.http.get<any>(url).pipe(
      map((resp: any) => resp),
      catchError(e => {
        console.error('ERROR', e.error);
        Swal.fire(e.error.header, e.error.message, 'error');
        return throwError(() => e);
      })
    );
  }
}
