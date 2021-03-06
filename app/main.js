"use strict";
var platform_1 = require("nativescript-angular/platform");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var services_1 = require("./services");
var forms_1 = require("nativescript-angular/forms");
var router_1 = require("nativescript-angular/router");
var app_route_1 = require("./app.route");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("DropDown", function () { return require("nativescript-drop-down/drop-down").DropDown; });
var AppComponentModule = (function () {
    function AppComponentModule() {
    }
    return AppComponentModule;
}());
AppComponentModule = __decorate([
    core_1.NgModule({
        providers: [
            services_1.DBService,
            services_1.UserService,
        ],
        declarations: [
            app_component_1.AppComponent,
            app_route_1.navigatableComponents
        ],
        bootstrap: [app_component_1.AppComponent],
        imports: [
            platform_1.NativeScriptModule,
            forms_1.NativeScriptFormsModule,
            router_1.NativeScriptRouterModule,
            router_1.NativeScriptRouterModule.forRoot(app_route_1.routes)
        ],
    })
], AppComponentModule);
platform_1.platformNativeScriptDynamic().bootstrapModule(AppComponentModule);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBEQUFxRztBQUNyRyxzQ0FBcUY7QUFDckYsaURBQXVGO0FBQ3ZGLHVDQUFrRjtBQUNsRixvREFBa0c7QUFDbEcsc0RBQW1HO0FBQ25HLHlDQUFtRjtBQUVuRiwwRUFBd0U7QUFFeEUsa0NBQWUsQ0FBQyxVQUFVLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLFFBQVEsRUFBcEQsQ0FBb0QsQ0FBQyxDQUFDO0FBb0J4RixJQUFNLGtCQUFrQjtJQUF4QjtJQUEwQixDQUFDO0lBQUQseUJBQUM7QUFBRCxDQUFDLEFBQTNCLElBQTJCO0FBQXJCLGtCQUFrQjtJQWxCdkIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1Qsb0JBQVM7WUFDVCxzQkFBVztTQUNaO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWixpQ0FBcUI7U0FDeEI7UUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1FBQ3pCLE9BQU8sRUFBRTtZQUNMLDZCQUFrQjtZQUNsQiwrQkFBdUI7WUFDdkIsaUNBQXdCO1lBQ3hCLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxrQkFBTSxDQUFDO1NBQzNDO0tBQ0osQ0FBQztHQUVJLGtCQUFrQixDQUFHO0FBRTNCLHNDQUEyQixFQUFFLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMsIE5hdGl2ZVNjcmlwdE1vZHVsZSB9ICAgICAgZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBEQlNlcnZpY2UsIFVzZXJTZXJ2aWNlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vc2VydmljZXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyByb3V0ZXMsIG5hdmlnYXRhYmxlQ29tcG9uZW50cyB9ICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBcIi4vYXBwLnJvdXRlXCI7XG5cbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbnJlZ2lzdGVyRWxlbWVudChcIkRyb3BEb3duXCIsICgpID0+IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtZHJvcC1kb3duL2Ryb3AtZG93blwiKS5Ecm9wRG93bik7XG5cbkBOZ01vZHVsZSh7XG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICBEQlNlcnZpY2UsXG4gICAgICBVc2VyU2VydmljZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIG5hdmlnYXRhYmxlQ29tcG9uZW50c1xuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKVxuICAgIF0sXG59KVxuXG5jbGFzcyBBcHBDb21wb25lbnRNb2R1bGUge31cblxucGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcENvbXBvbmVudE1vZHVsZSk7Il19