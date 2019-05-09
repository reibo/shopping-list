import { ShopListItem } from '@reibo-shopping-list/api-interface';

export interface ShopList {
  id: number;
  items: ShopListItem[];
  date: Date;
}
