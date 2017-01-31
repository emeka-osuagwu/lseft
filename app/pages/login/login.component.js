"use strict";
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var LoginComponent = (function () {
    function LoginComponent(page, router, DBService, UserService) {
        // this.email                = "bobo@gmail.com";
        // this.password             = "emedddka";
        this.page = page;
        this.router = router;
        this.DBService = DBService;
        this.UserService = UserService;
        this.loader_status = false;
        this.page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.DBService.isLoaded() == 'true' && this.DBService.isLoaded() != null) {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.email == '' || this.password == '') {
            alert('Invalid Email or Password');
            this.loader_status = false;
        }
        else {
            var data = {
                Username: this.email,
                Password: this.password
            };
            this.loader_status = true;
            this.UserService.login(data).then(function (res) { return _this.processLogin(res); });
        }
    };
    LoginComponent.prototype.processLogin = function (data) {
        data = JSON.parse(data);
        if (data.status == 200) {
            this.DBService.saveUserData(data);
            this.loader_status = false;
            this.router.navigate(['/dashboard']);
        }
        else {
            this.loader_status = false;
            alert('invalid username or password');
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-login",
        templateUrl: "./pages/login/login.html",
        styleUrls: ["./pages/login/login.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.Router,
        services_1.DBService,
        services_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBRXpDLHNDQUEwQztBQUMxQywyQ0FBeUQ7QUFTekQsSUFBYSxjQUFjO0lBUXZCLHdCQUVZLElBQVUsRUFDVixNQUFjLEVBQ2QsU0FBb0IsRUFDcEIsV0FBd0I7UUFJaEMsZ0RBQWdEO1FBQ2hELDBDQUEwQztRQVJsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFPaEMsSUFBSSxDQUFDLGFBQWEsR0FBVSxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBRUksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFLLENBQUMsQ0FDN0UsQ0FBQztZQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFBQSxpQkFtQkM7UUFqQkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FDM0MsQ0FBQztZQUNHLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNHLElBQUksSUFBSSxHQUFHO2dCQUNQLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDcEIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO2FBQzNCLENBQUE7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzdCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsQ0FDaEMsQ0FBQTtRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQscUNBQVksR0FBWixVQUFhLElBQVE7UUFFakIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFdkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FDdEIsQ0FBQztZQUNHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFFRyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQTtRQUN6QyxDQUFDO0lBRUwsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxBQXZFRCxJQXVFQztBQXZFWSxjQUFjO0lBTjFCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsMEJBQTBCO1FBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO0tBQ3pDLENBQUM7cUNBWW9CLFdBQUk7UUFDRixlQUFNO1FBQ0gsb0JBQVM7UUFDUCxzQkFBVztHQWIzQixjQUFjLENBdUUxQjtBQXZFWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gXCJodHRwXCI7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgREJTZXJ2aWNlLCBVc2VyU2VydmljZSB9ICBmcm9tIFwiLi4vLi4vc2VydmljZXNcIjtcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJteS1sb2dpblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9sb2dpbi9sb2dpbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCB7XG4gIFxuICAgIHVybDogc3RyaW5nO1xuICAgIGVtYWlsOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcblxuICAgIGxvYWRlcl9zdGF0dXM6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcbiAgICAgICAgcHJpdmF0ZSBEQlNlcnZpY2U6IERCU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBVc2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgKSBcbiAgICB7XG5cbiAgICAgICAgLy8gdGhpcy5lbWFpbCAgICAgICAgICAgICAgICA9IFwiYm9ib0BnbWFpbC5jb21cIjtcbiAgICAgICAgLy8gdGhpcy5wYXNzd29yZCAgICAgICAgICAgICA9IFwiZW1lZGRka2FcIjtcblxuICAgICAgICB0aGlzLmxvYWRlcl9zdGF0dXMgICAgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCl7XG5cbiAgICAgICAgaWYodGhpcy5EQlNlcnZpY2UuaXNMb2FkZWQoKSA9PSAndHJ1ZScgJiYgdGhpcy5EQlNlcnZpY2UuaXNMb2FkZWQoKSAhPSBudWxsICkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2Rhc2hib2FyZCddKTsgICAgICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsb2dpbigpIHtcblxuICAgICAgICBpZih0aGlzLmVtYWlsID09ICcnIHx8IHRoaXMucGFzc3dvcmQgPT0gJycpIFxuICAgICAgICB7XG4gICAgICAgICAgICBhbGVydCgnSW52YWxpZCBFbWFpbCBvciBQYXNzd29yZCcpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZXJfc3RhdHVzID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBVc2VybmFtZTogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgICAgICBQYXNzd29yZCA6IHRoaXMucGFzc3dvcmRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkZXJfc3RhdHVzID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuVXNlclNlcnZpY2UubG9naW4oZGF0YSkudGhlbihcbiAgICAgICAgICAgICAgICByZXMgPT4gdGhpcy5wcm9jZXNzTG9naW4ocmVzKVxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvY2Vzc0xvZ2luKGRhdGE6YW55KXtcblxuICAgICAgICBkYXRhID0gSlNPTi5wYXJzZShkYXRhKVxuXG4gICAgICAgIGlmKGRhdGEuc3RhdHVzID09IDIwMCkgXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuREJTZXJ2aWNlLnNhdmVVc2VyRGF0YShkYXRhKTtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyX3N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmxvYWRlcl9zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsZXJ0KCdpbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJylcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG4iXX0=