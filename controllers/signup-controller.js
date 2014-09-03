(function(app){
    app.controller('SignUpController', ['$scope', function($scope){
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
        
        $scope.fields = [
            {
                caption : 'Name',
                name : 'Name',
                type : 'text',
                maxLength : '50',
                minLength : '3',
                required : true
            },            
            {
                caption : 'E-Mail',
                name : 'email',
                type : 'email',
                required : true
            },
            {
                caption : 'City',
                name : 'cityId',    
                type : 'combo',
                required : true,
                items: $scope.cities
            }            
        ];
    }]);
})(app);