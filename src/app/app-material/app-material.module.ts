import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MdToolbarModule,
	MdCardModule,
	MdInputModule,
	MdIconModule,
	MdSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
	MdToolbarModule,
	MdCardModule,
	MdIconModule,
	MdInputModule,
	MdSidenavModule
  ],
  declarations: [],
  exports: [
	MdInputModule, 
	MdCardModule, 
	MdToolbarModule,
	MdIconModule,
	MdSidenavModule
  ]
})
export class AppMaterialModule { }
