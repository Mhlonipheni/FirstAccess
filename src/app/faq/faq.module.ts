import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { FaqPage } from './faq.component.ts';

export const routes = [
    { path: '', component: FaqPage, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [FaqPage ]
})
export default class FaqModule {
  static routes = routes;
}
