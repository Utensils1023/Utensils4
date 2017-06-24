var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/Product", {
        templateUrl : "Product/Product.html",
        controller: "ProController"
  })
     .when("/Category", {
        templateUrl : "Product/Product.html",
        controller: "ProController"
  })
   .when("/home", {
        templateUrl : "home/home.html",
        controller: "homeController"
 
   })
     .when("/ViewProduct", {
        templateUrl : "ViewProduct/ViewProduct.html",
        controller: "ProController"
 
   })
     .when("/UpdateProduct", {
        templateUrl : "UpdateProduct/UpdateProduct.html",
        controller: "ProController"
 
   })
        .when("/ViewCategory", {
        templateUrl : "ViewProduct/ViewProduct.html",
        controller: "ProController"
 
   })
     .when("/UpdateCategory", {
        templateUrl : "UpdateProduct/UpdateProduct.html",
        controller: "ProController"
 
   })
});