"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var about_component_ts_1 = require('./about.component.ts');
exports.routes = [
    { path: '', component: about_component_ts_1.AboutPage, pathMatch: 'full' }
];
var AboutModule = (function () {
    function AboutModule() {
    }
    AboutModule.routes = exports.routes;
    AboutModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.routes)],
            declarations: [about_component_ts_1.AboutPage]
        }), 
        __metadata('design:paramtypes', [])
    ], AboutModule);
    return AboutModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AboutModule;
//# sourceMappingURL=about.module.js.map