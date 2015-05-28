

//Text Animation
var paragraph = document.getElementsByTagName('p')[0];

function textEffect(animationName) {
  var text = paragraph.innerHTML,
		chars = text.length,
		newText = '',
		animation = animationName,
		char,
		i;

	for (i = 0; i < chars; i += 1) {
		newText += '<i>' + text.charAt(i) + '</i>';
	}

	paragraph.innerHTML = newText;

	var wrappedChars = document.getElementsByTagName('i'),
		wrappedCharsLen = wrappedChars.length,
		j = 0;

	function addEffect () {
		setTimeout(function () {
			wrappedChars[j].className = animation;
			j += 1;
			if (j < wrappedCharsLen) {
				addEffect();
			}
		}, 100)
	}

	addEffect();
};

textEffect('fly-in-out');

//Space
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var DeepSpace = function(size, number, speed)
{
  this.size = size;
	this.number = number;
	this.speed = speed;
	this.objects = new Array();

	this.initialize = function()
	{
		this.creationImage();
		this.drawCircle();
		this.animate();
	}

	this.creationImage = function()
	{
		for(var i = 0; i < this.number; i++)
		{
			var star = {
				'x' : Math.random()*2000,
				'y' : Math.random()*900,
				'radius' : Math.random()*this.size+1,
			}
			this.objects.push(star);
		}
	}

	this.drawCircle = function(x, y, radius)
	{
		with(ctx)
		{
			beginPath();
			arc(x, y, radius, 0, 2*Math.PI);
			fillStyle = 'white';
			fill();
			stroke();
			closePath();
		}
	}

	this.animate = function()
	{
		for(var j in this.objects)
		{
			var x = this.objects[j].x--;
			var y = this.objects[j].y;
			var radius = this.objects[j].radius;
      
      if(x < -2) this.objects[j].x = 2000;

			this.drawCircle(x, y, radius);
      
		}
	}
  
  setInterval(this.animate.bind(this), this.speed);
}

var space = new DeepSpace(0.1, 1000, 2);
space.initialize();
var space = new DeepSpace(.7, 1000, 3);
space.initialize();
var space = new DeepSpace(1.5, 10, 1);
space.initialize();
