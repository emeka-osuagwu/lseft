"use strict";
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var RegisterComponent = (function () {
    function RegisterComponent(page, router, UserService) {
        // this.email               = "eckkjdjej@gmail.com";
        // this.password            = "bobdsdo";
        // this.surname             = "vdfvjdfdsdd";
        // this.first_name          = "fdfdfdf";
        // this.middle_name         = "fdfdf";
        // this.phone_number        = "00000000000000";
        // this.security_answer     = "ffsvsdfsdf";
        // this.security_question   = "fsdfasdfa";
        this.page = page;
        this.router = router;
        this.UserService = UserService;
        this.isStage1 = true;
        this.isStage2 = false;
        this.loader_status = false;
        this.page.actionBarHidden = true;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.loader_status = false;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (this.email == "" ||
            this.password == "" ||
            this.surname == "" ||
            this.middle_name == "" ||
            this.first_name == "" ||
            this.middle_name == "" ||
            this.phone_number == "" ||
            this.security_question == "" ||
            this.security_answer == "") {
            alert('you need enter all field');
        }
        else {
            var data = {
                Email: this.email,
                Password: this.password,
                Surname: this.surname,
                Firstname: this.first_name,
                Middlename: this.middle_name,
                Phonenumber: this.phone_number,
                SecurityQuestion: this.security_question,
                SecurityAnswer: this.security_answer
            };
            this.loader_status = true;
            this.UserService.register(data).then(function (res) { return _this.processRegister(res); });
        }
    };
    RegisterComponent.prototype.processRegister = function (res) {
        res = JSON.parse(res);
        if (res.status == 200) {
            alert('Account create :)');
            this.loader_status = false;
            this.router.navigate(['/login']);
        }
        else {
            this.loader_status = false;
            alert("Invalid user info!");
        }
    };
    RegisterComponent.prototype.stage1 = function () {
        this.isStage1 = true;
        this.isStage2 = false;
    };
    RegisterComponent.prototype.stage2 = function () {
        this.isStage1 = false;
        this.isStage2 = true;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: "my-login",
        templateUrl: "./pages/register/register.html",
        styleUrls: ["./pages/register/register.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.Router,
        services_1.UserService])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBQ3pDLHNDQUEwQztBQUMxQywyQ0FBd0Q7QUFReEQsSUFBYSxpQkFBaUI7SUFnQjFCLDJCQUVZLElBQVUsRUFDVixNQUFjLEVBQ2QsV0FBd0I7UUFJaEMsb0RBQW9EO1FBQ3BELHdDQUF3QztRQUN4Qyw0Q0FBNEM7UUFDNUMsd0NBQXdDO1FBQ3hDLHNDQUFzQztRQUN0QywrQ0FBK0M7UUFDL0MsMkNBQTJDO1FBQzNDLDBDQUEwQztRQWJsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBYWhDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBRXRCLElBQUksQ0FBQyxhQUFhLEdBQVUsS0FBSyxDQUFDO1FBRWxDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO0lBQy9CLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQUEsaUJBcUNDO1FBbkNHLEVBQUUsQ0FDRixDQUNJLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNoQixJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUU7WUFDbkIsSUFBSSxDQUFDLE9BQU8sSUFBSSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLElBQUksRUFBRTtZQUN0QixJQUFJLENBQUMsVUFBVSxJQUFJLEVBQUU7WUFDckIsSUFBSSxDQUFDLFdBQVcsSUFBSSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxZQUFZLElBQUksRUFBRTtZQUN2QixJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRTtZQUM1QixJQUFJLENBQUMsZUFBZSxJQUFJLEVBQzVCLENBQUMsQ0FDRCxDQUFDO1lBQ0csS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBRUcsSUFBSSxJQUFJLEdBQUc7Z0JBQ1AsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVO2dCQUMxQixVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVc7Z0JBQzVCLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWTtnQkFDOUIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtnQkFDeEMsY0FBYyxFQUFFLElBQUksQ0FBQyxlQUFlO2FBQ3ZDLENBQUE7WUFFRCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUUxQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQ2hDLFVBQUEsR0FBRyxJQUFJLE9BQUEsS0FBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsRUFBekIsQ0FBeUIsQ0FDbkMsQ0FBQTtRQUNMLENBQUM7SUFDTCxDQUFDO0lBRUQsMkNBQWUsR0FBZixVQUFnQixHQUFRO1FBRXBCLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRXJCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLElBQUksR0FBRyxDQUFDLENBQ3JCLENBQUM7WUFDRyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztZQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNELElBQUksQ0FDSixDQUFDO1lBQ0csSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFDM0IsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUE7UUFDL0IsQ0FBQztJQUNMLENBQUM7SUFFRCxrQ0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztJQUN6QixDQUFDO0lBRUwsd0JBQUM7QUFBRCxDQUFDLEFBL0dELElBK0dDO0FBL0dZLGlCQUFpQjtJQU43QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLGdDQUFnQztRQUM3QyxTQUFTLEVBQUUsQ0FBQywrQkFBK0IsQ0FBQztLQUMvQyxDQUFDO3FDQW9Cb0IsV0FBSTtRQUNGLGVBQU07UUFDRCxzQkFBVztHQXBCM0IsaUJBQWlCLENBK0c3QjtBQS9HWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSwgREJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWxvZ2luXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNzc1wiXVxufSlcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IHtcblxuICAgIGlzU3RhZ2UxOiBib29sZWFuO1xuICAgIGlzU3RhZ2UyOiBib29sZWFuO1xuXG4gICAgZW1haWw6IHN0cmluZztcbiAgICBwYXNzd29yZDogc3RyaW5nO1xuICAgIHN1cm5hbWU6IHN0cmluZztcbiAgICBmaXJzdF9uYW1lIDogc3RyaW5nO1xuICAgIG1pZGRsZV9uYW1lOiBzdHJpbmc7XG4gICAgcGhvbmVfbnVtYmVyOiBzdHJpbmc7XG4gICAgc2VjdXJpdHlfcXVlc3Rpb246IHN0cmluZztcbiAgICBzZWN1cml0eV9hbnN3ZXI6IHN0cmluZztcblxuICAgIGxvYWRlcl9zdGF0dXM6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLCAgICBcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgXG4gICAgICAgIHByaXZhdGUgVXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuXG4gICAgKSBcbiAgICB7XG4gICAgICAgIC8vIHRoaXMuZW1haWwgICAgICAgICAgICAgICA9IFwiZWNra2pkamVqQGdtYWlsLmNvbVwiO1xuICAgICAgICAvLyB0aGlzLnBhc3N3b3JkICAgICAgICAgICAgPSBcImJvYmRzZG9cIjtcbiAgICAgICAgLy8gdGhpcy5zdXJuYW1lICAgICAgICAgICAgID0gXCJ2ZGZ2amRmZHNkZFwiO1xuICAgICAgICAvLyB0aGlzLmZpcnN0X25hbWUgICAgICAgICAgPSBcImZkZmRmZGZcIjtcbiAgICAgICAgLy8gdGhpcy5taWRkbGVfbmFtZSAgICAgICAgID0gXCJmZGZkZlwiO1xuICAgICAgICAvLyB0aGlzLnBob25lX251bWJlciAgICAgICAgPSBcIjAwMDAwMDAwMDAwMDAwXCI7XG4gICAgICAgIC8vIHRoaXMuc2VjdXJpdHlfYW5zd2VyICAgICA9IFwiZmZzdnNkZnNkZlwiO1xuICAgICAgICAvLyB0aGlzLnNlY3VyaXR5X3F1ZXN0aW9uICAgPSBcImZzZGZhc2RmYVwiO1xuXG4gICAgICAgIHRoaXMuaXNTdGFnZTEgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzU3RhZ2UyID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5sb2FkZXJfc3RhdHVzICAgICAgICA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKXtcbiAgICAgICAgdGhpcy5sb2FkZXJfc3RhdHVzID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIoKSB7XG5cbiAgICAgICAgaWZcbiAgICAgICAgKFxuICAgICAgICAgICAgdGhpcy5lbWFpbCA9PSBcIlwiIHx8IFxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZCA9PSBcIlwiIHx8IFxuICAgICAgICAgICAgdGhpcy5zdXJuYW1lID09IFwiXCIgfHwgXG4gICAgICAgICAgICB0aGlzLm1pZGRsZV9uYW1lID09IFwiXCIgfHwgXG4gICAgICAgICAgICB0aGlzLmZpcnN0X25hbWUgPT0gXCJcIiB8fCBcbiAgICAgICAgICAgIHRoaXMubWlkZGxlX25hbWUgPT0gXCJcIiB8fCBcbiAgICAgICAgICAgIHRoaXMucGhvbmVfbnVtYmVyID09IFwiXCIgfHxcbiAgICAgICAgICAgIHRoaXMuc2VjdXJpdHlfcXVlc3Rpb24gPT0gXCJcIiB8fFxuICAgICAgICAgICAgdGhpcy5zZWN1cml0eV9hbnN3ZXIgPT0gXCJcIlxuICAgICAgICApIFxuICAgICAgICB7XG4gICAgICAgICAgICBhbGVydCgneW91IG5lZWQgZW50ZXIgYWxsIGZpZWxkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7ICAgICAgICAgXG5cbiAgICAgICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgICAgIEVtYWlsOiB0aGlzLmVtYWlsLCBcbiAgICAgICAgICAgICAgICBQYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICBTdXJuYW1lOiB0aGlzLnN1cm5hbWUsXG4gICAgICAgICAgICAgICAgRmlyc3RuYW1lOiB0aGlzLmZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgTWlkZGxlbmFtZTogdGhpcy5taWRkbGVfbmFtZSxcbiAgICAgICAgICAgICAgICBQaG9uZW51bWJlcjogdGhpcy5waG9uZV9udW1iZXIsXG4gICAgICAgICAgICAgICAgU2VjdXJpdHlRdWVzdGlvbjogdGhpcy5zZWN1cml0eV9xdWVzdGlvbixcbiAgICAgICAgICAgICAgICBTZWN1cml0eUFuc3dlcjogdGhpcy5zZWN1cml0eV9hbnN3ZXJcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkZXJfc3RhdHVzID0gdHJ1ZTtcblxuICAgICAgICAgICAgdGhpcy5Vc2VyU2VydmljZS5yZWdpc3RlcihkYXRhKS50aGVuKFxuICAgICAgICAgICAgICAgIHJlcyA9PiB0aGlzLnByb2Nlc3NSZWdpc3RlcihyZXMpXG4gICAgICAgICAgICApXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm9jZXNzUmVnaXN0ZXIocmVzOiBhbnkpe1xuICAgICAgICBcbiAgICAgICAgcmVzID0gSlNPTi5wYXJzZShyZXMpXG5cbiAgICAgICAgaWYocmVzLnN0YXR1cyA9PSAyMDApIFxuICAgICAgICB7XG4gICAgICAgICAgICBhbGVydCgnQWNjb3VudCBjcmVhdGUgOiknKVxuICAgICAgICAgICAgdGhpcy5sb2FkZXJfc3RhdHVzID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGVyX3N0YXR1cyA9IGZhbHNlO1xuICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIHVzZXIgaW5mbyFcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YWdlMSgpe1xuICAgICAgICB0aGlzLmlzU3RhZ2UxID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc1N0YWdlMiA9IGZhbHNlO1xuICAgIH1cblxuICAgIHN0YWdlMigpe1xuICAgICAgICB0aGlzLmlzU3RhZ2UxID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNTdGFnZTIgPSB0cnVlO1xuICAgIH1cblxufVxuIl19