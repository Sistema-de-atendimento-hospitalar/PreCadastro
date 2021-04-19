import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*',
   }
  )
};

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private API_URL: string = "http://localhost:8080/v1/paciente";

  constructor(private http: HttpClient) { }

  verifyPacienteFromCpf(cpf: string) {
    return this.http.get<any>(`${this.API_URL}/cpf/${cpf}`, httpOptions)
      .subscribe(results => results);

      // .pipe(
      //   tap(paciente => console.log(paciente)),
      //   catchError(err => this.handleError('verifyPacienteFromCpf', err))
      // );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
