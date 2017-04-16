import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';

import { Article } from '../../models/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
	
  private article: any;

  constructor( private route: ActivatedRoute ) { }

  ngOnInit(): void {
	this.route.data
		.subscribe((data: { article: Article } ) => {
			this.article = data.article;
		})
  }
}
