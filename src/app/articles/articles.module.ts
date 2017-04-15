import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule  } from '../app-material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ArticleRoutingModule } from './articles-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

import { PouchdbService } from '../service/pouchdb.service';

@NgModule({
  imports: [
    CommonModule,
	FlexLayoutModule,
	AppMaterialModule,
	ArticleRoutingModule
  ],
  declarations: [
	ArticleListComponent,
	ArticleDetailComponent
  ],
  providers: [
	PouchdbService
  ]
})
export class ArticlesModule { }
