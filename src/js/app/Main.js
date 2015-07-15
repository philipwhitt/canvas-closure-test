goog.provide('app.Main');

goog.require('app.Map');
goog.require('util.Debug');

/**
 * @constructor
 */
app.Main = function() {};

/** @public */
app.Main.prototype.grid = function() {
	paper.project.activeLayer.removeChildren();

	// this.drawGrid();
	this.addItems();
	
	var character = new paper.Raster('female');
	character.position = new paper.Point(character.size.width/2 + (60 * 10), character.size.height/2 + (60 * 10));

	var tool = new paper.Tool();
	var move={where:null, amount:0};
	tool.onKeyDown = function(event) {
		if (move.amount == 0) {
			move.where = event.key;
			move.amount = 60;
		}
	};

	paper.view.onFrame = function(event) {
		if (move.amount > 0) {
			if (move.where == 'right') {
				character.position.x+=4;
			}

			if (move.where == 'left') {
				character.position.x-=4;
			}

			if (move.where == 'up') {
				character.position.y-=4;
			}

			if (move.where == 'down') {
				character.position.y+=4;
			}

			move.amount-=4;
		}	
	};
};

/** @public */
app.Main.prototype.addItems = function() {
	var curX = 0;
	var curY = 0;

	// row
	for (var row = 0, len=app.Map.length; row<len; row++) {
		// col
		for (var col = 0, lenCol=app.Map[row].length; col<lenCol; col++) {
			var target = app.Map[row][col];

			if (target.type) {
				var asset = new paper.Raster(target.type);
				asset.position = new paper.Point(asset.size.width/2 + curX, asset.size.height/2 + curY);
			}

			curX += 60;
		}

		curX = 0;
		curY += 60;
	}
};

/** @public */
app.Main.prototype.drawGrid = function() {
	var curX = 0;
	var curY = 0;

	while (true) {
		var path = new paper.Path.Rectangle(
			new paper.Point(curX, curY), 
			new paper.Size(60, 60)
		);
		path.style = {
			fillColor   : '#62B821',
			strokeColor : '#5BB01B'
		};
		curX += 60;

		if (curX > paper.view.size.width) {
			curX = 0;
			curY += 60;
		}

		if (curY > paper.view.size.height) {
			break;
		}
	}
};

var main = new app.Main();
var canvas = document.getElementById('canvas');

paper.setup(canvas);
main.grid();
paper.view.draw();
paper.view.play();

paper.view.onResize = function(event) {
	main.grid();
};
