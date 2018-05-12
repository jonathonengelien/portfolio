$(document).ready(function () {


    $("#site-logo").click(function(event) {
        console.log("logo clicked");
    });


    //////////////// Active Code ////////////////
    $("#portfolio-container").click(function (event) {
        event.preventDefault();

        console.log("button was clicked");

        //Displays New Container
        $("#portfolio-container").removeClass("inactive-content", "z-depth-3");
        $("#portfolio-container").addClass("active-content");

        //Hides The Old Container
        $("#about-me-container").removeClass("active-content");
        $("#about-me-container").addClass("inactive-content", "z-depth-4");
    });

    $("#about-me-container").click(function (event) {
        event.preventDefault();

        console.log("button was clicked");

        //Displays New Container
        $("#portfolio-container").removeClass("active-content", "z-depth-4");
        $("#portfolio-container").addClass("inactive-content");

        //Hides The Old Container
        $("#about-me-container").removeClass("inactive-content");
        $("#about-me-container").addClass("active-content", "z-depth-3");
    });

});