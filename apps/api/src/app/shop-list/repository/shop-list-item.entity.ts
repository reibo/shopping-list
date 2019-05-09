import { Article, ShopListItem } from '@reibo-shopping-list/api-interface';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ArticleEntity } from '../../article/repository/article.entity';
import { ShopListEntity } from './shop-list.entity';
import { insert } from '@nrwl/schematics/src/utils/ast-utils';

@Entity('shop-list-item')
export class ShopListItemEntity implements ShopListItem {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(type => ArticleEntity)
  @JoinColumn({ name: 'article_id' })
  article: Article;
  @Column()
  quantity: number;

  @ManyToOne(type => ShopListEntity, { nullable: false, cascade: ['insert'], eager: false })
  @JoinColumn({ name: 'shop_list_id' })
  shopList: ShopListEntity;
}
