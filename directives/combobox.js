(function (app) {
	app.directive("comboBox", ["$interval", "$document", "$window", function ($interval, $document, $window) {
        return {
            restrict: 'E',
            scope : {
                id : '@',
                items : '='
            },
			template : '<div class="combo-wrapper">'
	                +'<input type="text" ng-focus="showMenu($event)" ng-keydown="showMenu($event)" ng-model="query" class="combo-input"/><span class="combo-arrow" ng-click="showMenu($event)"></span>'
	                +'<ul class=\"combo-menu\" ng-mouseover="showMenu($event)" ng-show="active">'
	                +'<li class=\"row\" ng-click="onSelect($event)" ng-repeat=\"item in items | filter:query\">{{item.name}}</li>'
	                +'</ul><div style="clear:both"></div></div>',
            compile: function (tElement, tAttributes) {
                
				tElement.replaceWith(this.template);
									
	            return function ($scope, element, attributes) {                    
                    
                    var defaultWidth = 180;    
					var span = element.find('span');
					var input = element.find('input');	
					var elMenu = element.find('ul');
                    $scope.pos = ui.getElementPosition(element[0]);	
                    
					$scope.selectedItem  = {
						text : 'Please select an item',
						valselectedItem : '-1'
					};                    
                    
					angular.element($document[0].body).append(elMenu);					
					
					if(!$scope.width){
						$scope.width = defaultWidth;
					}	                                        
                    
                    elMenu.css({ width: $scope.width  + 'px'});
                    element.css({ width: $scope.width  + 'px'});
					
					$scope.$watch("pos", function(newvalue, oldvalue){										
						elMenu.css({ 'top' : newvalue.top + newvalue.height + 'px' , 'left' : newvalue.left + 'px'});						
					});
					
					angular.element($window).on("scroll", function(){
						$scope.pos = ui.getElementPosition(element[0]);	
					});															
																							
					var spanRect = ui.getElementPosition(span[0]);
					input.css({width : $scope.width - spanRect.width + 'px'})  						                    
                    
					$scope.select = function(item){
                        $scope.selectedItem = item;
                        $scope.query = item.name;
                        $scope.active = false;
					};
                    
                    $scope.onSelect = function($event){
                        var item = $scope.getSelectedItem($event.target);
                        $scope.select(item);
                    };
                    
                    $scope.getSelectedItem = function(element){
                        var selectedItem = null;
                        var selectedText = element.innerText;
						angular.forEach($scope.items, function(item, key){						
							if(item.name == selectedText)
							{
								selectedItem = item;
							}
						});
                        
                        return selectedItem;
                    };
					
	                var showTimeout;				
					
	                $scope.active = false;
	                $scope.items = arrayHelper.init($scope.items);
	
	                $scope.showMenu = function($event){
                        
	                    if(showTimeout) {
	                        $interval.cancel(showTimeout);
                        }
                        
	                    $scope.active = true;
                        $scope.pos =  ui.getElementPosition(input[0]);
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
	            }
			}
        }
    }]);
})(app);
