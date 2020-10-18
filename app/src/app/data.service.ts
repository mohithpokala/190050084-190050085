import { Injectable, ValueSansProvider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  title = 'image-gallery';
  private data;
  constructor(private http: HttpClient) {
    
  }
  
  get():Observable<any>{
    const url ='https://cs251-outlab-6.herokuapp.com/initial_values/';
    return this.http.get(url).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      }
      ));
  }

  post(message:string): Observable<any> {
    return this.http.post('https://cs251-outlab-6.herokuapp.com/add_new_feedback/', message).pipe(
      catchError((err) => {

        alert('Invalid data!! :-(');
        return throwError(err); 
      }
      ));
  }
}