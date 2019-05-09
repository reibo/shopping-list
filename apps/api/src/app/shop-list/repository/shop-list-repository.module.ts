import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShopListItemEntity } from './shop-list-item.entity';
import { ShopListEntity } from './shop-list.entity';
import { ShopListRepository } from './shopListRepository';
import { ShopListItemRepository } from './shopListItemRepository';

@Module({
  imports: [TypeOrmModule.forFeature([
    ShopListItemEntity,
    ShopListEntity,
    ShopListRepository,
    ShopListItemRepository
  ])],
  exports: [TypeOrmModule]
})
export class ShopListRepositoryModule {
}
