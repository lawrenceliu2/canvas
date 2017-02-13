var c = document.getElementById("slate")
var ctx = c.getContext("2d");
var b = document.getElementById("b")


var clearCanvas = function() {
    ctx.clearRect(0, 0, 500, 500)
};

b.addEventListener("click", clearCanvas)


ctx.fillStyle = "#0000FF";
ctx.fillRect(50,50,100,200);

var drawRectangle = function() {
    var x = event.clientX;
    var y = event.clientY;
    ctx.fillRect(x,y,100,150)
};

c.addEventListener("click", drawRectangle)
