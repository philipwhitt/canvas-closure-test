goog.provide('item.Tree');

goog.require('item.InvisibleBlock');
goog.require('item.Item');

/**
 * @constructor
 * @extends {item.Item}
 */
item.Tree = function(x, y) {
	goog.base(this, 'treem', x, y);

	this.canPass = true;

	// if (app.Map[this.row][this.col+1] && !app.Map[this.row][this.col+1].type) {
	// 	app.Map[this.row][this.col+1] = {type: '', item: new item.InvisibleBlock(true)};
	// }

	if (app.Map[this.row+1]) {
		if (app.Map[this.row+1][this.col].type) {
			app.Map[this.row+1][this.col].canPass = false;
		} else {
			app.Map[this.row+1][this.col] = {type: '', item: new item.InvisibleBlock(false)};  // tree trunk 
		}
	}

	if (app.Map[this.row+1] && app.Map[this.row+1][this.col+1]) {
		if (app.Map[this.row+1][this.col+1].type) {
			app.Map[this.row+1][this.col+1].canPass = false
		} else {
			app.Map[this.row+1][this.col+1] = {type: '', item: new item.InvisibleBlock(false)}; // tree trunk
		}
	}
};
goog.inherits(item.Tree, item.Item);