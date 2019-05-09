import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article, ROUTES } from '@reibo-shopping-list/api-interface';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) {
  }

  findArticle(term: string = ''): Observable<Article[]> {
    const params: any = {
      q: term,
      page: 1,
      limit: 20
    };
    return this.http.get<Article[]>(ROUTES.article, { params });
  }
}
