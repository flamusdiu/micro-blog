import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { MdSidenav } from '@angular/material';

import { InterModuleService } from '../service/inter-module.service'

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private changeMenuIcon: boolean = false;
  
  constructor(private router: Router, public interModuleService: InterModuleService) {
  }
  

  ngOnInit() {  
    this.router.events.subscribe( (event) => {
		if(event instanceof NavigationStart) {
			if (!(event.url == "/" || event.url == "/articles")) {
				this.changeMenuIcon = true;
				this.interModuleService.sidenav.open();
			} else {
				this.changeMenuIcon = false;
				this.interModuleService.sidenav.close();
			}
		}
	});
  }
  
  goToArticles(): void {
	  this.router.navigate(['/articles']);
  }
}
