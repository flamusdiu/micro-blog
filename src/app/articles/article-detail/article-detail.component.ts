import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

import { MarkdownService } from 'angular2-markdown';

import { Article } from '../../models/article';
import { ArticleStore } from '../../state/ArticleStore';

import { ArticleStore } from '../../state/ArticleStore';
import { InterModuleService } from '../../service/inter-module.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
	
  private _cover: string;
  private _text: string;
  private _toc: string;
  private _title: string;

  constructor( private route: ActivatedRoute, 
			   private articleStore: ArticleStore,
		     private interModuleService: InterModuleService,
			   private mdService: MarkdownService ) { }

  ngOnInit(): void {
	this.interModuleService.article
		.subscribe((data) => {
			let article: Article = data;
			this._cover = article.cover;
			this._title = article.title;
			
			Promise.all(Object.keys(article['attachments']).map((at) => {
				return this.articleStore.getAttachment(article['id'],at).then ((res) => {
					article.attachments[at]['data'] = res.toString();
			    })
				
			})).then(()=> {
				this._text = this.mdService.compile(article.text);
				this._toc = this.mdService.compile(article.toc)
				this.interModuleService.sidenavToc.nativeElement['innerHTML'] = this._toc;
			});
			
		});
	this.route.data
		.subscribe((data: { article: Article } ) => {
			this.interModuleService.article.next(data.article);
			this.interModuleService.article.complete();
		});
  }
  
  getCover(): String {
		if (this.article.attachments['cover']) {
			const content_type = this.article.attachments['cover']['content_type'];
			const data = this.article.attachments['cover']['data'];
			
			return "data:" + content_type + ";base64," + data;
		} else {
			return "http://loremflickr.com/400/200/technology,telephone/all"
		}
	}
	
	getText(): Promise<String> {		
		return this.articleStore.getArticleAttachment(this.article.id,'index.md').then((doc) => {
			return doc.toString();
		});
	}
}
