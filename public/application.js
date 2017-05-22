var app = angular.module('kB', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/categories', {
        templateUrl: 'views/categories_view.html',
        controller: 'CategoriesCtrl'
    })
    .when('/articles', {
        templateUrl: 'views/articles_view.html',
        controller: 'ArticlesCtrl'
    })
    .when('/articles/details/:id', {
        templateUrl: 'views/article-details_view.html',
        controller: 'ArticleDetailsCtrl'
    })
    .when('/articles/category/:category', {
        templateUrl: 'views/cat_articles_view.html',
        controller: 'ArticlesCategoryCtrl'
    })
    .when('/articles/add', {
        templateUrl: 'views/add-article_view.html',
        controller: 'ArticlesCreateCtrl'
    })
    .when('/articles/edit/:id', {
        templateUrl: 'views/edit-article_view.html',
        controller: 'ArticlesEditCtrl'
    })
    .otherwise({redirectTo: '/categories'})
}]);
