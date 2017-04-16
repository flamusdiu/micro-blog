import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleListComponent }    from './article-list/article-list.component';
import { ArticleDetailComponent }  from './article-detail/article-detail.component';
import { ArticleDetailResolver } from './article-detail/article-detail-resolver.service';

const articleRoutes: Routes = [
  { path: 'articles',  
	component: ArticleListComponent },
  { path: 'article/:id', 
	component: ArticleDetailComponent,            
	resolve: {
		article: ArticleDetailResolver
    } 
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(articleRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
	ArticleDetailResolver
  ]
})
export class ArticleRoutingModule { }
