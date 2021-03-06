import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators/';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articleListAPI    = 'https://banglabox.net/api/articles';
  // private articleListAPI    = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getAllArticles(page : number): Observable<any>{
    return this.http.get(this.articleListAPI + '?page=' + page).pipe(
      catchError(this.errorHandler)
    );
  }

  getArticle(id): Observable<any>{
    let singleArticleAPI = this.articleListAPI + '/' + id;
    return this.http.get(singleArticleAPI).pipe(
      catchError(this.errorHandler)
    );
  }

  getCategories(): Observable<any>{
    let categoryAPI = 'https://banglabox.net/api/categories';
    return this.http.get(categoryAPI).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error : HttpErrorResponse){
    return throwError(error.message || "Server Error");
  }
}
