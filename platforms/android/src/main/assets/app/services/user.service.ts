
import { request } from "http";
import { Injectable } from '@angular/core';

export class UserService {

    login(data: any) 
    {
        return new Promise((resolve, reject) => {
            request({
                url: "http://45.55.185.97/api/login",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify(data)
            })
            .then(response => {
                let data = JSON.stringify(response.content);
                resolve(data);
            })
            .catch(err => {
                console.log("Error occurred " + err.stack);
                reject(err.stack);
            })
        })
    }

    register(data: any) 
    {
        return new Promise((resolve, reject) => {
            request({
                url: "http://45.55.185.97/api/register",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify(data)
            })
            .then(response => {
                let data = JSON.stringify(response.content);
                resolve(data);
            })
            .catch(err => {
                console.log("Error occurred " + err.stack);
                reject(err.stack);
            })
        })
    }

}