let smiley;

function setup() {
	new Canvas(500, 400);
	let smileText = `
..yyyyyy
.yybyybyy
yyyyyyyyyy
yybyyyybyy
.yybbbbyy
..yyyyyy`;

	smiley = new Sprite();
	smiley.img = spriteArt(smileText, 32);
} 

function draw() {
    if (kb.pressing('space') || mouse.pressing()) {
        smiley.x = smiley.x + 1;
    }   
}