import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';
import * as pouchdbFind from 'pouchdb-find';

@Injectable()
export class PouchdbService {
	private _localdb: string = "http://localhost:3000/main" ;
	private _pouchDb: any;
	public query: any;
	public query_err: any;
   
  constructor() {
	this._pouchDb = new PouchDB(this._localdb);
	PouchDB.plugin(pouchdbFind);
	
	this.createIndexes();
  }
  
  private createIndexes() {
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
  
  public getAllArticles() {
	return this._pouchDb.find({
		selector: { date: { '$gt': null }},
		sort: [{'date':"asc"}]
	}).docs;
  }
}

