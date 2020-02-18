var imageTags = ["image0", "image1", "image2", "image3", "image4"];
var blankImagePath = "images/white.png";
var actualImages = new Array();

function printBlanks()
{
    createRandomImageArray();
    for(var i = 0; i < imageTags.length; i++)
    {
        document.getElementById(imageTags[i]).src= blankImagePath;
    }

}

function createRandomImageArray()
{
    var actualImagePath = ["images/pinkHeart.png", "images/blueStar.png", "images/blackCircle.png", "images/greenSquare.png", "purpleTriangle"];
    var count = [0,0,];
    while(actualImages.length < 10)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 5)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }


}

function flipImage(number)
{
    document.getElementById(imageTags[number]).src= actualImages[number];


}
