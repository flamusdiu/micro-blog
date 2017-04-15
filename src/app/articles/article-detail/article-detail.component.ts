import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
	
  @Input() article;

  constructor( private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
	/*this.route.params
		.switchMap((params: Params) => this.article = this.databaseService.getArticle(params['id']))
		.subscribe((article) => this.article = article);*/
	}
}
