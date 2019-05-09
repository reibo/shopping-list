import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article/article.component';
import { RouterModule } from '@angular/router';
import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule.forChild([{
      path: '',
      component: ArticleComponent
    }])
  ],
  declarations: [ArticleComponent],
  providers: [],
  exports: []
})
export class ArticleModule {
}
