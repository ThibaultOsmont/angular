var product = angular.module('product', []);

product.controller('ProductListCtrlr', function ($scope) {
	$scope.products = [
		{
			'name'			: 'Free',
			'price' 		: '0',
			'ads' 			: 'max',
			'serverCount'	: '1'
		},
		{
			'name'			: 'Premium',
			'price'			: '10.99',
			'ads' 			: "few",
			'serverCount'   : '5'
		},
		{
			'name': 'Gold',
			'price'			: '19.99',
			'ads' 			: "nope",
			'serverCount'   : '10'
		}
	];
});