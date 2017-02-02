"use strict";
var page_1 = require("ui/page");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, page) {
        this.router = router;
        this.page = page;
        this.page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.submit = function () {
        this.router.navigate(["/list"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-login",
            templateUrl: "./pages/login/login.html",
            styleUrls: ["pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [router_1.Router, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map