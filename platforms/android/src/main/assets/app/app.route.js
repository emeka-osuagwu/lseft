"use strict";
var map_component_1 = require("./pages/map/map.component");
var auth_component_1 = require("./pages/auth/auth.component");
var login_component_1 = require("./pages/login/login.component");
var profile_component_1 = require("./pages/profile/profile.component");
var listing_component_1 = require("./pages/listing/listing.component");
var register_component_1 = require("./pages/register/register.component");
var business_component_1 = require("./pages/business/business.component");
exports.routes = [
    {
        path: "", redirectTo: "/map", pathMatch: "full"
    },
    {
        path: "auth", component: auth_component_1.AuthComponent
    },
    {
        path: "login", component: login_component_1.LoginComponent
    },
    {
        path: "register", component: register_component_1.RegisterComponent
    },
    {
        path: "profile", component: profile_component_1.ProfileComponent
    },
    {
        path: "listing", component: listing_component_1.ListingComponent
    },
    {
        path: "map", component: map_component_1.MapComponent
    },
    {
        path: "business/:id", component: business_component_1.BusinessComponent
    }
];
exports.navigatableComponents = [
    map_component_1.MapComponent,
    auth_component_1.AuthComponent,
    login_component_1.LoginComponent,
    listing_component_1.ListingComponent,
    profile_component_1.ProfileComponent,
    register_component_1.RegisterComponent,
    business_component_1.BusinessComponent,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyREFBeUQ7QUFDekQsOERBQTREO0FBQzVELGlFQUErRDtBQUMvRCx1RUFBcUU7QUFDckUsdUVBQXFFO0FBQ3JFLDBFQUF3RTtBQUN4RSwwRUFBd0U7QUFFM0QsUUFBQSxNQUFNLEdBQUc7SUFDckI7UUFDQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU07S0FDL0M7SUFDRDtRQUNDLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLDhCQUFhO0tBQ3RDO0lBQ0Q7UUFDQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYztLQUN4QztJQUNEO1FBQ0MsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCO0tBQzlDO0lBQ0Q7UUFDQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxvQ0FBZ0I7S0FDNUM7SUFDRDtRQUNDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQjtLQUM1QztJQUNEO1FBQ0MsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsNEJBQVk7S0FDcEM7SUFDRDtRQUNDLElBQUksRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLHNDQUFpQjtLQUNsRDtDQUNELENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLDRCQUFZO0lBQ1osOEJBQWE7SUFDYixnQ0FBYztJQUNkLG9DQUFnQjtJQUNoQixvQ0FBZ0I7SUFDaEIsc0NBQWlCO0lBQ2pCLHNDQUFpQjtDQUNsQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWFwL21hcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEF1dGhDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9hdXRoL2F1dGguY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUHJvZmlsZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RpbmdDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9saXN0aW5nL2xpc3RpbmcuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBSZWdpc3RlckNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQnVzaW5lc3NDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9idXNpbmVzcy9idXNpbmVzcy5jb21wb25lbnRcIjtcblxuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IFtcblx0eyBcblx0XHRwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9tYXBcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiBcblx0fSxcblx0eyBcblx0XHRwYXRoOiBcImF1dGhcIiwgY29tcG9uZW50OiBBdXRoQ29tcG9uZW50IFxuXHR9LFxuXHR7IFxuXHRcdHBhdGg6IFwibG9naW5cIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCBcblx0fSxcblx0eyBcblx0XHRwYXRoOiBcInJlZ2lzdGVyXCIsIGNvbXBvbmVudDogUmVnaXN0ZXJDb21wb25lbnQgXG5cdH0sXG5cdHsgXG5cdFx0cGF0aDogXCJwcm9maWxlXCIsIGNvbXBvbmVudDogUHJvZmlsZUNvbXBvbmVudCBcblx0fSxcblx0eyBcblx0XHRwYXRoOiBcImxpc3RpbmdcIiwgY29tcG9uZW50OiBMaXN0aW5nQ29tcG9uZW50IFxuXHR9LFxuXHR7IFxuXHRcdHBhdGg6IFwibWFwXCIsIGNvbXBvbmVudDogTWFwQ29tcG9uZW50IFxuXHR9LFxuXHR7IFxuXHRcdHBhdGg6IFwiYnVzaW5lc3MvOmlkXCIsIGNvbXBvbmVudDogQnVzaW5lc3NDb21wb25lbnQgXG5cdH1cbl07XG5cbmV4cG9ydCBjb25zdCBuYXZpZ2F0YWJsZUNvbXBvbmVudHMgPSBbXG4gIE1hcENvbXBvbmVudCxcbiAgQXV0aENvbXBvbmVudCxcbiAgTG9naW5Db21wb25lbnQsXG4gIExpc3RpbmdDb21wb25lbnQsXG4gIFByb2ZpbGVDb21wb25lbnQsXG4gIFJlZ2lzdGVyQ29tcG9uZW50LFxuICBCdXNpbmVzc0NvbXBvbmVudCxcbl07Il19