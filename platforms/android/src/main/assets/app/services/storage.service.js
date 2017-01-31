"use strict";
var appSettings = require("application-settings");
var DBService = (function () {
    function DBService() {
    }
    DBService.prototype.saveUserData = function (data) {
        appSettings.setString('user', JSON.stringify(data.data.user));
        // appSettings.setString('goals', JSON.stringify(data.data.goals))
        // appSettings.setString('cards', JSON.stringify(data.data.cards))
        // appSettings.setString('goal_record', JSON.stringify(data.data.goal_record))
        appSettings.setString('isLoaded', 'true');
        return true;
    };
    DBService.prototype.isLoaded = function () {
        return appSettings.getString('isLoaded');
    };
    DBService.prototype.logoutUser = function () {
        appSettings.setString('isLoaded', '');
        return true;
    };
    DBService.prototype.clearDB = function () {
        appSettings.clear();
        return true;
    };
    DBService.prototype.getUser = function () {
        return JSON.parse(appSettings.getString('user'));
    };
    DBService.prototype.getCards = function () {
        return JSON.parse(appSettings.getString('cards'));
    };
    DBService.prototype.updateCards = function (new_cards) {
        appSettings.setString('cards', JSON.stringify(new_cards));
        return true;
    };
    DBService.prototype.getGoals = function () {
        return JSON.parse(appSettings.getString('goals'));
    };
    DBService.prototype.updateGoals = function (new_goals) {
        appSettings.setString('goals', JSON.parse(JSON.stringify(new_goals)));
        return true;
    };
    DBService.prototype.getGoalRecord = function () {
        return JSON.parse(appSettings.getString('goal_record'));
    };
    return DBService;
}());
exports.DBService = DBService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmFnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RvcmFnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxrREFBb0Q7QUFFcEQ7SUFBQTtJQXVEQSxDQUFDO0lBckRBLGdDQUFZLEdBQVosVUFBYSxJQUFTO1FBQ3JCLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFBO1FBQzdELGtFQUFrRTtRQUNsRSxrRUFBa0U7UUFDbEUsOEVBQThFO1FBQzlFLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ3pDLENBQUM7SUFFRCw4QkFBVSxHQUFWO1FBQ0MsV0FBVyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDckMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7SUFFRCwyQkFBTyxHQUFQO1FBQ0MsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLFNBQVM7UUFDcEIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFBO1FBQ3pELE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsK0JBQVcsR0FBWCxVQUFZLFNBQVM7UUFFcEIsV0FBVyxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNyRSxNQUFNLENBQUMsSUFBSSxDQUFDO0lBQ2IsQ0FBQztJQUVELGlDQUFhLEdBQWI7UUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7SUFDeEQsQ0FBQztJQUlGLGdCQUFDO0FBQUQsQ0FBQyxBQXZERCxJQXVEQztBQXZEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGFwcFNldHRpbmdzIGZyb20gXCJhcHBsaWNhdGlvbi1zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgREJTZXJ2aWNlIHtcblxuXHRzYXZlVXNlckRhdGEoZGF0YTogYW55KSB7XG5cdFx0YXBwU2V0dGluZ3Muc2V0U3RyaW5nKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXIpKVxuXHRcdC8vIGFwcFNldHRpbmdzLnNldFN0cmluZygnZ29hbHMnLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuZ29hbHMpKVxuXHRcdC8vIGFwcFNldHRpbmdzLnNldFN0cmluZygnY2FyZHMnLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuY2FyZHMpKVxuXHRcdC8vIGFwcFNldHRpbmdzLnNldFN0cmluZygnZ29hbF9yZWNvcmQnLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuZ29hbF9yZWNvcmQpKVxuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZygnaXNMb2FkZWQnLCAndHJ1ZScpO1xuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpc0xvYWRlZCgpe1xuXHRcdHJldHVybiBhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2lzTG9hZGVkJylcblx0fVxuXG5cdGxvZ291dFVzZXIoKXtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ2lzTG9hZGVkJywgJycpXG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRjbGVhckRCKCl7XG5cdFx0YXBwU2V0dGluZ3MuY2xlYXIoKVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0VXNlcigpe1xuXHRcdHJldHVybiBKU09OLnBhcnNlKGFwcFNldHRpbmdzLmdldFN0cmluZygndXNlcicpKVxuXHR9XG5cblx0Z2V0Q2FyZHMoKXtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2NhcmRzJykpXG5cdH1cblxuXHR1cGRhdGVDYXJkcyhuZXdfY2FyZHMpe1xuXHRcdGFwcFNldHRpbmdzLnNldFN0cmluZygnY2FyZHMnLCBKU09OLnN0cmluZ2lmeShuZXdfY2FyZHMpKVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0Z2V0R29hbHMoKXtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2dvYWxzJykpXG5cdH1cblxuXHR1cGRhdGVHb2FscyhuZXdfZ29hbHMpXG5cdHtcblx0XHRhcHBTZXR0aW5ncy5zZXRTdHJpbmcoJ2dvYWxzJywgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXdfZ29hbHMpKSlcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGdldEdvYWxSZWNvcmQoKXtcblx0XHRyZXR1cm4gSlNPTi5wYXJzZShhcHBTZXR0aW5ncy5nZXRTdHJpbmcoJ2dvYWxfcmVjb3JkJykpXG5cdH1cblxuXG5cbn1cbiJdfQ==