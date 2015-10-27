(function () {
	angular.module('gstrAlmacen').controller('almacenCtrl', almacenCtrl);

	function almacenCtrl(productosFactory, categoriasServices) {
		var vm = this;

		vm.titulo = "Almacén informático";
		vm.maestros = categoriasServices.categorias;
		vm.nuevoProducto = {
            nombre: '',
			cantidad: 0,
			valorud: 0,
            descripcion: '',
			fecha: new Date()
		};

		vm.productos = productosFactory.getProductos();
		vm.total = productosFactory.getTotal();

		vm.guardarProducto = function () {
			var auxCopyProd = angular.copy(vm.nuevoProducto);
			productosFactory.postProductos(auxCopyProd);
			vm.nuevoProducto.nombre = '';
            vm.nuevoProducto.cantidad = 0;
            vm.nuevoProducto.valorud = 0;
            vm.nuevoProducto.fecha = new Date();
            vm.nuevoProducto.descripcion = '';
		}
        
        vm.retirarProducto = function() {
            var auxCopyProd = angular.copy(vm.retiradaProducto);
        }
        
		vm.tipo = productosFactory.tipo;
	}

}());
