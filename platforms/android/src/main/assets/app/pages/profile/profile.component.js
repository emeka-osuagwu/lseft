"use strict";
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var Country = (function () {
    function Country(name) {
        this.name = name;
    }
    return Country;
}());
var europianCountries = ["Austria", "Belgium"];
var ProfileComponent = (function () {
    function ProfileComponent(page, router) {
        this.page = page;
        this.router = router;
        this.page.actionBarHidden = false;
        this.countries = [];
        for (var i = 0; i < europianCountries.length; i++) {
            this.countries.push(new Country(europianCountries[i]));
        }
    }
    ProfileComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.login = function () {
    };
    ProfileComponent.prototype.processLogin = function (data) {
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: "my-login",
        templateUrl: "./pages/profile/profile.html",
        styleUrls: ["./pages/profile/profile.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.Router])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9maWxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQStCO0FBQy9CLDBDQUF5QztBQUV6QyxzQ0FBMEM7QUFHMUM7SUFDSSxpQkFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFBSSxDQUFDO0lBQ3hDLGNBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUVELElBQUksaUJBQWlCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFTL0MsSUFBYSxnQkFBZ0I7SUFJekIsMEJBRVksSUFBVSxFQUNWLE1BQWM7UUFEZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUd0QixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7UUFFbEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFFbkIsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQztJQUNOLENBQUM7SUFFTSxvQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGdDQUFLLEdBQUw7SUFDQSxDQUFDO0lBRUQsdUNBQVksR0FBWixVQUFhLElBQVE7SUFDckIsQ0FBQztJQUNMLHVCQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQS9CWSxnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSw4QkFBOEI7UUFDM0MsU0FBUyxFQUFFLENBQUMsNkJBQTZCLENBQUM7S0FDN0MsQ0FBQztxQ0FRb0IsV0FBSTtRQUNGLGVBQU07R0FQakIsZ0JBQWdCLENBK0I1QjtBQS9CWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tIFwiaHR0cFwiO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IERCU2VydmljZSwgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXNcIjtcblxuY2xhc3MgQ291bnRyeSB7XG4gICAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZykgeyB9XG59XG5cbmxldCBldXJvcGlhbkNvdW50cmllcyA9IFtcIkF1c3RyaWFcIiwgXCJCZWxnaXVtXCJdO1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIm15LWxvZ2luXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9wYWdlcy9wcm9maWxlL3Byb2ZpbGUuY3NzXCJdXG59KVxuXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCB7XG5cblxuICAgICBwdWJsaWMgY291bnRyaWVzOiBBcnJheTxDb3VudHJ5PjtcbiAgICBjb25zdHJ1Y3RvclxuICAgIChcbiAgICAgICAgcHJpdmF0ZSBwYWdlOiBQYWdlLFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICkgXG4gICAge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gZmFsc2U7XG4gICAgXG4gICAgICAgIHRoaXMuY291bnRyaWVzID0gW107XG5cbiAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXVyb3BpYW5Db3VudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICB0aGlzLmNvdW50cmllcy5wdXNoKG5ldyBDb3VudHJ5KGV1cm9waWFuQ291bnRyaWVzW2ldKSk7XG4gICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4KTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpe1xuICAgIH1cblxuICAgIGxvZ2luKCkge1xuICAgIH1cblxuICAgIHByb2Nlc3NMb2dpbihkYXRhOmFueSl7XG4gICAgfVxufVxuIl19