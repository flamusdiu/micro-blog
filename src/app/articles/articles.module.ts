import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule  } from '../app-material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MarkdownModule } from 'angular2-markdown';

import { SafeHtmlPipe } from './safe-html.pipe';
import { SafeStylePipe } from './safe-style.pipe';

import { ArticleRoutingModule } from './articles-routing.module';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

import { PouchdbService } from '../service/pouchdb.service';
import { ArticleStore } from '../state/ArticleStore';

@NgModule({
  imports: [
    CommonModule,
	FlexLayoutModule,
	AppMaterialModule,
	MarkdownModule.forRoot(),
	ArticleRoutingModule
  ],
  declarations: [
	ArticleListComponent,
	ArticleDetailComponent,
	SafeHtmlPipe,
	SafeStylePipe
	],
  providers: [
	PouchdbService, ArticleStore
  ]
})
export class ArticlesModule { }
