$(document).ready(function () {
           $("button").click(function () {
               $("#charInformation").load("data/charInfo.txt", fadeText);
           });
       });

       function fadeText()
       {
           $("#charInformation").fadeOut("slow").fadeIn("slow");
       }
