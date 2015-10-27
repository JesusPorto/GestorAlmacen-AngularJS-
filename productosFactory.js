(function () {

	angular.module('gstrAlmacen').factory('productosFactory', productosFactory);

	function productosFactory()  {

		var Productos = [];

		var total = {
			cantidad: 0,
			importeTotal: 0
		};

		var result  =   {};


		result.getProductos =   function ()  {
			return Productos;
		};

		result.getTotal =   function ()  {
			return total;
		};

		result.postProductos =   function (producto)  {
			Productos.push(producto);
			total.cantidad += producto.cantidad;
			total.importeTotal += (producto.valorud * producto.cantidad);
		};
        
        result.deleteProductos =   function (producto)  {
			Productos.push(producto);
			total.cantidad += producto.cantidad;
			total.importeTotal += (producto.valorud * producto.cantidad);
		};
		return result;
	};

}());
