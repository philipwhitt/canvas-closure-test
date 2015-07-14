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

/** @constructor */
paper.Path = function() {};
/** 
 * @type {Object} 
 * @public 
 */
paper.Path.prototype.style = {};
/** 
 * @type {Object} 
 * @public 
 */
paper.Path.prototype.bounds = {bottomLeft:0};
/** @public */
paper.Path.prototype.strokeColor;
/** 
 * @public 
 */
paper.Path.prototype.clone = function(){};
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

