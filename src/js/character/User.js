goog.provide('character.User');

/**
 * @constructor
 */
character.User = function() {
	this.raster = new paper.Raster('female');
	this.raster.position = new paper.Point(this.raster.size.width/2 + (60 * 10), this.raster.size.height/2 + (60 * 10));
	this.move = {where:null, amount:0};

	var self = this;
	var tool = new paper.Tool();
	tool.onKeyDown = function(event) {
		if (self.move.amount == 0) {
			self.move.where = event.key;
			self.move.amount = 60;
		}
	};
};

/**
 * @private
 */
character.User.prototype.canMoveHere = function() {
	if (this.move.amount == 60) {
		var goingX = Math.floor((this.raster.position.x)/60);
		if (this.move.where == 'right') {
			goingX = Math.floor((this.raster.position.x + 60)/60);
		} else if (this.move.where == 'left') {
			goingX = Math.floor((this.raster.position.x - 60)/60);
		}

		var curY = Math.floor((this.raster.position.y)/60);
		if (this.move.where == 'up') {
			curY = Math.floor((this.raster.position.y - 60)/60);
		} else if (this.move.where == 'down') {
			curY = Math.floor((this.raster.position.y + 60)/60);
		}

		var obj = app.Map[curY][goingX];

		if (obj && obj.item && !obj.item.canPass) {
			this.move.where = null;
			this.move.amount = 0;
			return false;
		}
	}

	return true;
};

/**
 * @public
 */
character.User.prototype.onFrame = function() {
	if (this.move.amount > 0) {
		if (!this.canMoveHere()) {
			return;
		}

		if (this.move.where == 'right') {
			this.raster.position.x+=4;
		}

		if (this.move.where == 'left') {
			this.raster.position.x-=4;
		}

		if (this.move.where == 'up') {
			this.raster.position.y-=4;
		}

		if (this.move.where == 'down') {
			this.raster.position.y+=4;
		}

		this.move.amount-=4;
	}
};
