goog.provide('app.PopToGrid');

/**
 * @constructor
 */
app.PopToGrid = function() {
	var grid = 60;
	var width = paper.view.size.width / grid;
	var height = paper.view.size.height / grid;

	// var winWidth = $(document).width();
	// var winHeight = $(document).height();

	var winWidth = paper.view.size.width;
	var winHeight = paper.view.size.height;

	var grass = new paper.Raster('grass');
	var symbol = new paper.Symbol(grass);

	for (var i=0; i<=winHeight; i++) {
		for (var ii = 0; ii <= winWidth; ii++) {
			var col = ii * grid;
			var row = i * grid;

			if (col > winWidth || row > winHeight) {
				break;
			}

			var grass2 = symbol.place();
			grass2.position = new paper.Point(col, row);
		}
	}

	var rec = new paper.Path.Rectangle(new paper.Point(grid * 4, grid * 5), grid);
	rec.fillColor = 'black';

	rec.onMouseDrag = function(event) {
		var left = Math.round(event.point.x / grid) * grid;
		var top = Math.round(event.point.y / grid) * grid;

		if (left > 600 || top < 0 || top > 600 || left < 0) {
			return;
		}

		rec.position = new paper.Point(left, top);
	};
};