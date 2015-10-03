app
	.controller('HomeController', ['$scope','Item', function ($scope, Item) {
		
	    $scope.status;
	    $scope.items;

        Item.homepage()
            .success(function (data) {
                $scope.items = data.body.data;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
	}])

;

