import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { ArticleStore } from '../../state/ArticleStore';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
	
  private article: Article;

  constructor( private route: ActivatedRoute, private articleStore: ArticleStore ) { }

  ngOnInit(): void {
	this.route
		.queryParamMap
		.map((paramMap => paramMap.get('id') || 'None'))
		.switchMap((id: string) => this.articleStore.getArticle(id))
		.subscribe((article: Article) => {
			this.article = new Article(article);
		});
	}
}
