var myViewFinderArray = new Array();

class ViewFinder
{
    constructor(title)
    {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.year = year;
    }

    toString()
    {
        return "Title: " + this.title;
        return "Image: " + this.image;
        return "Description: " + this.description;
        return "Author: " + this.author;
        return "Year: " + this.year;
    }

    get title()
    {
        return this.title;
    }

    get image()
      {
        return this.image;
      }

    get description()
    {
      return this.description;
    }

    get author()
    {
      return this.author;
    }

    get year()
    {
      return this.year;
    }

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
    document.getElementById("title" + "Image" + "Description" + "Author" + "Year").innerHTML = myViewFinderArray[1].toString();

}
