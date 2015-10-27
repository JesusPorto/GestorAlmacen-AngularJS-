// tenemos que cambiar la dependencia hacia el nuevo módulo
angular.module('gstrAlmacen', ['ui.router']);

// las rutas ahora se maneja con el concepto de estado
angular.module('gstrAlmacen').config(function ($stateProvider) {
	// Las rutas pasan a ser opcionales,
	// en la práctica sólo se usan si vienen de aplicaciones externas y por cuestiones de SEO
	$stateProvider
		.state('resumen', {
			url: '/',
			controller: 'almacenCtrl as almacen',
			templateUrl: 'resumen.html'
		})
        .state('retirada', {
            url: '/retirada',
            controller: 'LineCtrl as line',
            templateUrl: 'retirada.html'
        })
		.state('nuevo', {
			url: '/nuevo',
			controller: 'almacenCtrl as almacen',
			templateUrl: 'nuevo.html'
		})
		.state('listado', {
			url: '/listado',
			controller: 'almacenCtrl as almacen',
			templateUrl: 'listado.html'
		}).state('not-found', {
			url: '*path',
			templateUrl: 'not-found.html'
		});
	// realmente no existe un estado 'not found',
	// pero puede llegar rutas no controladas
});
