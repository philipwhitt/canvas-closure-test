goog.provide('item.InvisibleBlock');

goog.require('item.Item');

/**
 * @constructor
 * @extends {item.Item}
 */
item.InvisibleBlock = function(canPass) {
	goog.base(this, null, 0, 0);

	this.canPass = canPass;

	this.isInvisible = true;
};
goog.inherits(item.InvisibleBlock, item.Item);