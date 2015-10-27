(function () {
	angular.module('gstrAlmacen').service('categoriasServices', categoriasServices);

	function categoriasServices() {
		this.categorias = {
			TiposProducto: ['Accesorios', 'Perifericos', 'Componentes', 'Redes', 'Cables']
		};
	}
}());
