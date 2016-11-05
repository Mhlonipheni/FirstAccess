import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { ContactPage } from './contact.component.ts';

export const routes = [
  { path: '', component: ContactPage, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [ ContactPage ]
})
export default class AnotherModule {
  static routes = routes;
}
