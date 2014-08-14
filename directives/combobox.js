(function(app){

})(app)
(function(app){
    app.directive("comboItems", ["$interval", function ($interval) {
        return {
            restrict: 'E',
            scope : {
                id : '@',
                model : '=ngModel'
            },
            template:'<div class="combo-wrapper">'
                +'<input type="text" ng-model="query" class="combo-input"/><span ng-click="showMenu()" class="combo-arrow"></span>'
                +'<ul id=\"{{id}}-menu\" class=\"combo-menu\" ng-show="active">'
                +'<li class=\"row\" ng-repeat=\"item in items | filter:query\">{{item.name}}</li>'
                +'</ul></div>',
            link: function($scope, element, attributes) {
                var showTimeout;

                $scope.active = false;
                $scope.items = arrayHelper.init($scope.model);
                $scope.selectedItem = null;

                $scope.showMenu = function(){
                    if(showTimeout) {
                        $interval.cancel(showTimeout);
                    }
                    $scope.active = true;
                    showTimeout = $interval(function () {
                        $scope.active = false;
                    }, 2000)
                }

                $scope.addItem = function(item) {
                    $scope.items.push(item);
                };

                $scope.removeItem = function (index) {
                    delete $scope.items[index];
                };

                $scope.select = function (item) {
                    $scope.selectedItem = item;
                }
            }
        }
    }]);
})(app);
/**
 * Created by fatih on 8/13/2014.
 */
