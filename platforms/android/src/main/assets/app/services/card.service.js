"use strict";
var http_1 = require("http");
var CardService = (function () {
    function CardService() {
    }
    CardService.prototype.addCard = function (data) {
        return new Promise(function (resolve, reject) {
            http_1.request({
                url: "http://45.55.185.97/api/card/add",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify(data)
            })
                .then(function (response) {
                var returnData = JSON.stringify(response.content);
                resolve(returnData);
            })
                .catch(function (err) {
                console.log("Error occurred " + err.stack);
                reject(err.stack);
            });
        });
    };
    CardService.prototype.getAllCards = function (id) {
        return new Promise(function (resolve, reject) {
            http_1.request({
                url: "http://45.55.185.97/api/user/" + id + "/cards",
                method: "GET",
                headers: { "Content-Type": "application/json" },
            })
                .then(function (response) {
                var returnData = JSON.stringify(response.content);
                resolve(returnData);
            })
                .catch(function (err) {
                console.log("Error occurred " + err.stack);
                reject(err.stack);
            });
        });
    };
    return CardService;
}());
exports.CardService = CardService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw2QkFBK0I7QUFJL0I7SUFBQTtJQTZDQSxDQUFDO0lBM0NBLDZCQUFPLEdBQVAsVUFBUSxJQUFTO1FBRWIsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsY0FBTyxDQUFDO2dCQUNKLEdBQUcsRUFBRSxrQ0FBa0M7Z0JBQ3ZDLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRSxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRTtnQkFDL0MsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQ2hDLENBQUM7aUJBQ0QsSUFBSSxDQUFDLFVBQUEsUUFBUTtnQkFDVixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbEQsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxHQUFHO2dCQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMzQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUFZLEVBQU87UUFFZixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixjQUFPLENBQUM7Z0JBQ0osR0FBRyxFQUFFLCtCQUErQixHQUFHLEVBQUUsR0FBRyxRQUFRO2dCQUNwRCxNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7YUFDbEQsQ0FBQztpQkFDRCxJQUFJLENBQUMsVUFBQSxRQUFRO2dCQUNWLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsRCxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDeEIsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFNRixrQkFBQztBQUFELENBQUMsQUE3Q0QsSUE2Q0M7QUE3Q1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSBcImh0dHBcIjtcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuXG5leHBvcnQgY2xhc3MgQ2FyZFNlcnZpY2Uge1xuXG5cdGFkZENhcmQoZGF0YTogYW55KSBcblx0e1xuXHQgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0ICAgICAgICByZXF1ZXN0KHtcblx0ICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly80NS41NS4xODUuOTcvYXBpL2NhcmQvYWRkXCIsXG5cdCAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG5cdCAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcblx0ICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcblx0ICAgICAgICB9KVxuXHQgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcblx0ICAgICAgICAgICAgbGV0IHJldHVybkRhdGEgPSBKU09OLnN0cmluZ2lmeShyZXNwb25zZS5jb250ZW50KTtcblx0ICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5EYXRhKTtcblx0ICAgICAgICB9KVxuXHQgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuXHQgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VycmVkIFwiICsgZXJyLnN0YWNrKTtcblx0ICAgICAgICAgICAgcmVqZWN0KGVyci5zdGFjayk7XG5cdCAgICAgICAgfSlcblx0ICAgIH0pXG5cdH1cblxuXHRnZXRBbGxDYXJkcyhpZDogYW55KSBcblx0e1xuXHQgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0ICAgICAgICByZXF1ZXN0KHtcblx0ICAgICAgICAgICAgdXJsOiBcImh0dHA6Ly80NS41NS4xODUuOTcvYXBpL3VzZXIvXCIgKyBpZCArIFwiL2NhcmRzXCIsXG5cdCAgICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcblx0ICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXHQgICAgICAgIH0pXG5cdCAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHQgICAgICAgICAgICBsZXQgcmV0dXJuRGF0YSA9IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlLmNvbnRlbnQpO1xuXHQgICAgICAgICAgICByZXNvbHZlKHJldHVybkRhdGEpO1xuXHQgICAgICAgIH0pXG5cdCAgICAgICAgLmNhdGNoKGVyciA9PiB7XG5cdCAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igb2NjdXJyZWQgXCIgKyBlcnIuc3RhY2spO1xuXHQgICAgICAgICAgICByZWplY3QoZXJyLnN0YWNrKTtcblx0ICAgICAgICB9KVxuXHQgICAgfSlcblx0fVxuXG5cdFxuXG5cblxufVxuIl19