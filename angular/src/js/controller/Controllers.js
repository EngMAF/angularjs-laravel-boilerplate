app

	.controller('navCtrl', ['$scope','$http', function ($scope, $http) {
		// $http.get( api + '/story').
		// 	success(function(data, status, headers, config) {
		// 		$scope.data = data;	 
		// });
		// $scope.url=function(item){
		//     return '#/story/'+item.id
		// }
	}])

	.controller('HomeController', ['$scope','$http', '$routeParams', '$sce', function ($scope, $http, $routeParams, $sce) {

		// $http.get( api + '/story/' + $routeParams.story_id).
		// 	success(function(data, status, headers, config) {
		// 		$scope.data = data;	 
		// });
		// $scope.$parent.img = "public/img/iconset-addictive-flavour-set/png/box_address.png";
		// $scope.body = function () {
		// 	return $sce.trustAsHtml($scope.data.body);
		// }
	}])

;

