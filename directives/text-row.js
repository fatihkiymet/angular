(function(app){
    app.directive("textRow", [function(){
        return {
            restrict : 'E',
            scope : {
                field : "=field"
            },
            template : '<ul class="row clearfix"><li class="col-label"><label>{{field.caption}}</label></li><li class="col-editor"><input type="text"/></li><li class="col-val"><span class="val-msg"></span></li></ul>',
            link : function($scope, element, attributes){
            }
        }
    }]).directive("comboRow", [function(){
        return {
            require: "^comboBox",
            restrict : 'E',
            transclude : true,
            scope : {
                field : "=field",
                items : "=items"
            },
            template : '<ul class="row clearfix"><li class="col-label"><label>{{field.caption}}</label></li><li class="col-editor"><combo-box items="items"></combo-box></li><li class="col-val"><span class="val-msg"></span></li></ul>',
        }
    }]);
})(app);