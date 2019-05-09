import { Injectable } from '@angular/core';
import { AddToMyList, Article, ROUTES, ShopList } from '@reibo-shopping-list/api-interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopListService {

  constructor(private readonly http: HttpClient) {
  }

  addArticle(article: Article) {
    const body: AddToMyList = { articleId: article.id };
    this.http.post(ROUTES.shopList, body).pipe(
      take(1)
    ).subscribe();
  }

  getList(): Observable<ShopList> {
    return this.http.get<ShopList>(ROUTES.shopList);
  }
}
