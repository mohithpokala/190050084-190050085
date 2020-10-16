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
        console.log('error caught in service')
        console.error(err);

        //Handle the error here

        return throwError(err);    //Rethrow it back to component
        alert('Failed to get data');
      }
      ));
  }

  post(message:string): Observable<any> {
    //return this.http.post<any>('https://cs251-outlab-6.herokuapp.com/add_new_feedback/', message, this.httpOptions);
    return this.http.post('https://cs251-outlab-6.herokuapp.com/add_new_feedback/', message).pipe(
      catchError((err) => {
        console.log('error caught in service')
        console.error(err);

        //Handle the error here
        alert('Invalid data!! :-(');
        return throwError(err);    //Rethrow it back to component
        
      }
      ));;
  }
}