var app = angular.module('angularApp', []);

app.controller('CityController', ['$scope', function ($scope) {
    $scope.comboModel = { 
	items : [
        {
            'name': 'Istanbul',
            'value': 34
        },
        {
            'name': 'Izmir',
            'value': 35
        },
        {
            'name': 'Amasya',
            'value': 3
        },
        {
            'name': 'Balikesir',
            'value': 14
        },
        {
            name: 'Bursa',
            value: '16'
        }
    	],	
		width : 140,
		arrow : {
			width : 25
		}
	}
}]);