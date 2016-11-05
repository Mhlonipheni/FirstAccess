"use strict";
var router_1 = require('@angular/router');
var layout_component_1 = require('./layout.component');
// noinspection TypeScriptValidateTypes
var routes = [
    { path: '', component: layout_component_1.Layout, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'login', loadChildren: function () { return System.import('../login/login.module'); } },
            { path: 'signup', loadChildren: function () { return System.import('../signup/signup.module'); } },
            { path: 'dashboard', loadChildren: function () { return System.import('../dashboard/dashboard.module'); } },
            { path: 'another-page', loadChildren: function () { return System.import('../another/another.module'); } },
            { path: 'deals', loadChildren: function () { return System.import('../deals/deals.module'); } },
            { path: 'about', loadChildren: function () { return System.import('../about/about.module'); } },
            { path: 'faq', loadChildren: function () { return System.import('../faq/faq.module'); } },
            { path: 'privacy-policy', loadChildren: function () { return System.import('../privacy-policy/privacy-policy.module'); } },
            { path: 'contact', loadChildren: function () { return System.import('../contact/contact.module'); } },
            { path: 'restauranteur', loadChildren: function () { return System.import('../restaurateurs/restaurateur.module'); } },
            { path: 'restaurant-approval', loadChildren: function () { return System.import('../restaurateurs/restaurant-approval.module'); } },
            { path: 'restaurantuersuccess', loadChildren: function () { return System.import('../restaurateurs/restaurantuer-success.module'); } }
        ] }
];
exports.ROUTES = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=layout.routes.js.map