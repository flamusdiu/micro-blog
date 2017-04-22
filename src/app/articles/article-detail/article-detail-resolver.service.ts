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
        let new_article = new Article(article);
		
		Promise.all(Object.keys(new_article['attachments']).map((at) => {
				return this.articleStore.getAttachment(new_article['id'],at).then ((res) => {
					new_article.attachments[at]['data'] = res.toString();
				});
		})).then(() =>  {		
			if (new_article['attachments'].hasOwnProperty('toc')) {
				new_article.toc = new_article['attachments']['toc']['data'];
			}
		})
		
		return new_article;
		
      } else { // id not found
        this.router.navigate(['/articles']);
        return null;
      }
    });
  }
}
