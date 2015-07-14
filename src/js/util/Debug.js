goog.provide('util.Debug');

/**
 * @public
 */
util.Debug.log = function(data) {
	if (window.console && window.console.log) {
		window.console.log(data);
	}
};
