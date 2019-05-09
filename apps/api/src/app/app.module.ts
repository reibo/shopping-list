import { Module } from '@nestjs/common';
import { ShopListModule } from './shop-list/shop-list.module';
import { environment } from '../environments/environment';
import { articleEntities } from './article/repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleModule } from './article/article.module';
import { shopListEntities } from './shop-list/repository';

const entities = [...articleEntities,
  ...shopListEntities];

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...environment.db,
      entities,
      synchronize: true,
      entityPrefix: 'shopping_',
      logging: false
    } as any),
    ShopListModule,
    ArticleModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}
