import { Article } from '@reibo-shopping-list/api-interface';
import { JoinColumn, ManyToOne } from 'typeorm';

export interface ShopListItem {
  id: number;
  article: Article;
  quantity: number;
}
