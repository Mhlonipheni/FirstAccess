import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { RouterModule } from '@angular/router';
import { DealsPage } from './deals.component.ts';

export const routes = [
    { path: '', component: DealsPage, pathMatch: 'full' }
];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes) ],
  declarations: [DealsPage ]
})
export default class DealsModule {
  static routes = routes;
}
