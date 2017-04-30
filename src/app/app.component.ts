import { ElementRef,
		 AfterViewInit,
		 Component,
		 ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material';

import { InterModuleService } from './service/inter-module.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('sidenav') public sidenav: MdSidenav;
  @ViewChild('sidenavToc') public sidenavToc: ElementRef;
  
  constructor(private interModuleService: InterModuleService) {
  }
  
  ngAfterViewInit() {
	  this.interModuleService.sidenav = this.sidenav;
	  this.interModuleService.sidenavToc = this.sidenavToc;
  }
}
