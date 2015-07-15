goog.provide('app.Main');

goog.require('app.Map');
goog.require('util.Debug');
goog.require('item.Grass');
goog.require('item.Item');

/**
 * @constructor
 */
app.Main = function() {};

/** @public */
app.Main.prototype.draw = function() {
	paper.project.activeLayer.removeChildren();
	
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

	this.addItems();

	this.drawGrid();

	var lastLoop = new Date;
	var frames = 0;
	var text = new paper.PointText({
		content   : 'FPS (0)',
		point     : new paper.Point(20, 30),
		fillColor : 'black'
	});

	paper.view.onFrame = function(event) {
		frames++;
		var thisLoop = new Date;
	    var fps = 1000 / (thisLoop - lastLoop);

	    lastLoop = thisLoop;
	    if (frames >= 5) {
	    	text.content = 'FPS (' + Math.round(fps).toString() + ')';
	    	frames=0;
	    }

		if (move.amount > 0) {
			if (move.where == 'right') {
				if (move.amount == 60) {
					var goingX = Math.floor((character.position.x + 60)/60);
					var curY = Math.floor((character.position.y)/60);

					var obj = app.Map[curY][goingX];

					if (obj && obj.item && !obj.item.canPass()) {
						move.where = null;
						move.amount = 0;
						return;
					}
				}

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

			if (target.type == 'grass') {
				app.Map[row][col].item = new item.Grass(curX, curY);

			} else if (target.type) {
				app.Map[row][col].item = new item.Item(target.type, curX, curY);
				// var asset = new paper.Raster(target.type);
				// asset.position = new paper.Point(asset.size.width/2 + curX, asset.size.height/2 + curY);
			}

			curX += 60;
		}

		curX = 0;
		curY += 60;
	}
};

/** @public */
app.Main.prototype.drawGrid = function() {
	var curX = 60;
	var curY = 60;

	// draw Y
	while (true) {
		var yLine = new paper.Path.Line(
			new paper.Point(0, curY),
			new paper.Point(paper.view.size.width, curY)
		);
		yLine.strokeColor = '#5BB01B';

		curY += 60;

		if (curY > paper.view.size.height) {
			break;
		}
	}

	// draw X
	while (true) {
		var xLine = new paper.Path.Line(
			new paper.Point(curX, 0),
			new paper.Point(curX, paper.view.size.height)
		);
		xLine.strokeColor = '#5BB01B';

		curX += 60;

		if (curX > paper.view.size.width) {
			break;
		}
	}
};

var main = new app.Main();
var canvas = document.getElementById('canvas');

paper.setup(canvas);
main.draw();
paper.view.draw();
paper.view.play();

paper.view.onResize = function(event) {
	main.draw();
};
