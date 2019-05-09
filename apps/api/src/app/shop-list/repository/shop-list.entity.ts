import { ShopList } from '@reibo-shopping-list/api-interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ShopListItemEntity } from './shop-list-item.entity';

@Entity('shop-list')
export class ShopListEntity implements ShopList {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  date: Date;
  @OneToMany(type => ShopListItemEntity, item => item.shopList)
  items: ShopListItemEntity[];

}
