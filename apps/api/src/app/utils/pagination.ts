import { createParamDecorator , Request} from '@nestjs/common';
import { PaginationOptions } from '@reibo-shopping-list/api-interface';

export const Pagination = createParamDecorator((data, req): PaginationOptions => {
  const {page, limit} = req.query;
  return {page, limit};
});
