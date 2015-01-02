var app = angular.module('ceparent.projectDetail', [])
    .controller('ProjectDetailController', function ($scope, $rootScope) {


        $scope.project = {
            "id" : 1,
            "name": "ceparent.info",
            "image":"img/ceparentInfo.PNG",
            "description": "my personal web site",
            "features":[
                "One-page AngularJs client",
                "Java web api backend",
                "Fully responsive Boostrap3 design",
                "OAuth2 token-based authentification",
                "Admin cms panel"
            ],
            "technologies":[
                "AngularJS",
                "DropWizard(Jetty, Jersey, Jackson, LiquiBase, Hibernate)",
                "Bootstrap 3"
            ],
            "links":[
                {
                    "name":"Website",
                    "url":"http://ceparent.info"
                },
                {
                    "name":"Github repo (client only)",
                    "url":"https://github.com/ceparent/ceparent-client"
                }
            ]
        }



    });