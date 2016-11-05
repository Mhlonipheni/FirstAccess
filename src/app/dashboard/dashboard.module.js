"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var dashboard_component_ts_1 = require('./dashboard.component.ts');
var widget_directive_1 = require('../layout/widget/widget.directive');
exports.routes = [
    { path: '', component: dashboard_component_ts_1.Dashboard, pathMatch: 'full' }
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule.routes = exports.routes;
    DashboardModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.routes)],
            declarations: [dashboard_component_ts_1.Dashboard, widget_directive_1.Widget]
        }), 
        __metadata('design:paramtypes', [])
    ], DashboardModule);
    return DashboardModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DashboardModule;
//# sourceMappingURL=dashboard.module.js.map