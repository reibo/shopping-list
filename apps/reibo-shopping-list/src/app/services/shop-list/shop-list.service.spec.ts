import { TestBed } from '@angular/core/testing';

import { ShopListService } from './shopping-list.service';

describe('ShoppingListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopListService = TestBed.get(ShopListService);
    expect(service).toBeTruthy();
  });
});
