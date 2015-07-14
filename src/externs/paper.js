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
 * @type {Object} 
 * @public 
 */
paper.Path.prototype.style = {};
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

