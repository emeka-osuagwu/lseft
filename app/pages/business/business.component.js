"use strict";
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var BusinessComponent = (function () {
    function BusinessComponent(page, router, DBService, UserService) {
        this.page = page;
        this.router = router;
        this.DBService = DBService;
        this.UserService = UserService;
        this.loader_status = false;
        this.page.actionBarHidden = false;
    }
    BusinessComponent.prototype.ngOnInit = function () {
        if (this.DBService.isLoaded() == 'true' && this.DBService.isLoaded() != null) {
            this.router.navigate(['/dashboard']);
        }
    };
    BusinessComponent.prototype.login = function () {
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
    BusinessComponent.prototype.processLogin = function (data) {
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
    return BusinessComponent;
}());
BusinessComponent = __decorate([
    core_1.Component({
        selector: "my-login",
        templateUrl: "./pages/business/business.html",
        styleUrls: ["./pages/business/business.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.Router,
        services_1.DBService,
        services_1.UserService])
], BusinessComponent);
exports.BusinessComponent = BusinessComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVzaW5lc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnVzaW5lc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBRXpDLHNDQUEwQztBQUMxQywyQ0FBeUQ7QUFTekQsSUFBYSxpQkFBaUI7SUFRMUIsMkJBRVksSUFBVSxFQUNWLE1BQWMsRUFDZCxTQUFvQixFQUNwQixXQUF3QjtRQUh4QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFHaEMsSUFBSSxDQUFDLGFBQWEsR0FBVSxLQUFLLENBQUM7UUFDbEMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBRUksRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFLLENBQUMsQ0FDN0UsQ0FBQztZQUNHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlDQUFLLEdBQUw7UUFBQSxpQkFtQkM7UUFqQkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUMsQ0FDM0MsQ0FBQztZQUNHLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDO1lBQ25DLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7UUFDRCxJQUFJLENBQ0osQ0FBQztZQUNHLElBQUksSUFBSSxHQUFHO2dCQUNQLFFBQVEsRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDcEIsUUFBUSxFQUFHLElBQUksQ0FBQyxRQUFRO2FBQzNCLENBQUE7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQzdCLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFBdEIsQ0FBc0IsQ0FDaEMsQ0FBQTtRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsd0NBQVksR0FBWixVQUFhLElBQVE7UUFFakIsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7UUFFdkIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsQ0FDdEIsQ0FBQztZQUNHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1lBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztRQUN6QyxDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFFRyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixLQUFLLENBQUMsOEJBQThCLENBQUMsQ0FBQTtRQUN6QyxDQUFDO0lBRUwsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQW5FRCxJQW1FQztBQW5FWSxpQkFBaUI7SUFON0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSxnQ0FBZ0M7UUFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7S0FDL0MsQ0FBQztxQ0FZb0IsV0FBSTtRQUNGLGVBQU07UUFDSCxvQkFBUztRQUNQLHNCQUFXO0dBYjNCLGlCQUFpQixDQW1FN0I7QUFuRVksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBEQlNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gIGZyb20gXCIuLi8uLi9zZXJ2aWNlc1wiO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWxvZ2luXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9idXNpbmVzcy9idXNpbmVzcy5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2J1c2luZXNzL2J1c2luZXNzLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIEJ1c2luZXNzQ29tcG9uZW50IHtcbiAgXG4gICAgdXJsOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuXG4gICAgbG9hZGVyX3N0YXR1czogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxuICAgICAgICBwcml2YXRlIERCU2VydmljZTogREJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIFVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICApIFxuICAgIHtcbiAgICAgICAgdGhpcy5sb2FkZXJfc3RhdHVzICAgICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcblxuICAgICAgICBpZih0aGlzLkRCU2VydmljZS5pc0xvYWRlZCgpID09ICd0cnVlJyAmJiB0aGlzLkRCU2VydmljZS5pc0xvYWRlZCgpICE9IG51bGwgKSBcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pOyAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ2luKCkge1xuXG4gICAgICAgIGlmKHRoaXMuZW1haWwgPT0gJycgfHwgdGhpcy5wYXNzd29yZCA9PSAnJykgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIEVtYWlsIG9yIFBhc3N3b3JkJyk7XG4gICAgICAgICAgICB0aGlzLmxvYWRlcl9zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIFVzZXJuYW1lOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgICAgIFBhc3N3b3JkIDogdGhpcy5wYXNzd29yZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxvYWRlcl9zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5Vc2VyU2VydmljZS5sb2dpbihkYXRhKS50aGVuKFxuICAgICAgICAgICAgICAgIHJlcyA9PiB0aGlzLnByb2Nlc3NMb2dpbihyZXMpXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzTG9naW4oZGF0YTphbnkpe1xuXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpXG5cbiAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gMjAwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5EQlNlcnZpY2Uuc2F2ZVVzZXJEYXRhKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZXJfc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMubG9hZGVyX3N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgYWxlcnQoJ2ludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmQnKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cbiJdfQ==