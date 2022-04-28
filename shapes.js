//SHAPES VERTEX POINTS

var sBlock = [
	{x: -25, y: -25},
	{x: 25, y: -25},
	{x: 25, y: 25},
	{x: -25, y: 25},
]

var sTrapezium = [
	{x: 0, y: -25},
	{x: -50, y: -25},
	{x: -20, y: 25},
	{x: 20, y: 25},
	{x: 50, y: -25},
]

var sParalellogramL = [
	{x: 0, y: -25},
	{x: -20, y: -25},
	{x: -50, y: 25},
	{x: 20, y: 25},
	{x: 50, y: -25},
]

var sParalellogramR = [
	{x: 0, y: -25},
	{x: -50, y: -25},
	{x: -20, y: 25},
	{x: 50, y: 25},
	{x: 20, y: -25},
]

var sLongBlock = [
	{x: -50, y: -25},
	{x: 50, y: -25},
	{x: 50, y: 25},
	{x: -50, y: 25},
]

var sEquiTriangle = [
	{x: 0, y: 40},
	{x: -34.6, y: -20},
	{x: 34.6, y: -20}
]

var simpleShapes = [sBlock, sLongBlock, sTrapezium]
var shapes = [sBlock, sBlock, sTrapezium, sTrapezium, sParalellogramL, sParalellogramR, sLongBlock, sLongBlock, sEquiTriangle, sEquiTriangle];
var bigShapes = [sTrapezium, sTrapezium, sParalellogramL, sParalellogramR, sLongBlock, sLongBlock, sEquiTriangle, sEquiTriangle];

//LEVELS
var levels = [];

//nr of blocks, core radius, atmosphere radius, [] with available random blocks, array of preset solid objects:
//[x, y, sides (- = half), radius, rotation in deg (-1 = auto), scaleX, scaleY]

levels.push([ //LEVEL SELECT
	10, 50, 450, shapes, [
		[90, 90, 50, 50, 180, 1, 1, 0.001],
		[-90, 90, 50, 50, 180, 1, 1, 0.001],
		[-90, -90, 50, 50, 180, 1, 1, 0.001],
		[90, -90, 50, 50, 180, 1, 1, 0.001],

		[180, 180, 50, 50, 180, 1, 1, -0.0005],
		[-180, 180, 50, 50, 180, 1, 1, -0.0005],
		[-180, -180, 50, 50, 180, 1, 1, -0.0005],
		[180, -180, 50, 50, 180, 1, 1, -0.0005],

		[270, 270, 50, 50, 180, 1, 1, 0.00025],
		[-270, 270, 50, 50, 180, 1, 1, 0.00025],
		[-270, -270, 50, 50, 180, 1, 1, 0.00025],
		[270, -270, 50, 50, 180, 1, 1, 0.00025]
	]
])

levels.push([ //Tutorial
	10, 10, 250, shapes, [
		[0, 0, 100, 50, 180, 1, 1]
	]
])

levels.push([ //Simple lava intro level
	15, 100, 450, shapes, [
		[0, -60, -100, 50, 180, 2.5, 2.5],
	]
])

levels.push([ //Good early level/incubator
	18, 180, 450, shapes, [
		[0, 0, 100, 50, 0, 2, 2],
		[0, -140, 4, 50, 0, 2, 5],
		[-20, -100, 4, 50, 135, 3, 4],
		[-100, -55, 4, 50, 90, 2, 2.7],
		[20, -100, 4, 50, 225, 3, 4],
		[100, -55, 4, 50, 270, 2, 2.7],
	]
])


levels.push([//Pyramids
	12, 80, 450, shapes, [
		[0, -110, 4, 50, 180, 4, 0.7],
		[0, -150, 4, 50, 180, 3, 0.7],
		[0, -180, 4, 50, 180, 2, 0.7],
		[0, -215, 4, 50, 180, 1, 0.7],
		[0, 135, 3, 50, 270, 2, 3.25],
	]
])

levels.push([//Pole hopping
	12, 180, 450, shapes, [
		[0, 0, 50, 50, 0, 2, 2.5],
		[0, -110, 4, 50, 180, 0.5, 5],
		[-50, -100, 4, 50, 150, 0.5, 4],
		[-100, -90, 4, 50, 120, 0.5, 2.75],
		[50, -100, 4, 50, 210, 0.5, 4],
		[100, -90, 4, 50, 240, 0.5, 2.75],
	]
])

levels.push([//Pulsar Plus
	12, 190, 450, simpleShapes, [
		[0, 0, 50, 50, 0, 2.75, 5],
		[0, 0, 50, 50, 90, 2.5, 5],
	]
])

levels.push([//Excavated Site
	12, 175, 450, shapes, [
		[150, 150, -100, 50, 315, 9, 9],
		[-150, 150, -100, 50, 45, 9, 9],
		[-70, -40, 4, 50, 135, 1.5, 7],
		[70, -40, 4, 50, 225, 1.5, 7],
		[-70, -40, 4, 50, 135, 3, 3],
		[70, -40, 4, 50, 225, 3, 3],
	]
])

levels.push([ //Hexagon Solar System
	12, 100, 450, simpleShapes, [
		[100, -250, 6, 50, 30, 1.9, 1.9],
		[100, 250, 6, 50, 0, 1.6, 1.6],
		[-300, 150, 6, 50, 30, 1.2, 1.2],
		[250, 100, 6, 50, 0, 1.7, 1.7],
		[-250, -150, 6, 50, -15, 1.8, 1.8],
	]
])

levels.push([ //Intro rotation level
	12, 100, 450, shapes, [
		[0, -60, 4, 50, 0, 3.4, 1.5, 0.001],
		[120, -170, 4, 50, 10, 1, 4.8, 0.001],
		[-120, -170, 4, 50, -10, 1, 4.8, 0.001]
	]
])

levels.push([ //Window Wiper
	15, 100, 450, shapes, [
		[0, -400, 4, 50, 180, 1, 4, 0.01],
		[0, 400, 4, 50, 180, 1, 4, 0.01],
		[50, 50, -100, 50, 315, 2.5, 2.5],
		[-50, 50, -100, 50, 45, 2.5, 2.5],
	]
])

levels.push([ //Spike rotation level
	15, 80, 450, bigShapes, [
		[0, 98, 3, 50, 90, -4, 1, -0.001],
		[98, 0, 3, 50, 180, 4, 1, -0.001],
		[0, -98, 3, 50, 270, -4, 1, -0.001],
		[30, 0, -50, 50, 270, 2, 2, -0.001],
	]
])

levels.push([ //Intro rotation level
	15, 120, 450, shapes, [
		[0, -120, 4, 50, 0, 3, 0.5, 0.001],
		[0, -350, 4, 50, 0, 3, 0.5, 0.001],
		[120, -235, 4, 50, 0, 0.5, 3.75, 0.001],

		[0, 120, 4, 50, 0, 3, 0.5, 0.001],
		[0, 350, 4, 50, 0, 3, 0.5, 0.001],
		[-120, 235, 4, 50, 0, 0.5, 3.75, 0.001],

		[0, 0, 4, 50, 0, 0.5, 3.75, 0.001],
	]
])

var curLevel = 0;