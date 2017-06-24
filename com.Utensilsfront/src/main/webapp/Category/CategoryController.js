app.controller('CategoryController', [
		'$scope',
		'$location',
		'CategoryService',
		function($scope, $location, $CategoryService) {
			console.log('CategoryController');
			$scope.CategoryID = '';
			$scope.CategoryName = '';

			$scope.CreateCategory = function() {

				{

					var json = {

						"CategoryName" : $scope.CategoryName,
					

					};

					console.log(json);

					$CategoryService.InsertCategory(json).then(
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

			$CategoryService.ViewCategory().then(function(response) {
				console.log(response);

				$scope.data = response.data;
			});

			$scope.editedItem = {};
			$scope.editrow = function($index) {
				$scope.istrue = true;
				$scope.$index = $index;
				angular.copy($scope.data[$index], $scope.editedItem);
				$scope.editedItem.CategoryId;
				$scope.editedItem.CategoryName;
				
				console.log($scope.editedItem);
			}

			$scope.DeleteCategory = function(arg) {

				var json = {

					"CategoryID" : arg,

				};
				console.log(json);
				$CategoryService.DeleteCategory(json).then(function(response) {
					$CategoryService.ViewCategory().then(function(response) {
						console.log(response);

						$scope.data = response.data;
					});
					console.log(response);
				});
			}

			$scope.UpdateCategory = function() {
				console.log("inside update");

				{
					var json = {
						"CategoryID" : $scope.editedItem.CategoryId,
						"CategoryName" : $scope.editedItem.CategoryName,
					

					};

					$CategoryService.UpdateCategory(json).then(function(response) {
						$CategoryService.ViewCategory().then(function(response) {
							console.log(response);

							$scope.data = response.data;
						});
						console.log(response);

					});
				}
			}

		} ]);
