var circles = [];
var keyData = {
	q: {
		sound: new Howl({
			src: ['./Main/sounds/bubbles.mp3']
		}),
		color: '#1abc9c'
	},
	w: {
		sound: new Howl({
			src: ['./Main/sounds/clay.mp3']
		}),
		color: '#2ecc71'
		},
	e: {
		sound: new Howl({
			src: ['./Main/sounds/confetti.mp3']
		}),
		color: '#3498db'
	},
	r: {
		sound: new Howl({
			src: ['./Main/sounds/corona.mp3']
		}),
		color: '#9b59b6'
	},
	t: {
		sound: new Howl({
			src: ['./Main/sounds/dotted-spiral.mp3']
		}),
		color: '#34495e'
	},
	y: {
		sound: new Howl({
			src: ['./Main/sounds/flash-1.mp3']
		}),
		color: '#16a085'
	},
	u: {
		sound: new Howl({
			src: ['./Main/sounds/flash-2.mp3']
		}),
		color: '#27ae60'
	},
	i: {
		sound: new Howl({
			src: ['./Main/sounds/flash-3.mp3']
		}),
		color: '#2980b9'
	},
	o: {
		sound: new Howl({
			src: ['./Main/sounds/glimmer.mp3']
		}),
		color: '#8e44ad'
	},
	p: {
		sound: new Howl({
			src: ['./Main/sounds/moon.mp3']
		}),
		color: '#2c3e50'
	},
	a: {
		sound: new Howl({
			src: ['./Main/sounds/pinwheel.mp3']
		}),
		color: '#f1c40f'
	},
	s: {
		sound: new Howl({
			src: ['./Main/sounds/piston-1.mp3']
		}),
		color: '#e67e22'
	},
	d: {
		sound: new Howl({
			src: ['./Main/sounds/piston-2.mp3']
		}),
		color: '#e74c3c'
	},
	f: {
		sound: new Howl({
			src: ['./Main/sounds/prism-1.mp3']
		}),
		color: '#95a5a6'
	},
	g: {
		sound: new Howl({
			src: ['./Main/sounds/prism-2.mp3']
		}),
		color: '#f39c12'
	},
	h: {
		sound: new Howl({
			src: ['./Main/sounds/prism-3.mp3']
		}),
		color: '#d35400'
	},
	j: {
		sound: new Howl({
			src: ['./Main/sounds/splits.mp3']
		}),
		color: '#1abc9c'
	},
	k: {
		sound: new Howl({
			src: ['./Main/sounds/squiggle.mp3']
		}),
		color: '#2ecc71'
	},
	l: {
		sound: new Howl({
			src: ['./Main/sounds/strike.mp3']
		}),
		color: '#3498db'
	},
	z: {
		sound: new Howl({
			src: ['./Main/sounds/suspension.mp3']
		}),
		color: '#9b59b6'
	},
	x: {
		sound: new Howl({
			src: ['./Main/sounds/timer.mp3']
		}),
		color: '#34495e'
	},
	c: {
		sound: new Howl({
			src: ['./Main/sounds/ufo.mp3']
		}),
		color: '#16a085'
	},
	v: {
		sound: new Howl({
			src: ['./Main/sounds/veil.mp3']
		}),
		color: '#27ae60'
	},
	b: {
		sound: new Howl({
			src: ['./Main/sounds/wipe.mp3']
		}),
		color: '#2980b9'
	},
	n: {
		sound: new Howl({
			src: ['./Main/sounds/zig-zag.mp3']
		}),
		color: '#8e44ad'
	},
	m: {
		sound: new Howl({
			src: ['./Main/sounds/moon.mp3']
		}),
		color: '#2c3e50'
	}
}

function onKeyDown(event) {
	if(keyData[event.key]){
		//creating the max point
		var maxPoint = new Point(view.size.width, view.size.height);
		//creating a random variable
		var randomPoint = Point.random();
		//creating a point on the screen
		var point = maxPoint * randomPoint;
		//creating a new circle
		var newCircle = new Path.Circle(point, 500);
		//giving circle a color from the data set above
		newCircle.fillColor = keyData[event.key].color;
		//playing sound from the data set above
		keyData[event.key].sound.play();
		//pushing circle into array to keep track
		circles.push(newCircle);
	}
}

function onFrame(event){
	for(var i = 0; i < circles.length; i++){
		//change color as circle diminishes
		circles[i].fillColor.hue += 1;
		//diminish circle
		circles[i].scale(.9);
	}
}