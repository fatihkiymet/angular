(function(app){
	app.directive('comboOpener', [function(){
		return { 
			restrict : 'E',
			template : '<input type="text" class="combo-input"/><span class="combo-arrow"></span>',
			link : function($scope, element, attributes){
				//element.find
			}
		}			
	}]).directive("comboItems", ["$interval", "$document", "$window", function ($interval, $document, $window) {
        return {
            restrict: 'E',
            scope : {
                id : '@',
                model : '=ngModel'
            },
			template : '<div class="combo-wrapper">'
	                +'<input type="text" ng-focus="showMenu()" ng-keydown="showMenu()" ng-blur="active = false" ng-model="query" class="combo-input" ng-model="model.selectedItem.text"/><span class="combo-arrow" ng-click="showMenu()"></span>'					
	                +'<ul id=\"{{id}}-menu\" class=\"combo-menu\" ng-show="active" style="width: {{model.width + \'px\'}};">'		
	                +'<li class=\"row\" ng-repeat=\"item in model.items | filter:query\">{{item.name}}</li>'
	                +'</ul><div style="clear:both"></div></div>',					
            compile: function(tElement, tAttributes)
			{
				tElement.replaceWith(this.template);						
									
	            return function($scope, element, attributes) {					

					var span = element.find('span');
					var input = element.find('input');	
					var elMenu = element.find('ul');
					$scope.selectedItem = {
						text : 'Please Select',
						value : '-1'
					};				
					
					$document.append(elMenu);
					
					$scope.pos = ui.getElementPosition(element[0]);	
					
					if($scope.model.width){
						element.css({ width: $scope.model.width  + 'px'});
					}																													
					
					$scope.$watch("pos", function(newvalue, oldvalue){										
						elMenu.css({ 'top' : newvalue.top + newvalue.height + 'px' , 'left' : newvalue.left + 'px'});						
					});
					
					angular.element($window).on("scroll", function(){
						$scope.pos = ui.getElementPosition(element[0]);	
					});															
																							
					var spanRect = ui.getElementPosition(span[0]);
					input.css({width : $scope.model.width - spanRect.width + 'px'})  
																				
					$scope.select = function($event){
						debugger;
						/*var selectedText = this.innerText;
						angular.forEach($scope.model.items, function(value, key){d						
							if(value == selectedText)
							{
								$scope.selectedItem = key;
							}
						});*/
												
					};
					
	                var showTimeout;				
					
	                $scope.active = false;
	                $scope.items = arrayHelper.init($scope.model);
	
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
	            }
			}
        }
    }]);
})(app);
