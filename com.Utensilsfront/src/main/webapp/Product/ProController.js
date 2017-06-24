app.controller('ProController', [
		'$scope',
		'$location',
		'ProductService',
		function($scope, $location, $ProductService) {
			console.log('ProController');
			$scope.ProductID = '';
			$scope.ProductName = '';
			$scope.ProductPrice = '';
			$scope.ProductDesc = '';
			$scope.ProductQuant = '';
			$scope.ProductCategory = '';

			console.log('ProController');
			$scope.CreateProduct = function() {

				{

					var json = {

						"ProductName" : $scope.ProductName,
						"ProductPrice" : $scope.ProductPrice,
						"ProductDesc" : $scope.ProductDesc,
						"ProductCategory" : $scope.ProductCategory,
						"ProductQuant" : $scope.ProductQuant,

					};

					console.log(json);

					$ProductService.InsertProduct(json).then(
							function(response) {
								console.log(response);

								$scope.ServerResponse = response.msg;
								$location.path('/home');
								window.setTimeout(function() {
									$scope.$apply($scope.ServerResponse = '');
								}, 5000);
							});
				}
			}

			$scope.data = [];

			$ProductService.ViewProduct().then(function(response) {
				console.log(response);

				$scope.data = response.data;
			});

			$scope.editedItem = {};
			$scope.editrow = function($index) {
				$scope.istrue = true;
				$scope.$index = $index;
				angular.copy($scope.data[$index], $scope.editedItem);
				$scope.editedItem.ProductId;
				$scope.editedItem.ProductName;
				$scope.editedItem.Productategory;
				$scope.editedItem.ProductDescription;
				$scope.editedItem.ProductPrice;
				$scope.editedItem.ProductQuantity
				
				console.log($scope.editedItem);
			}

			$scope.DeleteProduct = function(arg) {

				var json = {

					"ProductID" : arg,

				};
				console.log(json);
				$ProductService.DeleteProduct(json).then(function(response) {
					$ProductService.ViewProduct().then(function(response) {
						console.log(response);

						$scope.data = response.data;
					});
					console.log(response);
				});
			}

			$scope.UpdateProduct = function() {
				console.log("inside update");

				{
					var json = {
						"ProductID" : $scope.editedItem.ProductId,
						"ProductName" : $scope.editedItem.ProductName,
						"ProductPrice" : $scope.editedItem.ProductPrice,
						"ProductDesc" : $scope.editedItem.ProductDescription,
						"ProductCategory" : $scope.editedItem.Productategory,
						"ProductQuant" : $scope.editedItem.ProductQuantity,

					};

					$ProductService.UpdateProduct(json).then(function(response) {
						$ProductService.ViewProduct().then(function(response) {
							console.log(response);

							$scope.data = response.data;
						});
						console.log(response);

					});
				}
			}

		} ]);
