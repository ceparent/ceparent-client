var app = angular.module('ceparent', [
    'ceparent.home',
    'ceparent.blog',
    'ceparent.project',
    'ceparent.projectDetail',
    'ceparent.contact',
    'ui.bootstrap',
    'ngRoute'
]).config(function ($routeProvider) {


    $routeProvider.when('/', {
        title: "About",
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    }).when('/blog', {
        title: "Blog",
        templateUrl: 'templates/blog.html',
        controller: 'BlogController'
    }).when('/projects', {
        title: "Projects",
        templateUrl: 'templates/project.html',
        controller: 'ProjectController'
    }).when('/projects/detail', {
        title: "Details",
        templateUrl: 'templates/projectDetail.html',
        controller: 'ProjectDetailController'
    }).when('/contact', {
        title: "Contact me",
        templateUrl: 'templates/contact.html',
        controller: 'ContactController',
        hideFooter: true
    });
    $routeProvider.otherwise({ redirectTo: '/' });


}).run(['$location', '$rootScope', function($location, $rootScope) {
        $rootScope.title = '';
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
            $rootScope.hideFooter = current.$$route.hideFooter;
        });
}]).directive('ngCode', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attributes){
            prettyPrint();
        },
        transclude: true,
        scope: {
            language: '@ngCode'
        },
        template: "<pre class='prettyprint linenums lang-{{language}}'><code ng-transclude></code></pre>"
    };
});
