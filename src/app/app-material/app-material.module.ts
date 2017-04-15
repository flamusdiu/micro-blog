import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MdToolbarModule,
	MdCardModule,
	MdInputModule,
	MdIconModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
	MdToolbarModule,
	MdCardModule,
	MdIconModule,
	MdInputModule
  ],
  declarations: [],
  exports: [
	MdInputModule, 
	MdCardModule, 
	MdToolbarModule,
	MdIconModule
  ]
})
export class AppMaterialModule { }
