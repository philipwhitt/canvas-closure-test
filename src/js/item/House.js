goog.provide('item.House');

goog.require('item.Item');

/**
 * @constructor
 * @extends {item.Item}
 */
item.House = function(x, y) {
	goog.base(this, 'house', x, y);

	this.canPass = false;

	// app.Map[this.row][this.col] = {type: '', item: new item.InvisibleBlock(false)};  // wall
	// app.Map[this.row][this.col+1] = {type: '', item: new item.InvisibleBlock(false)};  // wall
	// app.Map[this.row][this.col+2] = {type: '', item: new item.InvisibleBlock(false)};  // wall

	// if (app.Map[this.row+1]) {
	// 	app.Map[this.row+1][this.col] = {type: '', item: new item.InvisibleBlock(false)};  // wall

	// 	if (app.Map[this.row+1][this.col+1]) {
	// 		app.Map[this.row+1][this.col+1] = {type: '', item: new item.InvisibleBlock(false)};  // wall
	// 	}

	// 	if (app.Map[this.row+1][this.col+2]) {
	// 		app.Map[this.row+1][this.col+2] = {type: '', item: new item.InvisibleBlock(false)};  // wall
	// 	}
	// }

	// if (app.Map[this.row+2]) {
	// 	app.Map[this.row+2][this.col] = {type: '', item: new item.InvisibleBlock(false)};  // wall

	// 	if (app.Map[this.row+2][this.col+2]) {
	// 		app.Map[this.row+2][this.col+2] = {type: '', item: new item.InvisibleBlock(false)};  // wall
	// 	}
	// }
};
goog.inherits(item.House, item.Item);
