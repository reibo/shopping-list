import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ShopListRepository } from '../repository/shopListRepository';
import { ShopListEntity } from '../repository/shop-list.entity';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Observable } from 'rxjs';
import { ShopList } from '@reibo-shopping-list/api-interface';
import { map, mapTo } from 'rxjs/operators';
import { ShopListItemEntity } from '../repository/shop-list-item.entity';
import { ShopListItemRepository } from '../repository/shopListItemRepository';

@Injectable()
export class ShopListService {
  constructor(@InjectRepository(ShopListEntity)
              private readonly shopListRepository: ShopListRepository,
              @InjectRepository(ShopListItemEntity)
              private readonly shopListItemRepository: ShopListItemRepository) {

  }

  find(): Observable<ShopList> {
    return fromPromise(this.shopListRepository.findOneOrFail({
      relations: ['items', 'items.article']
    }));
  }

  addArticle(articleId: number) {
    return this.find().pipe(
      map(shopList => this.shopListItemRepository.insert({
        article: { id: articleId },
        quantity: 1,
        shopList
      } as Partial<ShopListItemEntity>)),
      mapTo(undefined)
    );
  }
}
