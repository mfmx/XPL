app.directive('appInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '=' 
    }, 
    templateUrl: 'js/directives/appInfo.html' 
  }; 
});





//
//app.directive("ImgCarousel", function(){
//
//
//});


//app.directive('appInfo', function() { 
//  return { 
//    restrict: 'E', 
//      require:"^ngModel",
//    scope: {
//      ngModel: '='
//    },
//      template: '<app-info><h4>Welcome Back {{ngModel}}</h4></app-info>'  }; 
//});