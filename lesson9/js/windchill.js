var temp = document.getElementById("temp")
var windSpeed = document.getElementById("windSpeed")

function windChill(temp, windSpeed) {


    if(temp > 50.0 || windSpeed < 3.0) {
        return " 0";
    } else {
        var math = Math.round(35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16)));
        return math;
    };

}


