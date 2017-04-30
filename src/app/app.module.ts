import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app-material';
import { ArticlesModule } from './articles';
import { NavModule } from './nav';

import { InterModuleService } from './service/inter-module.service'

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
	PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	BrowserAnimationsModule,
	AppMaterialModule,
	ArticlesModule,
	NavModule,
	AppRoutingModule
  ],
  providers: [InterModuleService],
  bootstrap: [AppComponent]
})
export class AppModule {}
