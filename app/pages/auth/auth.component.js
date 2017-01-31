"use strict";
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var AuthComponent = (function () {
    function AuthComponent(page, router, DBService, UserService) {
        // this.email                = "bobo@gmail.com";
        // this.password             = "emedddka";
        this.page = page;
        this.router = router;
        this.DBService = DBService;
        this.UserService = UserService;
        this.loader_status = false;
        this.page.actionBarHidden = true;
    }
    AuthComponent.prototype.ngOnInit = function () {
        if (this.DBService.isLoaded() == 'true' && this.DBService.isLoaded() != null) {
            this.router.navigate(['/dashboard']);
        }
    };
    AuthComponent.prototype.login = function () {
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
    AuthComponent.prototype.processLogin = function (data) {
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
    return AuthComponent;
}());
AuthComponent = __decorate([
    core_1.Component({
        selector: "my-login",
        templateUrl: "./pages/auth/auth.html",
        styleUrls: ["./pages/auth/auth.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.Router,
        services_1.DBService,
        services_1.UserService])
], AuthComponent);
exports.AuthComponent = AuthComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQStCO0FBQy9CLDBDQUF5QztBQUV6QyxzQ0FBMEM7QUFDMUMsMkNBQXlEO0FBU3pELElBQWEsYUFBYTtJQVF0Qix1QkFFWSxJQUFVLEVBQ1YsTUFBYyxFQUNkLFNBQW9CLEVBQ3BCLFdBQXdCO1FBTWhDLGdEQUFnRDtRQUNoRCwwQ0FBMEM7UUFWbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBU2hDLElBQUksQ0FBQyxhQUFhLEdBQVUsS0FBSyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUVJLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLElBQUksSUFBSyxDQUFDLENBQzdFLENBQUM7WUFDRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztJQUNMLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQUEsaUJBbUJDO1FBakJHLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksRUFBRSxDQUFDLENBQzNDLENBQUM7WUFDRyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQixDQUFDO1FBQ0QsSUFBSSxDQUNKLENBQUM7WUFDRyxJQUFJLElBQUksR0FBRztnQkFDUCxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ3BCLFFBQVEsRUFBRyxJQUFJLENBQUMsUUFBUTthQUMzQixDQUFBO1lBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUM3QixVQUFBLEdBQUcsSUFBSSxPQUFBLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQXRCLENBQXNCLENBQ2hDLENBQUE7UUFDTCxDQUFDO0lBQ0wsQ0FBQztJQUVELG9DQUFZLEdBQVosVUFBYSxJQUFRO1FBRWpCLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRXZCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQ3RCLENBQUM7WUFDRyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDekMsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0csSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsS0FBSyxDQUFDLDhCQUE4QixDQUFDLENBQUE7UUFDekMsQ0FBQztJQUVMLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUF4RUQsSUF3RUM7QUF4RVksYUFBYTtJQU56QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztLQUN2QyxDQUFDO3FDQVlvQixXQUFJO1FBQ0YsZUFBTTtRQUNILG9CQUFTO1FBQ1Asc0JBQVc7R0FiM0IsYUFBYSxDQXdFekI7QUF4RVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERCU2VydmljZSwgVXNlclNlcnZpY2UgfSAgZnJvbSBcIi4uLy4uL3NlcnZpY2VzXCI7XG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibXktbG9naW5cIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3BhZ2VzL2F1dGgvYXV0aC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2F1dGgvYXV0aC5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBdXRoQ29tcG9uZW50IHtcbiAgXG4gICAgdXJsOiBzdHJpbmc7XG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuXG4gICAgbG9hZGVyX3N0YXR1czogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yXG4gICAgKFxuICAgICAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxuICAgICAgICBwcml2YXRlIERCU2VydmljZTogREJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIFVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICApIFxuICAgIHtcblxuICAgICAgICBcblxuICAgICAgICAvLyB0aGlzLmVtYWlsICAgICAgICAgICAgICAgID0gXCJib2JvQGdtYWlsLmNvbVwiO1xuICAgICAgICAvLyB0aGlzLnBhc3N3b3JkICAgICAgICAgICAgID0gXCJlbWVkZGRrYVwiO1xuXG4gICAgICAgIHRoaXMubG9hZGVyX3N0YXR1cyAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcblxuICAgICAgICBpZih0aGlzLkRCU2VydmljZS5pc0xvYWRlZCgpID09ICd0cnVlJyAmJiB0aGlzLkRCU2VydmljZS5pc0xvYWRlZCgpICE9IG51bGwgKSBcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGFzaGJvYXJkJ10pOyAgICAgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxvZ2luKCkge1xuXG4gICAgICAgIGlmKHRoaXMuZW1haWwgPT0gJycgfHwgdGhpcy5wYXNzd29yZCA9PSAnJykgXG4gICAgICAgIHtcbiAgICAgICAgICAgIGFsZXJ0KCdJbnZhbGlkIEVtYWlsIG9yIFBhc3N3b3JkJyk7XG4gICAgICAgICAgICB0aGlzLmxvYWRlcl9zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIFVzZXJuYW1lOiB0aGlzLmVtYWlsLFxuICAgICAgICAgICAgICAgIFBhc3N3b3JkIDogdGhpcy5wYXNzd29yZFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmxvYWRlcl9zdGF0dXMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5Vc2VyU2VydmljZS5sb2dpbihkYXRhKS50aGVuKFxuICAgICAgICAgICAgICAgIHJlcyA9PiB0aGlzLnByb2Nlc3NMb2dpbihyZXMpXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzTG9naW4oZGF0YTphbnkpe1xuXG4gICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpXG5cbiAgICAgICAgaWYoZGF0YS5zdGF0dXMgPT0gMjAwKSBcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5EQlNlcnZpY2Uuc2F2ZVVzZXJEYXRhKGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5sb2FkZXJfc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kYXNoYm9hcmQnXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmxvYWRlcl9zdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgICAgIGFsZXJ0KCdpbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkJylcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59XG4iXX0=