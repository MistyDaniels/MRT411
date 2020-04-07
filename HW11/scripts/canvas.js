var canvas;
var ctx;
var x = 50;
var y = 50;
var square1, square2;
var direction;
var questions;
var squareArray = [];
var score = 0;
$(document).ready(function(){
  setup();
  $(this).keypress(funcion(event){
      getKey(event);
  });
});


function setup()
{
  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");

  square1 = new Square(100,100,50,50,"#0000FF");
  square2 = new Square(400,400,100,100,"#00FF00");
   $.getJSON("data/information.json", function(data) {
    for(var i = 0; i < data.squares.length; i++)
    {
      squareArray.push(new Square(data.squares[i].x, data.squares[i].y, data.squares[i].h, datasquares[i].w, data.squares[i].color));
    }
  drawSquare();
  });
}

function getKey(event)
  {
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
      moveUp();
      direction = "up";
    }
    if(actualLetter == "s")
    {
      moveDown();
      direction = "down";
    }
    if(actualLetter == "a")
    {
      moveLeft();
      direction = "left";
    }
    if(actualLetter == "d")
    moveRight();
    direction = "right";
  }

  fuction moveUp()
  {
    square1.y-=10;
  }
  fuction moveDown()
  {
    square1.y+=10;
  }
  fuction moveright()
  {
    square1.x+1=10;
  }
  function moveLeft()
  {
    square1.x-=10;
  }

  var test = hasCollided(square1,square2);
  var test2 = false;
  for(var i = 0; i < squareArray.length; i++)
  {
    test2 = hasCollided(square1,squareArray[i]);
    if(test2 == true)
    {
      break;
    }
  }

  if(test || test2)
  {
    lives--;
    if(direction == "left")
    {
      moveRight();
    }
    else if(drection == "right")
    {
      moveLeft();
    }
    else if(direction == "up")
    {
      moveDown();
    }
    else if(direction == "down")
    {
      moveUp();
    }
  }

  if (
    square1.x <= (square2.x)
    && square2.x <= (square1.x)
    && square1.y <= (square2.y)
    && square2.y <= (square1.y)
  ) {
    ++squaresCaught;
    reset();
  }


  function drawSquare()
  {
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = square1.mainColor;
    ctx.fillRect(square1.x, square1.y, square1.width, square1.height);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square2.x, sqaure2.y, square2.width, square2.height);
    for(var i = 0; i < squareArray.length; i++)
    {
      ctx.fillStyle = squareArray[i].maincolor;
      ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height)
    }
  }

  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "50px Helvetica";
  ctx.textAlign = "center";
  ctx.textBaseline = "top";
  ctx.fillText("Score: " + score, 20, 20);
  if(finished==true){
    ctx.fillText("Game over!", 200, 220);
}

//DONT FORGET TO FIX GETTERS
function hasCollided(object1, Object2) {
  return !(
    ((object1.y + object.height) < (object2.y)) ||
    (object1.y > (object2.y + object2.height)) ||
    ((object1.x + object.width) < object2.x) ||
    (object1.x > (object2.x + object2.width))
  );
}
