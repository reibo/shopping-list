import { Module } from '@nestjs/common';
import { ShopListController } from './controller/shop-list.controller';
import { ShopListService } from './service/shop-list.service';
import { ShopListRepositoryModule } from './repository/shop-list-repository.module';

@Module({
  imports: [ShopListRepositoryModule],
  controllers: [ShopListController],
  providers: [ShopListService]
})
export class ShopListModule {
}
