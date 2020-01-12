import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators/';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articleListAPI    = 'http://banglabox.net/api/articles';
  // private articleListAPI    = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAllArticles(): Observable<any>{
    return this.http.get(this.articleListAPI).pipe(
      // map(data => {
      //   // let resData = JSON.parse(data);
      //   console.log(typeof data, data);

      // }),
      catchError(this.errorHandler)
    );
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
