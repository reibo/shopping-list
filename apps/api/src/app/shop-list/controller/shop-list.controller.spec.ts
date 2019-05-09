import { Test, TestingModule } from '@nestjs/testing';
import { ShopListController } from './shop-list.controller';

describe('ShopList Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ShopListController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: ShopListController = module.get<ShopListController>(ShopListController);
    expect(controller).toBeDefined();
  });
});
