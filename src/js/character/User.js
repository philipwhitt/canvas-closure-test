goog.provide('character.User');

/**
 * @constructor
 */
character.User = function() {
	this.type = 'female';
};

/**
 * @public
 */
character.User.prototype.render = function() {
	var midRows = Math.round(paper.view.size.height / 60 / 2);
	var midCols = Math.round(paper.view.size.width / 60 / 2 );

	this.raster = new paper.Raster(this.type);
	this.raster.position = new paper.Point(midCols * 60, midRows * 60);
	this.move = {where:null, amount:0};

	var self = this;
	var tool = new paper.Tool();

	tool.onKeyDown = function(event) {
		if (self.move.amount == 0) {
			self.moveTo(event.key);

			// if (self.move.where == 'right') {
			// 	app.Main.socket.send('{"action" : "right"}');
			// }

			// if (self.move.where == 'left') {
			// 	app.Main.socket.send('{"action" : "left"}');
			// }

			// if (self.move.where == 'up') {
			// 	app.Main.socket.send('{"action" : "up"}');
			// }

			// if (self.move.where == 'down') {
			// 	app.Main.socket.send('{"action" : "down"}');
			// }
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

		var obj = app.Map[curY] ? app.Map[curY][goingX] : null;

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
character.User.prototype.moveTo = function(where) {
	this.move.where = where;
	this.move.amount = 60;
};

/**
 * @public
 */
character.User.prototype.onFrame = function() {
	if (this.move.amount > 0) {
		// if (!this.canMoveHere()) {
		// 	return;
		// }

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
