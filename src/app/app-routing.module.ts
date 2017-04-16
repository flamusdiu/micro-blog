import { NgModule }              from '@angular/core';
import { PreloadAllModules, RouterModule, Routes }  from '@angular/router';

import { PageNotFoundComponent } from './not-found.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/articles', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
