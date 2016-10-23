/*
* Random fade function
* Use counter to allow values to fade toward new value
*
* Author: Tyler Lee
* Version 3.0
*/

/*
* TODO
* make fade non-linear (so values aren't stuck in the middle all the time)
* helper function for value comparison
*/

var beaglebone = require('bonescript');

var led = ["P9_14", "P9_16", "P9_22"];
var currentValue = [0.0, 0.0, 0.0];
var nextValue = [1.0, 1.0, 1.0];
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
    
    currentValue[0] = valueComparison(currentValue[0], nextValue[0]);
    currentValue[1] = valueComparison(currentValue[1], nextValue[1]);
    currentValue[2] = valueComparison(currentValue[2], nextValue[2]);
    
    currentValue[0] = roundHundreds(currentValue[0]);
    currentValue[1] = roundHundreds(currentValue[1]);
    currentValue[2] = roundHundreds(currentValue[2]);
    
    if (counter == 100) {
        counter = 0;
        nextValue = [roundHundreds(Math.random()), roundHundreds(Math.random()), roundHundreds(Math.random())];
    }
    

    if (counter < 10) {
        if (counter == 0) {
            console.log("========== Next Color ==========");
        }
        console.log("Counter = 0%d       Current Value: [%d, %d, %d] ->  Next Value: [%d, %d, %d]", counter, currentValue[0], currentValue[1], currentValue[2], nextValue[0], nextValue[1], nextValue[2]);
    } else {
        console.log("Counter = %d       Current Value: [%d, %d, %d] ->  Next Value: [%d, %d, %d]", counter, currentValue[0], currentValue[1], currentValue[2], nextValue[0], nextValue[1], nextValue[2]);
    }
}

function valueComparison(value1, value2) {
    if (value1 < value2) {
        return value1 += 0.01;
    } else if (value1 > value2) {
        return value1 -= 0.01;
    } else {
        return value1;
    }
}

function roundHundreds(number) {
    return Math.round(number * 100) / 100;
}