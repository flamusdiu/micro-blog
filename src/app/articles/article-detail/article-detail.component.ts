import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Article } from '../../models/article';
import { ArticleStore } from '../../state/ArticleStore';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
	
  private article: any;

  constructor( private route: ActivatedRoute, private articleStore: ArticleStore) { }

  ngOnInit(): void {
	this.route.data
		.subscribe((data: { article: Article } ) => {
			this.article = data.article;
		})
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
