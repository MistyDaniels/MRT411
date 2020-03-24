let bike = {
               "season" : "One",
               "episode" : "One",
               "name" : {
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
               $("#charInformation").html("season: " + char.season
               + "<br>episode:" + char.episode + "<br>First Name:" + char.name.firstName + "<br>Last Name:"
               + char.name.lastName);
           }
