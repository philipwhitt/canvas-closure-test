goog.provide('app.Main');

goog.require('util.Debug');

/**
 * @constructor
 */
app.Main = function() {
};

/** @public */
app.Main.prototype.draw = function() {
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

var main = new app.Main();
var canvas = document.getElementById('canvas');

paper.setup(canvas);
main.draw();
paper.view.draw();
paper.view.play();
