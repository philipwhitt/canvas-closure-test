goog.provide('item.Grass');

goog.require('item.Item');

/**
 * @constructor
 * @extends {item.Item}
 */
item.Grass = function(x, y) {
	goog.base(this, 'grass', x, y);

	this.canPass = true;
};
goog.inherits(item.Grass, item.Item);
