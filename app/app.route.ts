import { MapComponent } from "./pages/map/map.component";
import { AuthComponent } from "./pages/auth/auth.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { ListingComponent } from "./pages/listing/listing.component";
import { RegisterComponent } from "./pages/register/register.component";
import { BusinessComponent } from "./pages/business/business.component";

export const routes = [
	{ 
		path: "", redirectTo: "/auth", pathMatch: "full" 
	},
	{ 
		path: "auth", component: AuthComponent 
	},
	{ 
		path: "login", component: LoginComponent 
	},
	{ 
		path: "register", component: RegisterComponent 
	},
	{ 
		path: "profile", component: ProfileComponent 
	},
	{ 
		path: "listing", component: ListingComponent 
	},
	{ 
		path: "map", component: MapComponent 
	},
	{ 
		path: "business/:id", component: BusinessComponent 
	}
];

export const navigatableComponents = [
  MapComponent,
  AuthComponent,
  LoginComponent,
  ListingComponent,
  ProfileComponent,
  RegisterComponent,
  BusinessComponent,
];