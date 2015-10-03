app
    .service('Item', ['$http', function($http) {

	    var urlBase = '/api/item';
	    var Item = {};

	    Item.index = function () {
	        return $http.get(urlBase);
	    };
	    Item.homepage = function () {
	        return $http.get(urlBase + '?limit=4');
	    };

	    // Item.getCustomer = function (id) {
	    //     return $http.get(urlBase + '/' + id);
	    // };

	    // Item.insertCustomer = function (cust) {
	    //     return $http.post(urlBase, cust);
	    // };

	    // Item.updateCustomer = function (cust) {
	    //     return $http.put(urlBase + '/' + cust.ID, cust)
	    // };

	    // Item.deleteCustomer = function (id) {
	    //     return $http.delete(urlBase + '/' + id);
	    // };

	    // Item.getOrders = function (id) {
	    //     return $http.get(urlBase + '/' + id + '/orders');
	    // };

	    return Item;
	}])
;

