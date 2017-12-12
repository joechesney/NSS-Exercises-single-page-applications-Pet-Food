"use strict";
let foodprinter = require("./foodprinter");
const dogOutputBox = document.getElementById("dog-output");
const catOutputBox = document.getElementById("cat-output");

let food;

let dogXHR = new XMLHttpRequest();
dogXHR.addEventListener("load", function(){

    food = JSON.parse(this.responseText);
    for(let prop in food){
        food=food[prop];
    }
    let someBuilder = foodprinter.printDogFood(food);    
    console.log(someBuilder);
    dogOutputBox.innerHTML = someBuilder;
    // foodprinter.bestLoop(food);
});
dogXHR.open("GET", "../scripts/dogfood.json");
dogXHR.send();

let catXHR = new XMLHttpRequest();
catXHR.addEventListener("load", function(){

    food = JSON.parse(this.responseText);
    for(let prop in food){
        food=food[prop];
    }
    let someBuilder = foodprinter.printCatFood(food);    
    console.log(someBuilder);
    catOutputBox.innerHTML = someBuilder;
    // foodprinter.bestLoop(food);
});
catXHR.open("GET", "../scripts/catfood.json");
catXHR.send();