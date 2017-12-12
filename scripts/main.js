"use strict";
let foodprinter = require("./foodprinter");
const outputBox = document.getElementById("output");

let food;

let newXHR = new XMLHttpRequest();
newXHR.addEventListener("load", function(){

    food = JSON.parse(this.responseText);
    // for(let prop in food){
    //     food=food[prop];
    // }
    let someBuilder = "<table><tr>";
    someBuilder+=foodprinter.printFood(food, someBuilder);
    someBuilder += "</tr></table>";    
    console.log(someBuilder);
    outputBox.innerHTML = someBuilder;
    // foodprinter.bestLoop(food);
});
newXHR.open("GET", "../scripts/dogfood.json");
newXHR.send();
