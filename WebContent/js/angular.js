var app = angular.module('myApp', []);
app.controller('validateCtrl', ["$scope",function($scope, $routeParams, $location) {
    
    $scope.name="";
    $scope.email = '';
    $scope.pwd = '';
    
    
    $scope.go= function(){
window.location = 'loggedin.html';

    };
    console.log($scope.go);
    }
    ]);


app.controller("aboutUsController",["$scope", function($scope){
                             
$scope.prods=[{name:"customer service quality", img:"images/slider-img1.png", likes:0, dislikes:0},
{name:"Parking lot Service quality",img:"images/20130828_the-parking-lot-community-group_banner_img-2.jpg", likes:0, dislikes:0}];

 
$scope.plusOne = function(index) {         
  	$scope.prods[index].likes+=1};
               

}
	                                    
 ]);


