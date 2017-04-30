import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleStore } from '../../state/ArticleStore';



@Component({
  selector: 'app-articles-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {
  
	constructor( private router: Router, private articleStore: ArticleStore ) {
	}

	ngOnInit(): void { }

	goToArticle(article): void {
	  this.router.navigate(['/article', article.id]);
	}

	getCover(article): String {
		if (article.attachments['cover']) {
			const content_type = article.attachments['cover']['content_type'];
			const data = article.attachments['cover']['data'];
			
			return "data:" + content_type + ";base64," + data;
		} else {
			return "http://loremflickr.com/400/200/technology,telephone/all"
		}
	}
	
}