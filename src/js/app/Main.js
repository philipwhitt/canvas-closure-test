goog.provide('app.Main');

goog.require('util.Debug');

/**
 * @constructor
 */
app.Main = function() {
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
		copy.rotate(.5);
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
main.example2();
paper.view.draw();
paper.view.play();
