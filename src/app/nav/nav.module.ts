import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule  } from '../app-material';

import  { NavComponent } from './nav.component';

@NgModule({
  imports: [
    CommonModule,
	AppMaterialModule
  ],
  declarations: [
	NavComponent
  ],
  exports: [
	NavComponent
  ]
})
export class NavModule { }
