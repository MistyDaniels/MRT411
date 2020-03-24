let bike = {
               "Season" : "One",
               "Episode" : "One",
               "Name" : {
                   "firstName" : "Rick",
                   "lastName" : "Sanchez"
               },
           }

       $(function () {
           $("button").click(function () {
               showCharInfo();
           });

       });

       function showCharInfo()
           {
               $("#charInformation").html("Season: " + char.season
               + "<br>Episode:" + char.episode + "<br>First Name:" + char.name.firstName + "<br>Last Name:"
               + char.name.lastName);
           }
