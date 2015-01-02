var app = angular.module('ceparent.project', [])
    .controller('ProjectController', function ($scope, $rootScope) {


        $scope.projects = []; // TODO: a la fin mettre un faux projet qui mene à contact disant "next one with you"

        $scope.fakeload = function(){

            for(var i = 0; i < 10; i++){

                $scope.projects.push({
                    "id":i,
                    "imageURL":"http://lorempixel.com/900/900/abstract/" + (i + 1),
                    "description":"lorem ipsum"
                });

            }


        }

        $scope.init = function(){
            $scope.fakeload();
        }
        $scope.init();


});