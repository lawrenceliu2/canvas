var c = document.getElementById("slate")
var ctx = c.getContext("2d");
var b = document.getElementById("b")
ctx.fillStyle = "#FF00FF";

var clearCanvas = function() {
    ctx.clearRect(0, 0, 500, 500)
};

b.addEventListener("click", clearCanvas)

var drawRectangle = function() {
    var x = event.clientX;
    var y = event.clientY;
    ctx.fillRect(x - 10, y - 115,100,150)
};

//c.addEventListener("click", drawRectangle)

ctx.beginPath();

var drawCircle = function() {
    //ctx.moveTo(x - 10, y - 115);
    var x = event.clientX;
    var y = event.clientY;
    ctx.arc(x - 10, y - 115,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(x - 10, y - 115);
};

c.addEventListener("click", drawCircle)
