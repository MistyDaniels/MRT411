var imageTags = ["image0", "image1", "image2", "image3", "image4", "image5", "image6", "image7", "image8", "image9"];
var blankImagePath = "images/white.png";
var firstNumber = -1;
var secondNumber = -1;
var score = 0;
var allFound = 0;
var player = {"firstname":"", "lastname":"", "age":0, "score":0};

var actualImages = new Array();

function printWhite()
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }

}

function createRandomImageArray()
{
    var actualImagePath = ["images/pinkHeart.png", "images/blueStar.png", "images/blackCircle.png", "images/greenSquare.png", "images/purpleTriangle.png"];
    var count = [0,0,0,0,0];
    while(actualImages.length < 10)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 2)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

function flipImage(number)
{
    if(firstNumber >= 0)
    {
        secondNumber = number;
        document.getElementById(imageTags[number]).src = actualImages[secondNumber];

    }
    else if(firstNumber < 0)
    {
        firstNumber = number;
        document.getElementById(imageTags[firstNumber]).src= actualImages[firstNumber];

    }

    if(actualImages[secondNumber] != actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        setTimeout(imagesDisappear, 1000);
    }
    else if(actualImages[secondNumber] == actualImages[firstNumber] && firstNumber >= 0 && secondNumber >= 0)
    {
        score++;
        allFound++;

        firstNumber = -1;
        secondNumber = -1;
        if(allFound == actualImages.length/2)
        {
            player.score = score;
            localStorage.setItem("playerInfo", JSON.stringify(player));
            window.location = "page3.html";
        }
    }
}

function imagesDisappear()
{

    console.log(firstNumber);
    document.getElementById(imageTags[firstNumber]).src = blankImagePath;
    document.getElementById(imageTags[secondNumber]).src = blankImagePath;
    firstNumber = -1;
    secondNumber = -1;
}

function addPlayer()
{
    var firstName = document.getElementById("FirstName").value;
    var lastName = document.getElementById("LastName").value;
    var age = document.getElementById("Age").value;

    player.firstname = firstName;
    player.lastname = lastName;
    player.age = age;
    localStorage.setItem("playerInfo", JSON.stringify(player));
    window.location = "page2.html";
}

function playerInfo()
{
    var playerInfo = localStorage.getItem("playerInfo");
    player = JSON.parse(playerInfo);
    var str = "Name: " + player.firstname + " " + player.lastname + "<br>" +
    "Age: " + player.age + "<br>" +
    "Score: " + player.score;
    if(document.getElementById("endInfo") != null)
    {
        document.getElementById("endInfo").innerHTML = str;
    }


}
