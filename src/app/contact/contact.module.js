"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var contact_component_ts_1 = require('./contact.component.ts');
exports.routes = [
    { path: '', component: contact_component_ts_1.ContactPage, pathMatch: 'full' }
];
var AnotherModule = (function () {
    function AnotherModule() {
    }
    AnotherModule.routes = exports.routes;
    AnotherModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, router_1.RouterModule.forChild(exports.routes)],
            declarations: [contact_component_ts_1.ContactPage]
        }), 
        __metadata('design:paramtypes', [])
    ], AnotherModule);
    return AnotherModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AnotherModule;
//# sourceMappingURL=contact.module.js.map