goog.provide('app.Main');

goog.require('app.Map');
goog.require('app.PopToGrid');
goog.require('app.MovableGridTest');
goog.require('util.Debug');
goog.require('item.Grass');
goog.require('item.Tree');
goog.require('item.Item');
goog.require('item.House');
goog.require('character.User');
goog.require('goog.json');

/**
 * @constructor
 */
app.Main = function() {
	this.user = new character.User();
};

/** @public */
app.Main.socket = null;

/** @public */
app.Main.prototype.activeGrid = function() {
	this.drawGrid();

	new app.MovableGridTest();

	var lastLoop = new Date;
	var frames = 0;
	var text = new paper.PointText({
		content   : 'FPS (0)',
		point     : new paper.Point(20, 30),
		fillColor : 'black'
	});

	// var self = this;
	// paper.view.onFrame = function(event) {
	// 	frames++;
	// 	var thisLoop = new Date;
	//     var fps = 1000 / (thisLoop - lastLoop);

	//     lastLoop = thisLoop;
	//     if (frames >= 5) {
	//     	text.content = 'FPS (' + Math.round(fps).toString() + ')';
	//     	frames=0;
	//     }
	// };
};

/** @public */
app.Main.prototype.draw = function() {
	paper.project.activeLayer.removeChildren();

	var newUser;

	// app.Main.socket = new WebSocket('ws://canvastest.corn:8080');
	// app.Main.socket.onopen = function(e) {
	// 	util.Debug.log("Connection established!");
	// 	app.Main.socket.send('{"action" : "newUser"}');
	// };
	// app.Main.socket.onmessage = function(e) {
	// 	util.Debug.log(e);
	// 	var data = goog.json.parse(e.data);
	// 	if (data['action'] == 'newUser') {
	// 		newUser = new character.User();
	// 		newUser.render();
	// 	} else if (newUser) {
	// 		newUser.moveTo(data['action']);
	// 	}
	// };

	this.fillOutGrid();
	this.addItems();
	this.drawGrid();

	var lastLoop = new Date;
	var frames = 0;
	var text = new paper.PointText({
		content   : 'FPS (0)',
		point     : new paper.Point(20, 30),
		fillColor : 'black'
	});

	var self = this;
	paper.view.onFrame = function(event) {
		frames++;
		var thisLoop = new Date;
	    var fps = 1000 / (thisLoop - lastLoop);

	    lastLoop = thisLoop;
	    if (frames >= 5) {
	    	text.content = 'FPS (' + Math.round(fps).toString() + ')';
	    	frames=0;
	    }

		self.user.onFrame();

		if (newUser) {
			newUser.onFrame();
		}
	};
};

/** @public */
app.Main.prototype.fillOutGrid = function() {
	var numCols = Math.round(paper.view.size.width/60);
	var numRows = Math.round(paper.view.size.height/60);

	for (var row = 0, len=numRows; row<len; row++) {
		if (!app.Map[row]) {
			app.Map[row] = [];
		}

		for (var col = 0, lenCol=numCols; col<lenCol; col++) {
			if (!app.Map[row][col]) {
				app.Map[row][col] = {};
			}
		}
	}
};

/** @public */
app.Main.prototype.addItems = function() {
	var curX = 0;
	var curY = 0;

	var forground  = [];

	// row
	for (var row = 0, len=app.Map.length; row<len; row++) {
		// col
		for (var col = 0, lenCol=app.Map[row].length; col<lenCol; col++) {
			var target = app.Map[row][col];

			// skip items already added
			if (!target.item || (target.item && target.item.isInvisible)) {
				if (target.type == 'grass') {
					app.Map[row][col].item = new item.Grass(curX, curY);
					app.Map[row][col].item.render();

				} else if (target.type == 'treem') {
					app.Map[row][col].item = new item.Tree(curX, curY);
					forground.push(app.Map[row][col].item);

				} else if (target.type == 'house') {
					app.Map[row][col].item = new item.House(curX, curY);
					app.Map[row][col].item.render();

				} else if (target.type) {
					app.Map[row][col].item = new item.Item(target.type, curX, curY);

					if (!target.isInvisible) {
						app.Map[row][col].item.render();
					}
				}

				if (target.canPass != undefined) {
					app.Map[row][col].item.canPass = target.canPass;
				}
			}

			curX += 60;
		}

		curX = 0;
		curY += 60;
	}

	this.user.render();

	for (var i = 0, len = forground.length; i<len; i++) {
		forground[i].render();
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

// var main = new app.Main();
var canvas = document.getElementById('canvas');

paper.setup(canvas);
// main.activeGrid();
new app.PopToGrid();

paper.view.draw();
paper.view.play();

// paper.view.onResize = function(event) {
// 	main.draw();
// };
