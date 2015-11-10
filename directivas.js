(function () {
    
	angular.module('gaDirectivas', [])
        .directive('gaSeleccionado', seleccionado);
	
    function seleccionado() {
        return {
            link: function (scope, element, attrs) {
                element.bind('mouseenter', function () {
                    element.css('background-color', '#D3D3D3');
					element.css('cursor', 'hand');
                });
                element.bind('mouseleave', function () {
                    element.css('background-color', '#FFFFFF');
					element.css('cursor', 'pointer');
                });
            }
        };
    }
}());