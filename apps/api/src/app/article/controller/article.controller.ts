import { Controller, Get , Query } from '@nestjs/common';
import { ArticleService } from '../service/article.service';
import { Article, PaginationOptions, ROUTES } from '@reibo-shopping-list/api-interface';
import { Observable } from 'rxjs';
import { Pagination } from '../../utils/pagination';

@Controller(ROUTES.article)
export class ArticleController {
  constructor(private articleService: ArticleService) { }

  @Get()
  searchArticle(@Query('q') q: string,
                @Pagination() pagination: PaginationOptions): Observable<Article[]>{
   return this.articleService.search(q, pagination);
  }
}
