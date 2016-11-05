"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var faq_component_ts_1 = require('./faq.component.ts');
exports.routes = [
    { path: '', component: faq_component_ts_1.FaqPage, pathMatch: 'full' }
];
var FaqModule = (function () {
    function FaqModule() {
    }
    FaqModule.routes = exports.routes;
    FaqModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.routes)],
            declarations: [faq_component_ts_1.FaqPage]
        }), 
        __metadata('design:paramtypes', [])
    ], FaqModule);
    return FaqModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = FaqModule;
//# sourceMappingURL=faq.module.js.map