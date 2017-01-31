import { Page } from "ui/page";
import { Router } from "@angular/router";
import { request } from "http";
import { Component } from "@angular/core";
import { DBService, UserService } from "../../services";

class Country {
    constructor(public name: string) { }
}

let europianCountries = ["Austria", "Belgium"];


@Component({
    selector: "my-login",
    templateUrl: "./pages/profile/profile.html",
    styleUrls: ["./pages/profile/profile.css"]
})

export class ProfileComponent {


     public countries: Array<Country>;
    constructor
    (
        private page: Page,
        private router: Router,
    ) 
    {
        this.page.actionBarHidden = false;
    
        this.countries = [];

         for (let i = 0; i < europianCountries.length; i++) {
             this.countries.push(new Country(europianCountries[i]));
         }
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
    }

    ngOnInit(){
    }

    login() {
    }

    processLogin(data:any){
    }
}
