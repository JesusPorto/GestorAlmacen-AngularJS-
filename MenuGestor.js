(function () {
	angular.module('gstrAlmacen').controller('MenuGestor', menuGestor);
	// Ahora el sercvicio se llama $state
	function menuGestor($state) {
		this.isActive = function (estado) {
			// Tiene funciones más amigables para consultar
			return $state.is(estado);
		}
	}
}());
