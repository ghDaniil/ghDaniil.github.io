let ctx=field.getContext("2d");
let player = { 
    sprite: new Image(100,100),
    x:0,
    y:0 
}
player.sprite.src="img/player.png";
field.height=window.innerHeight;
field.width=window.innerWidth;
function draw(){
    let bg =new Image(field.height,field.width);
    bg.src="img/background.jpg";
    bg.onload=()=>{
        ctx.drawImage(bg, 0, 0);
    }
    ctx.drawImage( player.sprite, player.x, player.y );
    
}

$(field).on("mousemove", function(e){
    player.x=e.offsetX;
    player.y=e.offsetY;
    draw()
});