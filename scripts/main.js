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
