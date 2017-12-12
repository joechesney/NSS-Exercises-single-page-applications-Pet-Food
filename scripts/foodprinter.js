"use strict";

const printFood = function(foodObj){
    let pt = `<h2 class="center">Dog Food</h2><table class="center"><tr>`;
    pt+=`<td>${foodObj[0].name}</td>`;
    pt+=`<td><p>${foodObj[0].types[0].type}</p><div>${foodObj[0].types[0].volumes[0].size}: ${foodObj[0].types[0].volumes[0].price}</div><div>${foodObj[0].types[0].volumes[1].size}: ${foodObj[0].types[0].volumes[1].price}</div></td>`;


    pt+=`<td><p>${foodObj[0].types[1].type}</p><div>${foodObj[0].types[1].volumes[0].size}: ${foodObj[0].types[1].volumes[0].price}</div><div>${foodObj[0].types[1].volumes[1].size}: ${foodObj[0].types[1].volumes[1].price}</div></td>`;
//     this is a long ass list of logging through all the levels of the object
//     vvv Definitely the dumbest waste of time I've ever had vvvv
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

//     The final step would just be adding ".name" and ".price" on every one of the above 8 statements



    pt+=`</tr><table>`;
    return pt;

};

//     function that checks the data type (array, or object, or string/number), 
//     if its a string or number, log the value
//     if its an array, then call the function again on each item in the array
//     if its an object, then call the function again on each property of the object
//     it wisely holds the property key of the current property in a variable called 'prevKey'










module.exports = {printFood};