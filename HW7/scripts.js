var imageTags = ["aurorae", "burnish2", "deepblue", "jelly", "pipestone"];
var firstNumber = -1;
var secondNumber = -1;

function createRandomImageArray()
{
    var actualImagePath = ["images/aurorae.jpg", "images/burnish2.jpg", "images/deepblue.jpg", "images/jelly.jpg", "images/pipestone.jpg"];
    var count = [0,0,0,0,0];
    while(actualImages.length < 5)
    {
        var randomNumber = Math.floor(Math.random() * actualImagePath.length)
        if(count[randomNumber] < 1)
        {
            actualImages.push(actualImagePath[randomNumber]);
            count[randomNumber] = count[randomNumber] + 1;
        }
    }
}

var myViewFinderArray = new Array();

class ViewFinder
{
    constructor( title, image, description, author, year )
    {
        this.title = title;
        this.image = image;
        this.decription = description;
        this.author = author;
        this.year = year;
    }

    toString()
    {
        let str;
        str = 'This piece is titled ' + this.title
        + this.image + ' featuring ' + this.description
        + ' by artist ' + this.artist + ' in' + this.year;
        return str;
    }


function initializeArray()
{
    var myViewFinder = new ViewFinder("Aurorae");
    var myViewFinder1 = new ViewFinder("Burnish");
    var myViewFinder = new ViewFinder("Deep Blue");
    var myViewFinder1 = new ViewFinder("Jelly.");
    var myViewFinder1 = new ViewFinder("Pipestone.");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
    myViewFinderArray.push(myViewFinder5);

}
function accessInformation()
{
    document.getElementById('title' + 'Image' + 'Description' + 'Author' + 'Year').innerHTML = myViewFinderArray[5].toString();

}
