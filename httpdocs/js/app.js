(function(){paper.setup(document.getElementById("canvas"));
(function(){paper.project.activeLayer.removeChildren();var a,c=new paper.Tool,d=new paper.PointText({content:"Click and drag to draw a line.",point:new paper.Point(20,30),fillColor:"black"});c.onMouseDown=function(b){if(a)a.selected=!1;a=new paper.Path({segments:[b.point],strokeColor:"black",fullySelected:!0})};c.onMouseDrag=function(b){a.add(b.point);d.content="Segment count: "+a.segments.length};c.onMouseUp=function(){var b=a.segments.length;a.simplify(10);a.fullySelected=!0;var c=a.segments.length;
d.content=b-c+" of the "+b+" segments were removed. Saving "+(100-Math.round(c/b*100))+"%"}})();paper.view.draw();paper.view.play();})();