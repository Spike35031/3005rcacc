(function(window, document, undefined) {
	var $ = window.larua = {};

	$.readyListeners = [];

	window.onload = function() {
		$.foreach($.readyListeners, function(listener) {
			listener();
		});
		$.readyListeners.push = function(listener) {
			listener();
		};
	};

	$.foreach = function(array, operation) {
		for (var i = 0; i < array.length; i++) {
			operation(array[i], i);
		}
	};

	
})(window, document)