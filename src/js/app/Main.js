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

	// Create a copy of the path and set its stroke color to red:
	var copy = path.clone();
	copy.strokeColor = 'red';

	// Save the bottom left position of the path's bounding box:
	var point = copy.bounds.bottomLeft;

	paper.view.onFrame = function(event) {
		path.rotate(3);
	};

	paper.view.draw();
};

/** @public */
app.Main.prototype.play = function() {
	paper.view.play();
};






var main = new app.Main();

var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

paper.setup(canvas);

// resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);

resizeCanvas();

function resizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	
	main.draw();
	main.play();
}