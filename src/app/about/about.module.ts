import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { AboutPage } from './about.component.ts';

export const routes = [
    { path: '', component: AboutPage, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [AboutPage ]
})
export default class AboutModule {
  static routes = routes;
}
