import {Injectable} from "@angular/core";
import {PouchdbService} from "../service/pouchdb.service";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {Article} from "../models/article";
import {BehaviorSubject} from "rxjs/Rx";

@Injectable()
export class ArticleStore {

    private _articles: BehaviorSubject<Array<Article>> = new BehaviorSubject(Array<Article>());

    constructor(private pouchdbService: PouchdbService) {
        this._loadInitialData();
    }

    public articles(): Observable<Article[]> {
        return this._articles.asObservable();
    }

    private _loadInitialData(): void {
        this.pouchdbService.getAllArticles()
            .subscribe(
                res => {
                    let articles = (<Object[]>res).map((article: any) =>
                        new Article(article));

                    this._articles.next(articles);
                },
                err => console.log("Error retrieving Articles")
            );
    }
	
	public getArticle (id: string): Promise<any> {
		return this.pouchdbService.getArticle(id);
	}
	
	public getAttachment(id: string, attachment: string): Promise<any>{
		return this.pouchdbService.getAttachment(id,attachment);
	}
}