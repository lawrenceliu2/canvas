var c = document.getElementById("slate")
var ctx = c.getContext("2d");
var b = document.getElementById("b")
var circle = document.getElementById("c")
var s = document.getElementById("stop")
var dvd = document.getElementById("dvd")
ctx.fillStyle = "#FF00FF";

//Clear the canvas
var clearCanvas = function() {
    ctx.clearRect(0, 0, c.width, c.height)
};

b.addEventListener("click", clearCanvas);

//Draw a rectangle at click location
var drawRectangle = function() {
    var x = event.clientX;
    var y = event.clientY;
    ctx.fillRect(x - 10, y - 115,100,150)
};

//c.addEventListener("click", drawRectangle)

ctx.beginPath();

//Draw a circle at click location
var drawCircle = function() {
    var x = event.clientX;
    var y = event.clientY;
    ctx.arc(x - 10, y - 115,10,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(x - 10, y - 115);
};

//c.addEventListener("click", drawCircle);

//Stops all animation
var stop = function(){
    console.log(requestID);
    window.cancelAnimationFrame(requestID);
};

s.addEventListener("click", stop);

var requestID;

//Moves a dot across the screen horizontally
var animateDot = function(){
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

c.addEventListener("click", animateDot);

//Animates a circle at the center of the canvas that increases/decreases in radius continuously
var animateCircle = function(){
    window.cancelAnimationFrame(requestID); 
    var radius = 1;
    var walled = false;

    var circleStuff = function(){
	console.log(requestID);
	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath()
	ctx.arc(250,250,radius,0,360);
	ctx.fill();
	ctx.stroke();
	if (radius==250){
	    walled = true;
	}
	if (radius==1){
	    walled = false;
	}
	if (walled){
	    radius--;
	}else{
	    radius++;
	}

	requestID = window.requestAnimationFrame(circleStuff);
    };
    circleStuff();
};

circle.addEventListener("click", animateCircle);

//Bounces around a DVD image
var animateDVD = function(){
    window.cancelAnimationFrame(requestID); 
    var xcor = ((Math.random() * 300) + 100);
    var ycor = ((Math.random() * 300) + 100);
    var walled = false
    var floored = false 
    var pic = new Image();
    pic.src = "http://plainicon.com/download-icons/46993/plainicon.com-46993-ec84-128px.png";

    var dvdStuff = function(){
	console.log(ycor);

	ctx.clearRect(0,0,c.width,c.height);
	ctx.beginPath();
	ctx.drawImage(pic,xcor,ycor);
	ctx.fill();
	ctx.stroke();
	if (xcor >= 370){
	    walled = true;
	}
	if (xcor <= 0){
	    walled = false;
	}
	if (ycor >= 415){
	    floored = true;
	}
	if (ycor <= 1){
	    floored = false;
	}  
	if (walled){
	    xcor--;
	}else{
	    xcor++;
	}
	if (floored){
	    ycor--;
	}else{
	    ycor++;
	}
	
	requestID = window.requestAnimationFrame(dvdStuff);
    };
    dvdStuff();
};

dvd.addEventListener("click", animateDVD);
