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
