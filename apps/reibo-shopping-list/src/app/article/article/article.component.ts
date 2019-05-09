import { Component } from '@angular/core';
import { ArticleService } from '../../services/article/article.service';
import { ShopListService } from '../../services/shop-list/shop-list.service';
import { Article } from '@reibo-shopping-list/api-interface';

@Component({
  selector: 'reibo-shopping-list-article',
  template: `
    <mat-card *ngFor="let article of articles$ | async ">
      <mat-card-header>{{article.name}}</mat-card-header>
      <img mat-card-image [src]="article.image">
      <mat-card-actions>
        <button mat-button (click)="addToMyList(article)">Add to my list</button>
      </mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  articles$ = this.articleService.findArticle();

  constructor(private readonly articleService: ArticleService,
              private readonly shopListService: ShopListService) {
  }

  addToMyList(article: Article){
    this.shopListService.addArticle(article);
  }

}
