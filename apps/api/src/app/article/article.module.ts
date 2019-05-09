import { Module } from '@nestjs/common';
import { ArticleService } from './service/article.service';
import { ArticleController } from './controller/article.controller';
import { ArticleRepositoryModule } from './repository';

@Module({
  imports: [ArticleRepositoryModule],
  controllers: [ArticleController],
  providers: [ArticleService]
})
export class ArticleModule {
}
