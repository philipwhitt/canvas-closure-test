goog.provide('item.Grass');

goog.require('item.Item');

/**
 * @constructor
 * @extends {item.Item}
 */
item.Grass = function(row, col) {
	goog.base(this, 'grass', row, col);
};
goog.inherits(item.Grass, item.Item);

/** @inheritDoc */
item.Grass.prototype.canPass = function() {
	return true;
};