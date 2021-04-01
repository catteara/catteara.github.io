"use strict";

    var dayNames = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
    var months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    var d = new Date();
    var dayName = dayNames[d.getDay()];
    var monthName = months[d.getMonth()];
    var fullDate = dayName + ", " + d.getDate() + " "  + monthName + " " + d.getFullYear() + ".";

    document.getElementById("rightNow").innerHTML =  fullDate;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


