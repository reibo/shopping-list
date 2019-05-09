import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ArticleEntity } from './article.entity';
import { ArticleRepository } from './article.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity, ArticleRepository])],
  exports: [TypeOrmModule],
})
export class ArticleRepositoryModule {}
