import { Injectable } from '@angular/core';
import * as appSettings from "application-settings";

export class DBService {

	saveUserData(data: any) {
		appSettings.setString('user', JSON.stringify(data.data.user))
		// appSettings.setString('goals', JSON.stringify(data.data.goals))
		// appSettings.setString('cards', JSON.stringify(data.data.cards))
		// appSettings.setString('goal_record', JSON.stringify(data.data.goal_record))
		appSettings.setString('isLoaded', 'true');

		return true;
	}

	isLoaded(){
		return appSettings.getString('isLoaded')
	}

	logoutUser(){
		appSettings.setString('isLoaded', '')
		return true;
	}

	clearDB(){
		appSettings.clear()
		return true;
	}

	getUser(){
		return JSON.parse(appSettings.getString('user'))
	}

	getCards(){
		return JSON.parse(appSettings.getString('cards'))
	}

	updateCards(new_cards){
		appSettings.setString('cards', JSON.stringify(new_cards))
		return true;
	}

	getGoals(){
		return JSON.parse(appSettings.getString('goals'))
	}

	updateGoals(new_goals)
	{
		appSettings.setString('goals', JSON.parse(JSON.stringify(new_goals)))
		return true;
	}

	getGoalRecord(){
		return JSON.parse(appSettings.getString('goal_record'))
	}



}
