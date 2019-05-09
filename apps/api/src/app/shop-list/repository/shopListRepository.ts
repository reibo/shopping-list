import { EntityRepository, Repository } from 'typeorm';
import { ShopListEntity } from './shop-list.entity';

@EntityRepository(ShopListEntity)
export class ShopListRepository extends Repository<ShopListEntity> {

}
