(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports.printFood = function(foodObj){
//     this is a long ass list of logging through all the levels of the object

//     console.log(typeof foodObj);

//     console.log("foodObj",foodObj); // array with 2 items, both objects
//     console.log("foodObj[0]", foodObj[0]); // object with 2 properties: "name" and "types"
//     console.log("foodObj[1]", foodObj[1]);

//     console.log("foodObj[0].name", foodObj[0].name); // "Chuck Wagon"
//     console.log("foodObj[1].name", foodObj[1].name); // "Purina"
    
//     console.log("foodObj[0].types", foodObj[0].types); // array with 2 items, both objects
//     console.log("foodObj[1].types", foodObj[1].types);
    
//     console.log("foodObj[0].types[0]",foodObj[0].types[0]); // object with 2 properties: "type" and "volumes"
//     console.log("foodObj[0].types[1]",foodObj[0].types[1]);
//     console.log("foodObj[1].types[0]",foodObj[1].types[0]);// object with 2 properties: "type" and "volumes"
//     console.log("foodObj[1].types[1]",foodObj[1].types[1]);
    
//     console.log("foodObj[0].types[0].type",foodObj[0].types[0].type); // "all_natural"
//     console.log("foodObj[0].types[1].type",foodObj[0].types[1].type); // "standard"
//     console.log("foodObj[0].types[0].volumes",foodObj[0].types[0].volumes); // array with 2 items, both objects
//     console.log("foodObj[0].types[1].volumes",foodObj[0].types[1].volumes);
//     console.log("foodObj[1].types[0].type",foodObj[1].types[0].type); // "puppy"
//     console.log("foodObj[1].types[1].type",foodObj[1].types[1].type); // "standard"
//     console.log("foodObj[1].types[0].volumes",foodObj[1].types[0].volumes); // array with 2 items, both objects
//     console.log("foodObj[1].types[1].volumes",foodObj[1].types[1].volumes);

//     // Chuck Wagon
//     console.log("foodObj[0].types[0].volumes[0]",foodObj[0].types[0].volumes[0]); // objects with 2 properties: "name", and "price"
//     console.log("foodObj[0].types[1].volumes[1]",foodObj[0].types[0].volumes[1]);
//     console.log("foodObj[0].types[1].volumes[1]",foodObj[0].types[1].volumes[0]);
//     console.log("foodObj[0].types[1].volumes[1]",foodObj[0].types[1].volumes[1]);
    
//     // Purina
//     console.log("foodObj[1].types[0].volumes[0]",foodObj[1].types[0].volumes[0]); // objects with 2 properties: "name", and "price"
//     console.log("foodObj[1].types[1].volumes[1]",foodObj[1].types[0].volumes[1]);
//     console.log("foodObj[0].types[1].volumes[1]",foodObj[1].types[1].volumes[0]);
//     console.log("foodObj[0].types[1].volumes[1]",foodObj[1].types[1].volumes[1]);

//     // The final step would just be adding ".name" and ".price" on every one of the above statements


//     // function that checks the data type (array, or object, or string/number), 
//     // if its a string or number, log the value
//     // if its an array, then call the function again on each item in the array
//     // if its an object, then call the function again on each property of the object

    
};

const testObj = {
    "food": "pizza",
    "chups": 4
};
let prevKey;
let counter = 0;
const bestLoop = function(obj) { // this is dope. need to figure out how to use this
    counter++;
    if(typeof obj === "string"){
        console.log(counter, prevKey, obj);
        counter = 0;
        return;
    } else if(typeof obj === "number"){
        console.log(counter, prevKey, obj);
        
        return;
    } else if(Array.isArray(obj)){
        for(let i =0; i < obj.length; i++){
            prevKey = obj;
            bestLoop(obj[i]);
        }
    } else if(typeof obj === "object"){
        for(let prop in obj){
            prevKey = prop;
            bestLoop(obj[prop]);
        }
    }
};

// bestLoop(testObj);

module.exports = {bestLoop};
},{}],2:[function(require,module,exports){
"use strict";
let foodprinter = require("./foodprinter");


let food;

let newXHR = new XMLHttpRequest();
newXHR.addEventListener("load", function(){

    food = JSON.parse(this.responseText);
    for(let prop in food){
        food=food[prop];
    }
    // foodprinter.printFood(food);
    foodprinter.bestLoop(food);
});
newXHR.open("GET", "../scripts/dogfood.json");
newXHR.send();

},{"./foodprinter":1}]},{},[2]);
