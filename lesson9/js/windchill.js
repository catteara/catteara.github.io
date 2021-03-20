var t =  document.getElementById("temp").innerHTML;
var s = document.getElementById("windSpeed").innerHTML;

var f = Math.round(35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow(s, 0.16)));

if(t > 50.0 || s < 3.0) {
    document.getElementById("windChill").innerHTML =  " N/A";
} else {
    document.getElementById("windChill").innerHTML =  f;
};