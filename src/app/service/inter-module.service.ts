import { ElementRef, Injectable } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { AsyncSubject } from 'rxjs/AsyncSubject';

import { Article } from '../models/article';

@Injectable ()
export class InterModuleService {
	public article: AsyncSubject<Article> = new AsyncSubject();
  
	public sidenav: MdSidenav;
	public sidenavToc: ElementRef;	
}