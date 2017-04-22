import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute }   from '@angular/router';

import { Article } from '../../models/article';
import { InterModuleService } from '../../service/inter-module.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {
	
  private article: Article;

  constructor( private route: ActivatedRoute, private interModuleService: InterModuleService ) { }

  ngOnInit(): void {
	this.route.data
		.subscribe((data: { article: Article } ) => {
			this.interModuleService.articleSubject.next(data.article);
		});
		
    this.interModuleService.article.take(1)
		.subscribe((data) => {
			this.article = data;
			console.log(this.article);
			console.log(this.article.attachments['toc']);
			console.log(this.article.attachments['toc']['data']);
			this.interModuleService.sidenavToc.nativeElement['innerHTML'] = data.toc;
		});
  }
}
