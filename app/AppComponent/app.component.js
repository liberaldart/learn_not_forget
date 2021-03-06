"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Learn and keep in memory';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <md-toolbar [color]=\"accent\">\n      <span>Your Zone-In activities</span>\n      \n      <md-toolbar-row>\n        <nav>\n          <a routerLink=\"/dashboard\" routerLinkActive=\"active\">Dashboard</a>\n          <a routerLink=\"/heroes\" routerLinkActive=\"active\">Activities</a>\n        </nav>\n      </md-toolbar-row>\n    </md-toolbar>\n    <!--we call this type of component a Router Component. -->\n    <router-outlet></router-outlet>\n  ",
            styleUrls: ['app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map