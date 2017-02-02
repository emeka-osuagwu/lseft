import { request } from "http";
import { Injectable } from '@angular/core';


export class CardService {

	addCard(data: any) 
	{
	    return new Promise((resolve, reject) => {
	        request({
	            url: "http://45.55.185.97/api/card/add",
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

	getAllCards(id: any) 
	{
	    return new Promise((resolve, reject) => {
	        request({
	            url: "http://45.55.185.97/api/user/" + id + "/cards",
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
