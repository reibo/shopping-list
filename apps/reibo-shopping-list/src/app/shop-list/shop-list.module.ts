import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopListComponent } from './shop-list/shop-list.component';
import { RouterModule } from '@angular/router';
import { MatCardModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [ShopListComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    RouterModule.forChild([{
      path: '',
      component: ShopListComponent
    }]),
    MatCardModule
  ]
})
export class ShopListModule {
}
