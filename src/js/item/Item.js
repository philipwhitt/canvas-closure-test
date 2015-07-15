goog.provide('item.Item');

goog.require('util.Debug');

/**
 * @constructor
 */
item.Item = function(type, x, y) {
	/** @public */
	this.type = type; 

	/** @public */
	this.canPass = true; 

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
};

/**
 * @public 
 */
item.Item.prototype.render = function() {
	if (this.type) {
		var asset = new paper.Raster(this.type);
		asset.position = new paper.Point(asset.size.width/2 + this.x, asset.size.height/2 + this.y);
	}
};

/**
 * @protected 
 */
item.Item.prototype.log = function(l) {
	util.Debug.log(l);
};