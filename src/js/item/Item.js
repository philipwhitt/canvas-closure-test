goog.provide('item.Item');

/**
 * @constructor
 */
item.Item = function(type, row, col) {
	/** @protected */

	this.type_ = type; 

	/** @protected */
	this.row_  = row; 

	/** @protected */
	this.col_  = col;

	var asset = new paper.Raster(type);
	asset.position = new paper.Point(asset.size.width/2 + row, asset.size.height/2 + col);
};

/**
 * @public 
 */
item.Item.prototype.canPass = function() {
	return false;
};