import { Controller, Get , Query } from '@nestjs/common';
import { ArticleService } from '../service/article.service';
import { Article, PaginationOptions } from '@reibo-shopping-list/api-interface';
import { Observable } from 'rxjs';
import { Pagination } from '../../utils/pagination';

@Controller('article')
export class ArticleController {
  constructor(private articleService: ArticleService) { }

  @Get()
  searchArticle(@Query('q') q: string,
                @Pagination() pagination: PaginationOptions): Observable<Article[]>{
   return this.articleService.search(q, pagination);
  }
}
