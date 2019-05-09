import { Body, Controller, Get, Post, Put } from '@nestjs/common';
import { AddToMyList, ROUTES, ShopList } from '@reibo-shopping-list/api-interface';
import { ShopListService } from '../service/shop-list.service';
import { Observable } from 'rxjs';

@Controller(ROUTES.shopList)
export class ShopListController {
  constructor(private readonly shopListService: ShopListService) {

  }

  @Get()
  getShoppingList(): Observable<ShopList> {
    return this.shopListService.find();
  }
  @Post()
  addToMyList(@Body() data: AddToMyList): Observable<any> {
    return this.shopListService.addArticle(data.articleId);
  }
}
