angular.module("kB")

.controller('ArticlesCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('/articles').then(function(data){
        $scope.articles = data;
    });
}])


.controller('ArticlesCategoryCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
    $http.get('/articles/category/'+$routeParams.category).then(function(data){
        $scope.cat_articles = data;
        $scope.category = $routeParams.category;
    });
}])


.controller('ArticleDetailsCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('/articles/'+$routeParams.id).then(function(data){
        $scope.article = data;
    });
    
    $scope.removeArticle = function() {
      
        console.log($routeParams.id);
        $http.delete('/articles/'+$routeParams.id).then(function(data) {
            
        });
        
        $location.path('/articles');
    };
    
}])


.controller('ArticlesCreateCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('/categories').then(function(data){
        $scope.categories = data;
    });
    
    $scope.addArticle = function() {
        var data = {
            title: $scope.title,
            category: $scope.category.name,
            body: $scope.body
        }
        
        $http.post('/articles', data).then(function() {
            
        });
        
        $location.path('/articles');
    }
}])


.controller('ArticlesEditCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location){
    $http.get('/categories').then(function(data){
        $scope.categories = data;
    });
    
  $http.get('/articles/'+$routeParams.id).then(function(data){
        $scope.article = data;
    });
    
    $scope.updateArticle = function() {
        var data = {
            id:       $routeParams.id,
            title:    $scope.article.data.title,
            category: $scope.article.data.category,
            body:     $scope.article.data.body
        }
        
        console.log(data);
        
        $http.put('/articles', data).then(function(data, status) {
            console.log(status);
        });
        
        $location.path('/articles');
    }
}])