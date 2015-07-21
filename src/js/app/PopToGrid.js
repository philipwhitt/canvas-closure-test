goog.provide('app.PopToGrid');

/**
 * @constructor
 */
app.PopToGrid = function() {
	var grid = 50;

	for (var i = 0; i < (600 / grid); i++) {
		canvas.add(new fabric.Line([ i * grid, 0, i * grid, 600], { stroke: '#ccc', selectable: false }));
		canvas.add(new fabric.Line([ 0, i * grid, 600, i * grid], { stroke: '#ccc', selectable: false }))
	}

	var rec = new paper.Path.Rectangle(new paper.Point(100, 100), 50);
	rec.fillColor = 'black';

	rec.onMouseDrag = function(event) {
		var left = Math.round(event.point.x / grid) * grid;
		var top = Math.round(event.point.y / grid) * grid;

		rec.position = new paper.Point(left, top);
	};
};