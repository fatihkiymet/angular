arrayHelper = {
    init: function (arr) {
        if (angular.isArray(arr)) {
            return arr;
        } else {
            return [];
        }
    }
};

