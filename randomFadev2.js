/*
* Random fade function
* Use counter to allow values to fade toward new value
*
* Author: Tyler Lee
* Version 2.0
*/

var beaglebone = require('bonescript');

var led = ["P9_14", "P9_16", "P9_22"];
var currentValue = [0, 0, 0];
var nextValue = [1, 1, 1];
var direction = [1, 1, 1];
var counter = 0;

beaglebone.pinMode(led[0], beaglebone.ANALOG_OUTPUT);
beaglebone.pinMode(led[1], beaglebone.ANALOG_OUTPUT);
beaglebone.pinMode(led[2], beaglebone.ANALOG_OUTPUT);

setInterval(random, 100);

function random() {
    counter++;
    
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
    
    if (counter == 100) {
        counter = 0;
        nextValue = [Math.random(), Math.random(), Math.random()];
    }
    
    if (counter < 10) {
        console.log("Counter = 0%d       Current Value: [%d, %d, %d] ->  Next Value: [%d, %d, %d]", counter, currentValue[0], currentValue[1], currentValue[2], nextValue[0], nextValue[1], nextValue[2]);
    } else {
        console.log("Counter = %d       Current Value: [%d, %d, %d] ->  Next Value: [%d, %d, %d]", counter, currentValue[0], currentValue[1], currentValue[2], nextValue[0], nextValue[1], nextValue[2]);
    }
}

