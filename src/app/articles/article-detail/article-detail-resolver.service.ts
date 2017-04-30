import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Article } from '../../models/article';
import { ArticleStore } from '../../state/ArticleStore';


@Injectable()
export class ArticleDetailResolver implements Resolve<Article> {
	
  constructor(private articleStore: ArticleStore, private router: Router) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Article> {
	  
    let id = route.params['id'];
    
	return this.articleStore.getArticle(id).then(article => {
      if (article) {
		return new Article(article);
		
      } else { // id not found
        this.router.navigate(['/articles']);
        return null;
      }
    });
  }
}
