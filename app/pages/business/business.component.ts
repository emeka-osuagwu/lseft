import { Page } from "ui/page";
import { Router } from "@angular/router";
import { request } from "http";
import { Component } from "@angular/core";
import { DBService, UserService }  from "../../services";


@Component({
    selector: "my-login",
    templateUrl: "./pages/business/business.html",
    styleUrls: ["./pages/business/business.css"]
})

export class BusinessComponent {
  
    url: string;
    email: string;
    password: string;

    loader_status: boolean;

    constructor
    (
        private page: Page,
        private router: Router, 
        private DBService: DBService,
        private UserService: UserService,
    ) 
    {
        this.loader_status        = false;
        this.page.actionBarHidden = false;
    }

    ngOnInit(){

        if(this.DBService.isLoaded() == 'true' && this.DBService.isLoaded() != null ) 
        {
            this.router.navigate(['/dashboard']);       
        }
    }

    login() {

        if(this.email == '' || this.password == '') 
        {
            alert('Invalid Email or Password');
            this.loader_status = false;
        }
        else
        {
            var data = {
                Username: this.email,
                Password : this.password
            }

            this.loader_status = true;
            this.UserService.login(data).then(
                res => this.processLogin(res)
            )
        }
    }

    processLogin(data:any){

        data = JSON.parse(data)

        if(data.status == 200) 
        {
            this.DBService.saveUserData(data);
            this.loader_status = false;
            this.router.navigate(['/dashboard']);
        }
        else
        {
            
            this.loader_status = false;
            alert('invalid username or password')
        }
        
    }
}
