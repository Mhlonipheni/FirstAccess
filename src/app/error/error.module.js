"use strict";
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var error_component_ts_1 = require('./error.component.ts');
exports.routes = [
    { path: '', component: error_component_ts_1.ErrorComponent, pathMatch: 'full' }
];
var ErrorModule = (function () {
    function ErrorModule() {
    }
    ErrorModule.routes = exports.routes;
    ErrorModule = __decorate([
        core_1.NgModule({
            declarations: [
                error_component_ts_1.ErrorComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule.forChild(exports.routes),
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ErrorModule);
    return ErrorModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ErrorModule;
//# sourceMappingURL=error.module.js.map