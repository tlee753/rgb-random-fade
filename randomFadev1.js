/*
* Random fade function
* Scraped due to math imprecision and array comparison not working
*
* Author: Tyler Lee
* Version 1.0
*/

var beaglebone = require('bonescript');

var led = ["P9_14", "P9_16", "P9_22"];
var currentValue = [0, 0, 0];
var nextValue = [0, 0, 0];
var direction = [1, 1, 1];

beaglebone.pinMode(led[0], beaglebone.ANALOG_OUTPUT);
beaglebone.pinMode(led[1], beaglebone.ANALOG_OUTPUT);
beaglebone.pinMode(led[2], beaglebone.ANALOG_OUTPUT);

setInterval(random, 10);

function random() {
    beaglebone.analogWrite(led[0], currentValue[0]);
    beaglebone.analogWrite(led[1], currentValue[1]);
    beaglebone.analogWrite(led[2], currentValue[2]);
    
    if (currentValue[0] < nextValue[0]) {
        currentValue[0] += 0.01;
    } else if (currentValue[0] > nextValue[0]) {
        currentValue[0] -= 0.01;
    }
    
    if (currentValue[1] < nextValue[1]) {
        currentValue[1] += 0.01;
    } else if (currentValue[1] > nextValue[1]) {
        currentValue[1] -= 0.01;
    }
    
    if (currentValue[2] < nextValue[2]) {
        currentValue[2] += 0.01;
    } else if (currentValue[2] > nextValue[2]) {
        currentValue[2] -= 0.01;
    }
    
    if (currentValue === nextValue) {
        nextValue = [Math.random(), Math.random(), Math.random()];
    }
    
    console.log("Current Value: [%d, %d, %d] ->  Next Value: [%d, %d, %d]", currentValue[0], currentValue[1], currentValue[2], nextValue[0], nextValue[1], nextValue[2]);
}

