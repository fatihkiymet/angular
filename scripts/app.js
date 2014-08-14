var app = angular.module('angularApp', []);

app.controller('CityController', ['$scope', function ($scope) {
    $scope.cities = [
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
    ];
}]);