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

	this.drawGrid();
	this.addItems();
	
	var character = new paper.Raster('female');
	character.position = new paper.Point(character.size.width/2, character.size.height/2);

	var tool = new paper.Tool();
	tool.onKeyDown = function(event) {
		if (event.key == 'right') {
			character.position.x += 60;
		}

		if (event.key == 'left') {
			character.position.x -= 60;
		}

		if (event.key == 'up') {
			character.position.y -= 60;
		}

		if (event.key == 'down') {
			character.position.y += 60;
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

/** @public */
app.Main.prototype.terrain = function() {
	paper.project.activeLayer.removeChildren();

	var path = new paper.Path.Rectangle(new paper.Point(80, 50), new paper.Size(paper.view.size.width, paper.view.size.height));
	path.style = {
		fillColor   : '#62B821',
		strokeColor : '#62B821'
	};
	path.position = paper.view.center;
	paper.view.onResize = function(event) {
		path.position = paper.view.center;
		path.size = new paper.Size(paper.view.size.width, paper.view.size.height);
	};

	var grass = new paper.Raster('grass');
	grass.position = paper.view.center;

	var grass2 = grass.clone();
	grass2.position.y += 60;

	grass2 = grass2.clone();
	grass2.position.y += 60;

	var home = new paper.Raster('house');
	home.position = paper.view.center;
	home.position.x += 120;
	home.position.y += 60;

	// home.onMouseDown = function(event) {
	// 	util.Debug.log('down');
	// 	util.Debug.log(event);
	// };
	// home.onMouseMove = function(event) {
	// 	util.Debug.log('moving');
	// 	util.Debug.log(event);
	// };
	// home.onMouseUp = function(event) {
	// 	util.Debug.log('up');
	// 	util.Debug.log(event);
	// 	home.position = event.point;
	// };
};

/** @public */
app.Main.prototype.example1 = function() {
	paper.project.activeLayer.removeChildren();

	var path = new paper.Path.Rectangle(new paper.Point(80, 50), new paper.Size(100, 50));
	path.style = {
		fillColor: 'white',
		strokeColor: 'black'
	};
	path.position = paper.view.center;

	// Create a copy of the path and set its stroke color to red:
	var copy = path.clone();
	copy.strokeColor = 'red';

	// Save the bottom left position of the path's bounding box:
	var point = copy.bounds.bottomLeft;

	paper.view.onFrame = function(event) {
		path.rotate(3);
		// copy.rotate(.5);
	};

	paper.view.onResize = function(event) {
		path.position = paper.view.center;
		copy.position = paper.view.center;
	};
};

/** @public */
app.Main.prototype.example2 = function() {
	paper.project.activeLayer.removeChildren();

	var path;
	var tool = new paper.Tool();

	var textItem = new paper.PointText({
		'content': 'Click and drag to draw a line.',
		'point': new paper.Point(20, 30),
		'fillColor': 'black'
	});

	tool.onMouseDown = function(event) {
		if (path) {
			path.selected = false;
		}

		path = new paper.Path({
			'segments': [event.point],
			'strokeColor': 'black',
			'fullySelected': true
		});
	}

	tool.onMouseDrag = function(event) {
		path.add(event.point);
		textItem.content = 'Segment count: ' + path.segments.length;
	}

	tool.onMouseUp = function(event) {
		var segmentCount = path.segments.length;
		path.simplify(10);
		path.fullySelected = true;

		var newSegmentCount = path.segments.length;
		var difference = segmentCount - newSegmentCount;
		var percentage = 100 - Math.round(newSegmentCount / segmentCount * 100);
		textItem.content = difference + ' of the ' + segmentCount + ' segments were removed. Saving ' + percentage + '%';
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
