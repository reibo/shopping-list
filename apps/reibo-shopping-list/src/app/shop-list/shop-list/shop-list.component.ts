import { Component } from '@angular/core';
import { ShopListService } from '../../services/shop-list/shop-list.service';

@Component({
  selector: 'reibo-shopping-list-shop-list',
  template: `
    <mat-card>
      <mat-card-header>My shopping list</mat-card-header>

      <mat-list>
        <ng-container *ngFor="let item of (shopList$ | async)?.items">
          <mat-list-item>
            {{item.article.name}} {{item.quantity}}
          </mat-list-item>
          <mat-divider></mat-divider>
        </ng-container>
      </mat-list>
      <mat-card-actions></mat-card-actions>
    </mat-card>
  `,
  styleUrls: ['./shop-list.component.scss']
})
export class ShopListComponent {
  shopList$ = this.shopListService.getList();

  constructor(private readonly shopListService: ShopListService) {
  }


}
