var c = document.getElementById("slate")
var ctx = c.getContext("2d");
var b = document.getElementById("b")
ctx.fillStyle = "#FF00FF";

var clearCanvas = function() {
    ctx.clearRect(0, 0, c.width, c.height)
};

//b.addEventListener("click", clearCanvas);

var drawRectangle = function() {
    var x = event.clientX;
    var y = event.clientY;
    ctx.fillRect(x - 10, y - 115,100,150)
};

//c.addEventListener("click", drawRectangle)

ctx.beginPath();

var drawCircle = function() {
    var x = event.clientX;
    var y = event.clientY;
    ctx.arc(x - 10, y - 115,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(x - 10, y - 115);
};

//c.addEventListener("click", drawCircle);

var requestID;

var animate = function(){
    window.cancelAnimationFrame(requestID);
    var xcor = 0;

    var dotStuff = function(){
	console.log(requestID);
	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath();
	ctx.arc(xcor,250,20,0,2*Math.PI);
	ctx.fill();
	ctx.stroke();
	if (xcor >= 500){
	    xcor = 0;
	}else{
	    xcor = xcor + 17;
	}
	requestID = window.requestAnimationFrame(dotStuff);
    };

    dotStuff();
};

var stop = function(){
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

b.addEventListener("click", stop);

c.addEventListener("click", animate);
