"use strict";
const printFood = function(foodObj, productsTable){
    // NEVER GOT THIS TO WORK
    // PLEASE IGNORE

    // I need an 'if' statement that would check for the prevKey and depending on the key, create a different type of element and append it to the DOM
    // Place 'dog_brands' as a big header
    // key of 'name' will start a new row, and be in its own cell
    // keys of 'type', with associated 'volumes' will be in a cell together as <p> tags
    // somehow end the row???
    let prevKey;
    let counter = 0;
    // const HTMLbuilder = function(foodObj){
        if(typeof foodObj === "string" || typeof foodObj === "number"){
            console.log("prevKey",prevKey);
            if(prevKey === "name"){
                productsTable+=`<td>${foodObj}</td>`;
            } else if(prevKey === "type"){
                productsTable+=`<p>${foodObj}</p>`;
            } else if(prevKey === "size"){
                productsTable+= `<p>${foodObj}</p>`;
            } else if(prevKey === "price") {
                productsTable+=`<p>${foodObj}</p>`;
            }
            console.log("after if clause", productsTable);
            return;
        } else if(Array.isArray(foodObj)){
            for(let i =0; i < foodObj.length; i++){
                prevKey = foodObj;
                printFood(foodObj[i]);
            }
        } else if(typeof foodObj === "object"){
            for(let prop in foodObj){
                prevKey = prop;
                printFood(foodObj[prop]);
            }
        }
    // };
        // For some reason when i tried to execute this function in the main.js file, it would run 22 times. exactly 22 times. so it owuld reset the html builder every time. wtf
    counter++;
    // HTMLbuilder(foodObj);
    
    console.log(counter);
    // return productsTable;
    
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
    
};