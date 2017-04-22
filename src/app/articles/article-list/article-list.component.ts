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
}