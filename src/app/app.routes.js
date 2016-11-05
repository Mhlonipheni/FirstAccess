"use strict";
var error_component_1 = require('./error/error.component');
exports.ROUTES = [{
        path: '', redirectTo: 'app', pathMatch: 'full'
    }, {
        path: 'app', loadChildren: function () { return System.import('./layout/layout.module'); }
    }, {
        path: 'login', loadChildren: function () { return System.import('./login/login.module'); }
    }, {
        path: 'error', component: error_component_1.ErrorComponent
    }, {
        path: '**', component: error_component_1.ErrorComponent
    }
];
//# sourceMappingURL=app.routes.js.map