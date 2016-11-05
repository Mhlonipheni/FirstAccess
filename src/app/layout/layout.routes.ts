import { Routes, RouterModule }  from '@angular/router';
import { Layout } from './layout.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Layout, children: [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'login', loadChildren: () => System.import('../login/login.module') },
    { path: 'signup', loadChildren: () => System.import('../signup/signup.module') },
    { path: 'dashboard', loadChildren: () => System.import('../dashboard/dashboard.module') },
    { path: 'another-page', loadChildren: () => System.import('../another/another.module') },
    { path: 'deals', loadChildren: () => System.import('../deals/deals.module') },
    { path: 'about', loadChildren: () => System.import('../about/about.module') },
    { path: 'faq', loadChildren: () => System.import('../faq/faq.module') },
    { path: 'privacy-policy', loadChildren: () => System.import('../privacy-policy/privacy-policy.module') },
    { path: 'contact', loadChildren: () => System.import('../contact/contact.module') },
    { path: 'restauranteur', loadChildren: () => System.import('../restaurateurs/restaurateur.module')},
    { path: 'restaurant-approval', loadChildren: () => System.import('../restaurateurs/restaurant-approval.module')},
    { path: 'restaurantuersuccess', loadChildren: () => System.import('../restaurateurs/restaurantuer-success.module') }

  ]}
];

export const ROUTES = RouterModule.forChild(routes);
