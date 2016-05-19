var app = angular.module("offer", ['pascalprecht.translate']);

app.config(function($translateProvider) {
	$translateProvider.translations('en', {
		PLAN_SELECTED 	: 'Selected plan',
		PRICE 			: 'Price',
		SERVER_COUNT	: 'Server Count',
		ADS 			: 'Ads',
		OFFER_FREE		: 'Free',
		OFFER_PREMIUM	: 'Premium',
		OFFER_GOLD		: 'Gold',
		OFFER_1 		: "Gratuit",
		OFFER_2 		: "Premium",
		OFFER_3 		: "Gold",
		MONTH 			: 'Month',
		MAX 			: 'Max',
		FEW 			: 'Few',
		NONE 			: 'None',
		TRANSLATE_EN	: "Translate to english",
		TRANSLATE_FR	: "Traduire en français"
	})
	.translations('fr', {
		PLAN_SELECTED 	: 'Offre sélectionnée',
		PRICE 			: 'Prix',
		SERVER_COUNT	: 'Nombre de serveurs',
		ADS 			: 'Publicité',
		OFFER_1 		: "Gratuit",
		OFFER_2 		: "Premium",
		OFFER_3 		: "Gold",
		OFFER_FREE		: 'Gratuit',
		OFFER_PREMIUM	: 'Premium',
		OFFER_GOLD		: 'Gold',
		MONTH 			: 'Mois',
		MAX 			: 'Max',
		FEW 			: 'Peu',
		NONE 			: 'Aucune',
		TRANSLATE_EN	: "Translate to english",
		TRANSLATE_FR	: "Traduire en français"
	});
	$translateProvider.preferredLanguage('en');
});

var product = angular.module('product', []);

app.controller('ProductListCtrlr', function ($scope, $translate) {
	$scope.products = [
		{
			'name'			: 'Free',
			'price' 		: '0',
			'ads' 			: 'Max',
			'serverCount'	: '1'
		},
		{
			'name'			: 'Premium',
			'price'			: '10.99',
			'ads' 			: "Few",
			'serverCount'   : '5'
		},
		{
			'name'			: 'Gold',
			'price'			: '19.99',
			'ads' 			: "None",
			'serverCount'   : '10'
		}
	];

	$scope.changeLanguage = function (key) {
		$translate.use(key);
	}
});