import { Injectable } from '@nestjs/common';
import { Article, PaginationOptions } from '@reibo-shopping-list/api-interface';
import { ArticleRepository } from '../repository/article.repository';
import { fromPromise } from 'rxjs/internal-compatibility';
import { Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArticleService {

  constructor(
    @InjectRepository(ArticleRepository)
    private readonly articleRepository: ArticleRepository) {
  }


  search(q: string, pagination: PaginationOptions): Observable<Article[]> {
    return  fromPromise(this.articleRepository.find({
      where: q && q.length ? `name like '%${q}%'`: '',
      skip: (pagination.page - 1) * pagination.limit,
      take: pagination.limit
    }));
  }
}
