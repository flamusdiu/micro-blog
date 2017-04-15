import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Article } from '../../models/article';
//import { PouchdbService } from '../pouchdb-service/pouchdb.service';



@Component({
  selector: 'app-articles-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  private articles: Observable<Article[]>;
  
  constructor( private router: Router ) {
  }

  ngOnInit(): void {
  }

  goToArticle(article): void {
	  let articleid = article ? article._id : null;
	  
	  this.router.navigate(['/article', articleid]);
  }
}