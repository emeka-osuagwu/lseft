import { platformNativeScriptDynamic, NativeScriptModule }      from "nativescript-angular/platform";
import { NgModule }                                             from "@angular/core";
import { AppComponent }                                         from "./app.component";
import { DBService, UserService }                               from "./services";
import { NativeScriptFormsModule }                              from "nativescript-angular/forms";
import { NativeScriptRouterModule }                             from "nativescript-angular/router";
import { routes, navigatableComponents }                        from "./app.route";

import { registerElement } from "nativescript-angular/element-registry";

registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);

@NgModule({
    providers: [
      DBService,
      UserService,
    ],
    declarations: [
        AppComponent,
        navigatableComponents
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes)
    ],
})

class AppComponentModule {}

platformNativeScriptDynamic().bootstrapModule(AppComponentModule);