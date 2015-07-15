/**
 * @externs
 */

var paper = {};

/** @public */
paper.setup = function(canvas){};

/** @public */
paper.project = {};

/** @public */
paper.center = {};

/** @public */
paper.project.activeLayer = {};

/** @public */
paper.project.activeLayer.removeChildren = function(){};

/** @public */
paper.view = {};
/** @public */
paper.view.size = {width:0, height:0};
/** @public */
paper.view.draw = function(){};
/** @public */
paper.view.play = function(){};
/** @public */
paper.view.onFrame = function(){};
/** @public */
paper.view.onResize = function(){};

/** 
 * @constructor 
 */
paper.ToolEvent = function(){};
/**
 * @public
 */
paper.ToolEvent.prototype.type;
/**
 * @public
 */
paper.ToolEvent.prototype.point;
/**
 * @public
 */
paper.ToolEvent.prototype.lastPoint;
/**
 * @public
 */
paper.ToolEvent.prototype.downPoint;
/**
 * @public
 */
paper.ToolEvent.prototype.middlePoint;
/**
 * @public
 */
paper.ToolEvent.prototype.delta;
/**
 * @public
 */
paper.ToolEvent.prototype.count;
/**
 * @public
 */
paper.ToolEvent.prototype.item;

/** 
 * @constructor 
 */
paper.Tool = function(){};
/** 
 * @param {paper.ToolEvent} event
 * @public 
 */
paper.Tool.prototype.onMouseDown = function(event) {}
/** 
 * @param {paper.ToolEvent} event
 * @public 
 */
paper.Tool.prototype.onMouseDrag = function(event) {}
/** 
 * @param {paper.ToolEvent} event
 * @public 
 */
paper.Tool.prototype.onMouseUp = function(event) {}

/** 
 * @param {Object=} options
 * @constructor 
 */
paper.PointText = function(options) {};
/** 
 * @type {string} 
 * @public 
 */
paper.PointText.prototype.content;


/** 
 * @param {Object=} options
 * @constructor 
 */
paper.Path = function(options) {};
/** 
 * @type {Array} 
 * @public 
 */
paper.Path.prototype.segments = [];
/** 
 * @type {boolean} 
 * @public 
 */
paper.Path.prototype.selected;
/** 
 * @type {Object} 
 * @public 
 */
paper.Path.prototype.bounds = {bottomLeft:0};
/** 
 * @type {Object} 
 * @public 
 */
paper.Path.prototype.style = {
	fillColor: null,
	strokeColor: '',
	strokeWidth: 0
};
/** @public */
paper.Path.prototype.strokeColor;
/** @public */
paper.Path.prototype.fullySelected;
/** 
 * @type {Object|string} 
 * @public 
 */
paper.Path.prototype.fillColor;
/** 
 * @public 
 */
paper.Path.prototype.clone = function(){};
/** 
 * @public 
 */
paper.Path.prototype.simplify = function(num){};
/** 
 * @public 
 */
paper.Path.prototype.add = function(something){};
/** 
 * @param {paper.Point} point
 * @public 
 */
paper.Path.prototype.moveTo = function(point){};
/** 
 * @public 
 */
paper.Path.prototype.rotate = function(to){};
/** 
 * @public 
 */
paper.Path.prototype.lineTo = function(point){};




/** 
 * @constructor 
 * @extends{paper.Path} 
 */
paper.Path.Rectangle = function(dem1, dem2) {};




/** 
 * @constructor 
 * @extends{paper.Path} 
 */
paper.Path.Circle = function(dem1, dem2) {};




/** 
 * @param{number} x
 * @param{number} y
 * @constructor 
 */
paper.Point = function(x, y) {};




/** 
 * @param{number} x
 * @param{number} y
 * @constructor 
 */
paper.Size = function(x, y) {};




/** 
 * @constructor 
 */
paper.Color = function(r, g, b) {};




/** 
 * @constructor 
 */
paper.Item = function(id) {};
/**
 * @public
 */
paper.Item.prototype.set = function(props) {}
/**
 * @param {*=} insert
 * @public
 * @return {paper.Item}
 */
paper.Item.prototype.clone = function(insert) {}
/**
 * @public
 */
paper.Item.prototype.copyTo = function(item) {}
/**
 * @public
 */
paper.Item.prototype.rasterize = function(resolution) {}
/**
 * @public
 */
paper.Item.prototype.contains = function(point) {}
/**
 * @public
 */
paper.Item.prototype.isInside = function(rect) {}
/**
 * @public
 */
paper.Item.prototype.intersects = function(item) {}
/**
 * @public
 */
paper.Item.prototype.hitTest = function(point) {}
/**
 * @param {*} delta
 * @public
 */
paper.Item.prototype.translate = function(delta) {}
/**
 * @param {*} angle
 * @param {*=} center
 * @public
 */
paper.Item.prototype.rotate = function(angle, center) {}
/**
 * @param {*} hor
 * @param {*=} ver
 * @param {*=} center
 * @public
 */
paper.Item.prototype.scale = function(hor, ver, center) {}
/**
 * @param {*} hor
 * @param {*=} ver
 * @param {*=} center
 * @public
 */
paper.Item.prototype.shear = function(hor, ver, center) {}
/**
 * @param {*} hor
 * @param {*=} ver
 * @param {*=} center
 * @public
 */
paper.Item.prototype.skew = function(hor, ver, center) {}
/**
 * @param {*} matrix
 * @public
 */
paper.Item.prototype.transform = function(matrix) {}
/**
 * @param {*} point
 * @public
 */
paper.Item.prototype.globalToLocal = function(point) {}
/**
 * @param {*} point
 * @public
 */
paper.Item.prototype.localToGlobal = function(point) {}
/**
 * @param {*} point
 * @public
 */
paper.Item.prototype.parentToLocal = function(point) {}
/**
 * @param {*} point
 * @public
 */
paper.Item.prototype.localToParent = function(point) {}
/**
 * @param {*} rectangle
 * @param {*=} fill
 * @public
 */
paper.Item.prototype.fitBounds = function(rectangle, fill) {}



/** 
 * @constructor 
 * @extends{paper.Item} 
 */
paper.Raster = function(id) {};
/**
 * @public
 */
paper.Raster.prototype.getSubCanvas = function(rect){}
/**
 * @public
 */
paper.Raster.prototype.getSubRaster = function(rect){}
/**
 * @public
 */
paper.Raster.prototype.toDataURL = function(){}
/**
 * @public
 */
paper.Raster.prototype.drawImage = function(image, point){}
/**
 * @public
 */
paper.Raster.prototype.getAverageColor = function(object){}


