import { EntityRepository, Repository } from 'typeorm';
import { ShopListEntity } from './shop-list.entity';
import { ShopListItemEntity } from './shop-list-item.entity';

@EntityRepository(ShopListItemEntity)
export class ShopListItemRepository extends Repository<ShopListItemEntity> {

}
