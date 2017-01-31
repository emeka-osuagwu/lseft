
import { request } from "http";
import { Injectable } from '@angular/core';
import { DBService } from "../services";
 
export class GoalService {

    saveGoal(data: any) 
    {
        return new Promise((resolve, reject) => {
            request({
                url: "http://45.55.185.97/api/goal/create",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify(data)
            })
            .then(response => {
                let returnData = JSON.stringify(response.content);
                resolve(returnData);
            })
            .catch(err => {
                console.log("Error occurred " + err.stack);
                reject(err.stack);
            })
        })
    }

    getAllGoals(){
        return new Promise((resolve, reject) => {
            request({
                url: "http://45.55.185.97/api/user/goals/PIV100041",
                method: "GET",
                headers: { "Content-Type": "application/json" },
            })
            .then(response => {
                let returnData = JSON.stringify(response.content);
                resolve(returnData);
            })
            .catch(err => {
                console.log("Error occurred " + err.stack);
                reject(err.stack);
            })
        })   
    }


}