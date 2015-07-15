goog.provide('item.Item');

goog.require('util.Debug');

/**
 * @constructor
 */
item.Item = function(type, x, y) {
	/** @public */
	this.type = type; 

	/** @public */
	this.canPass = false; 

	/** @public */
	this.isInvisible = false; 

	/** @public */
	this.x = x; 

	/** @public */
	this.y = y;

	/** @public */
	this.row  = Math.floor((y + 60)/60) - 1; 

	/** @public */
	this.col  = Math.floor((x + 60)/60) - 1; 

	if (type) {
		var asset = new paper.Raster(type);
		asset.position = new paper.Point(asset.size.width/2 + x, asset.size.height/2 + y);
	}
};

/**
 * @protected 
 */
item.Item.prototype.log = function(l) {
	util.Debug.log(l);
};