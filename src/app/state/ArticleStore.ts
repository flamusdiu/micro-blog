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

    public articles() {
        return this._articles.asObservable();
    }

    private _loadInitialData() {
        this.pouchdbService.getAllArticles()
            .subscribe(
                res => {
                    let articles = (<Object[]>res).map((article: any) =>
                        new Article({id:article._id, description:article.description,title: article.title, attachments: article._attachments}));

                    this._articles.next(articles);
                },
                err => console.log("Error retrieving Articles")
            );

		console.log(this._articles);
    }	
}