"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var deals_component_ts_1 = require('./deals.component.ts');
exports.routes = [
    { path: '', component: deals_component_ts_1.DealsPage, pathMatch: 'full' }
];
var DealsModule = (function () {
    function DealsModule() {
    }
    DealsModule.routes = exports.routes;
    DealsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.routes)],
            declarations: [deals_component_ts_1.DealsPage]
        }), 
        __metadata('design:paramtypes', [])
    ], DealsModule);
    return DealsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DealsModule;
//# sourceMappingURL=deals.module.js.map