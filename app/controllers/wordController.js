(function(){
    'use strict';

angular
    .module('myApp', [
    ]).controller('wordController', function($scope,$http) {

    $http.get('word.json').success(function(response){
        $scope.myWords = response;
    });
});
})();