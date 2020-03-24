$(document).ready(function () {
           $("button").click(function () {
               $("#charInformation").load("data/characters.json", function(responseText){
                   var char = JSON.parse(responseText);
                   $("#charInformation").html("Season: " + char.season
               + "<br>Episode:" + char.episode + "<br>First Name:" + char.name.firstName + "<br>Last Name:"
               + char.name.lastName);
               });
           });
       });
