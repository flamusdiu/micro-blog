import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent }    from './article-list/article-list.component';
import { ArticleDetailComponent }  from './article-detail/article-detail.component';

const articleRoutes: Routes = [
  { path: 'articles',  component: ArticleListComponent },
  { path: 'article/:id', component: ArticleDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ArticleRoutingModule { }
