import { Page } from "ui/page";
import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { UserService, DBService } from "../../services";

@Component({
    selector: "my-login",
    templateUrl: "./pages/register/register.html",
    styleUrls: ["./pages/register/register.css"]
})

export class RegisterComponent {

    isStage1: boolean;
    isStage2: boolean;

    email: string;
    password: string;
    surname: string;
    first_name : string;
    middle_name: string;
    phone_number: string;
    security_question: string;
    security_answer: string;

    loader_status: boolean;

    constructor
    (
        private page: Page,    
        private router: Router, 
        private UserService: UserService,

    ) 
    {
        // this.email               = "eckkjdjej@gmail.com";
        // this.password            = "bobdsdo";
        // this.surname             = "vdfvjdfdsdd";
        // this.first_name          = "fdfdfdf";
        // this.middle_name         = "fdfdf";
        // this.phone_number        = "00000000000000";
        // this.security_answer     = "ffsvsdfsdf";
        // this.security_question   = "fsdfasdfa";

        this.isStage1 = true;
        this.isStage2 = false;

        this.loader_status        = false;
        
        this.page.actionBarHidden = true;
    }

    ngOnInit(){
        this.loader_status = false;
    }

    register() {

        if
        (
            this.email == "" || 
            this.password == "" || 
            this.surname == "" || 
            this.middle_name == "" || 
            this.first_name == "" || 
            this.middle_name == "" || 
            this.phone_number == "" ||
            this.security_question == "" ||
            this.security_answer == ""
        ) 
        {
            alert('you need enter all field');
        }
        else
        {         

            var data = {
                Email: this.email, 
                Password: this.password,
                Surname: this.surname,
                Firstname: this.first_name,
                Middlename: this.middle_name,
                Phonenumber: this.phone_number,
                SecurityQuestion: this.security_question,
                SecurityAnswer: this.security_answer
            }

            this.loader_status = true;

            this.UserService.register(data).then(
                res => this.processRegister(res)
            )
        }
    }

    processRegister(res: any){
        
        res = JSON.parse(res)

        if(res.status == 200) 
        {
            alert('Account create :)')
            this.loader_status = false;
            this.router.navigate(['/login']);
        }
        else
        {
            this.loader_status = false;
            alert("Invalid user info!")
        }
    }

    stage1(){
        this.isStage1 = true;
        this.isStage2 = false;
    }

    stage2(){
        this.isStage1 = false;
        this.isStage2 = true;
    }

}
