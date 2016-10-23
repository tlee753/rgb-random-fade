var beaglebone = require('bonescript');

var led = ["P9_14", "P9_16", "P9_22"];

var red = 0;
var green = 0.33;
var blue = 0.66;
var redDirection = 1;
var greenDirection = 1;
var blueDirection = 1;

beaglebone.pinMode(led[0], beaglebone.ANALOG_OUTPUT);
beaglebone.pinMode(led[1], beaglebone.ANALOG_OUTPUT);
beaglebone.pinMode(led[2], beaglebone.ANALOG_OUTPUT);

setInterval(fade, 10);

function fade() {
    beaglebone.analogWrite(led[0], red);
    beaglebone.analogWrite(led[1], green);
    beaglebone.analogWrite(led[2], blue);

    red += redDirection*0.01;
    green += greenDirection*0.01;
    blue += blueDirection*0.01;
    
    if (red > 1.0) {
        red = 1;
        redDirection = -1;
    }    
    else if (red <= 0) {
        red = 0;
        redDirection = 1;
    }
    
    if (green > 1.0) {
        green = 1;
        greenDirection = -1;
    }    
    else if (green <= 0) {
        green = 0;
        greenDirection = 1;
    }
    
    if (blue > 1.0) {
        blue = 1;
        blueDirection = -1;
    }    
    else if (blue <= 0) {
        blue = 0;
        blueDirection = 1;
    }
    
    console.log("Red: %d, Green: %d, Blue: %d", red, green, blue);
}