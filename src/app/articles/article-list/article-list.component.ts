import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Article } from '../../models/article';
import { PouchdbService } from '../../service/pouchdb.service';



@Component({
  selector: 'app-articles-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  public articles: Observable<Article[]>;
  public query_err:Boolean = false;
  
  constructor( private router: Router, private _db: PouchdbService ) {
  }

  ngOnInit(): void {
	  this.getAllArticles();
  }
  
  getAllArticles() {
	  this.articles = this._db.getAllArticles();
  }

  goToArticle(article): void {
	  let articleid = article ? article._id : null;
	  
	  this.router.navigate(['/article', articleid]);
  }
}