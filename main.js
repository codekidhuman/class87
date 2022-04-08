var canvas =  new fabric.Canvas('can')
 by=1;
 bx=1;

biw = 350;
bih = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img)
	{
		bio=Img;
		bio.scaleToWidth(biw);
		bio.scaleToHeight(bih);
bio.set({
	top:by,
	left:bx 
})
canvas.add(bio);
	})
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82'
	) // add appropriate keycode
	{
		new_image('rr1.png')
		console.log('r')
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png')
		console.log('g')	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png')
		console.log('y')	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png')
		console.log('p')	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png')
		console.log('b')	}
	
}

