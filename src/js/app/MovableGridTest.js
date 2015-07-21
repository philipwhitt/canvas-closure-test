goog.provide('app.MovableGridTest');

goog.require('app.Map');
goog.require('character.User');

/**
 * @constructor
 */
app.MovableGridTest = function() {
	this.move = {where:null, amount:0};

	var map = [];

	var viewRows = Math.round(paper.view.size.height / 60);
	var viewCols = Math.round(paper.view.size.width / 60);

	for (var i=0; i<60; i++) {
		map.push([]);
		for (var ii=0; ii<120; ii++) {
			map[i][ii] = {
				'type': ii%2 ? 'grass' : 'wall', 
				'pos' : ''+i+','+ii+''
			};
		}
	}

	var maxRows = map.length;
	var maxCols = map[0].length;

	var mapMiddleRow = Math.round(map.length / 2);
	var mapMiddleCol = Math.round(map[0].length / 2);

	var startRow = Math.round(mapMiddleRow - (viewRows / 2));
	var endRow   = Math.round((viewRows / 2) + mapMiddleRow) + 1; // render stuff slightly off screen

	var startCol = Math.round(mapMiddleCol - (viewCols / 2));
	var endCol   = Math.round((viewCols / 2) + mapMiddleCol) + 1; // render stuff slightly off screen

	startRow = startRow >= 0 ? startRow : 0;
	endRow = endRow <= maxRows ? endRow : maxRows;
	endRow = endRow > maxRows ? maxRows : endRow;

	startCol = startCol >= 0 ? startCol : 0;
	endCol = endCol <= maxCols ? endCol : maxCols;
	endCol = endCol > maxCols ? maxCols : endCol;

	// util.Debug.log(viewCols+'x'+viewRows);
	// util.Debug.log('startRow: ' + startRow);
	// util.Debug.log('endRow: ' + endRow);
	// util.Debug.log('startCol: ' + startCol);
	// util.Debug.log('endCol: ' + endCol);

	var viewRow = 0;
	for (var i=startRow; i<endRow; i++) {
		var viewCol = 0;

		for (var ii=startCol; ii<endCol; ii++) {
			var text = new paper.PointText({
				content   : map[i][ii]['pos'],
				point     : new paper.Point(viewCol+15, viewRow-25),
				fillColor : 'black'
			});

			viewCol+=60;
		}

		viewRow+=60;
	}

	app.Map = map;

	app.Map[mapMiddleRow][mapMiddleCol] = undefined;

	var tool = new paper.Tool();
	tool.onKeyDown = function(event) {
		if (self.move.amount == 0) {
			this.move.where = event.key;
			this.move.amount = 60;
		}
	};

	this.renderItems();

	var self = this;
	paper.view.onFrame = function(event) {
		if (this.move.amount > 0) {
			for (var row = 0, len=app.Map.length; row<len; row++) {
				for (var col = 0, lenCol=app.Map[row].length; col<lenCol; col++) {
					if (this.move.where == 'right') {
						app.Map[row][col].item.asset.position.x+=4;
					}

					if (this.move.where == 'left') {
						app.Map[row][col].item.asset.position.x-=4;
					}

					if (this.move.where == 'up') {
						app.Map[row][col].item.asset.position.y-=4;
					}

					if (this.move.where == 'down') {
						app.Map[row][col].item.asset.position.y+=4;
					}
				}
			}

			this.move.amount-=4;
		}
	};

	// var usr = new character.User();
	// usr.render();
};

app.MovableGridTest.prototype.renderItems = function() {
	var curX = 0;
	var curY = 0;

	var forground  = [];

	// row
	for (var row = 0, len=app.Map.length; row<len; row++) {
		// col
		for (var col = 0, lenCol=app.Map[row].length; col<lenCol; col++) {
			var target = app.Map[row][col];

			if (!target) {
				continue;
			}

			if (target['type'] == 'grass') {
				app.Map[row][col].item = new item.Grass(curX, curY);
				app.Map[row][col].item.render();

			} else if (target['type'] == 'treem') {
				app.Map[row][col].item = new item.Tree(curX, curY);
				forground.push(app.Map[row][col].item);

			} else if (target['type'] == 'house') {
				app.Map[row][col].item = new item.House(curX, curY);
				app.Map[row][col].item.render();

			} else if (target['type']) {
				app.Map[row][col].item = new item.Item(target['type'], curX, curY);
			}

			curX += 60;
		}

		curX = 0;
		curY += 60;
	}

	for (var i = 0, len = forground.length; i<len; i++) {
		forground[i].render();
	}
};