import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { InterModuleService } from '../service/inter-module.service'

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {  
  private changeMenuIcon: boolean = false;
  
  constructor(private router: Router, private interModuleService: InterModuleService) {
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
