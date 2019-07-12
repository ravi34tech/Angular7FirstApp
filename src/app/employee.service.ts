import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from './employee';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};


@Injectable({providedIn: 'root'})
export class EmployeeService {
  url = "http://localhost:2222/emp";
  constructor(private http: HttpClient) {
    
   }
 
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  save(emp:Employee):Observable<Employee>{
    console.info("service ----> "+emp.name);
    return this.http.post<Employee>(this.url+"/save",emp,httpOptions);
  }

  findAll():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.url+"/getAll",httpOptions);
  }

}


