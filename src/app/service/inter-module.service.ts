import { ElementRef, Injectable } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { Article } from '../models/article';

@Injectable ()
export class InterModuleService {
	public articleSubject: BehaviorSubject<Article> = new BehaviorSubject<Article>(null);
	public article: Observable<Article>  = this.articleSubject.asObservable();
  
	public sidenav: MdSidenav;
	public sidenavToc: ElementRef;
}