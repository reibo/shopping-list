import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from '@reibo-shopping-list/api-interface';

@Entity('article')
export class ArticleEntity implements Article {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  image: string;
}
