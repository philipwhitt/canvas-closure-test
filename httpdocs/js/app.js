(function(){var c=null;var f=[[{},{},{},{},{},{},{},{},{},{}],[{},{},{},{},{},{},{},{},{},{}],[{},{},{},{type:"wall"},{type:"wallEnd"},{type:"wallEnd"},{type:"wallEnd"},{type:"wallEnd"},{type:"wallEnd"},{type:"wall"}],[{},{},{},{type:"wallEnd"},{type:"grass"},{type:"grass"},{type:"grass"},{type:"grass"},{type:"grass"},{type:"wall"}],[{},{},{},{},{type:"grass"},{type:"house"},{type:c},{type:c},{type:"grass"},{type:"wall"}],[{},{},{},{},{type:"grass"},{type:c},{type:c},{type:c},{type:"grass"},{type:"wallEnd"}],[{},{},{},
{},{type:"grass"},{type:c},{type:c},{type:c},{type:"grass"},{}]];function h(){paper.project.activeLayer.removeChildren();i();j();var a=new paper.Raster("female");a.position=new paper.Point(a.size.width/2,a.size.height/2);(new paper.Tool).onKeyDown=function(b){b.key=="right"&&(a.position.x+=60);b.key=="left"&&(a.position.x-=60);b.key=="up"&&(a.position.y-=60);b.key=="down"&&(a.position.y+=60)}}
function j(){for(var a=0,b=0,e=0,k=f.length;e<k;e++){for(var g=0,l=f[e].length;g<l;g++){var d=f[e][g];if(d.type)d=new paper.Raster(d.type),d.position=new paper.Point(d.size.width/2+a,d.size.height/2+b);a+=60}a=0;b+=60}}function i(){for(var a=0,b=0;;)if((new paper.Path.Rectangle(new paper.Point(a,b),new paper.Size(60,60))).style={fillColor:"#62B821",strokeColor:"#5BB01B"},a+=60,a>paper.view.size.width&&(a=0,b+=60),b>paper.view.size.height)break}paper.setup(document.getElementById("canvas"));h();paper.view.draw();
paper.view.play();paper.view.onResize=function(){h()};})();
