import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import * as PouchDB from 'pouchdb';
import * as pouchdbFind from 'pouchdb-find';

@Injectable()
export class PouchdbService {
	private _localdb: string = "http://localhost:3000/main" ;
	private _pouchDb: any;
   
  constructor() {
	this._pouchDb = new PouchDB(this._localdb);
	PouchDB.plugin(pouchdbFind);
	
	this.createIndexes();
  }
  
  private createIndexes(): void {
	this._pouchDb.createIndex({
		index: {
			fields: [ 'keywords' ]
		}
	});
	
	this._pouchDb.createIndex({
		index: {
			fields: [ 'date' ]
		}
	})
	
	this._pouchDb.createIndex({
		index: {
			fields: [ 'title' ]
		}
	});
  }
  
  public getAllArticles(): Observable<any> {
	return Observable.fromPromise (this._pouchDb.find({
			selector: { date: { '$gt': null }},
			sort: [{date:"asc"}]
		}).then ( (res) => {
			return res.docs;
		}));
  }
  
  public getArticle(id: string): Promise<any> {
	  return this._pouchDb.find({
		  selector: {_id: id }
	  });
  }
  
  public getAttachment (id: string, attachment: string): Promise<any> {
	  return this._pouchDb.getAttachment(id,attachment);
  }
}

