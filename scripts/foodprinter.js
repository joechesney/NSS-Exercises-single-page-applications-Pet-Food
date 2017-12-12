"use strict";
// I realize this is a pitiful way to code this. I worked on this for 2 days trying to automate a print loop that owuld work for both json files, without hard-coding anything. I failed to accomlish that, and wanted to be done with it. I wrote all this in about 2 hours. I will refactor it later. 
const printDogFood = function(foodObj){
    // heading
    let pt = `<h2 class="center">Dog Food</h2><table class="center"><tr>`;
    // first column
    pt+=`<td><h3>${foodObj[0].name}</h3></td>`;
    pt+=`<td><p><strong>${foodObj[0].types[0].type}</strong></p><div>${foodObj[0].types[0].volumes[0].size}: ${foodObj[0].types[0].volumes[0].price}</div><div>${foodObj[0].types[0].volumes[1].size}: ${foodObj[0].types[0].volumes[1].price}</div><p></p></td>`;

    // second column
    pt+=`<td><p><strong>${foodObj[0].types[1].type}</strong></p><div>${foodObj[0].types[1].volumes[0].size}: ${foodObj[0].types[1].volumes[0].price}</div><div>${foodObj[0].types[1].volumes[1].size}: ${foodObj[0].types[1].volumes[1].price}</div><p></p></td>`;
    pt+=`</tr>`;
    
    // second row, first column
    pt+=`<tr>`;
    pt+=`<td><h3>${foodObj[1].name}</h3></td>`;
    pt+=`<td><p><strong>${foodObj[1].types[0].type}</strong></p><div>${foodObj[1].types[0].volumes[0].size}: ${foodObj[1].types[0].volumes[0].price}</div><div>${foodObj[1].types[0].volumes[1].size}: ${foodObj[1].types[0].volumes[1].price}</div><p></p></td>`;
    
    // second row, second column
    pt+=`<td><p><strong>${foodObj[1].types[1].type}</strong></p><div>${foodObj[1].types[1].volumes[0].size}: ${foodObj[1].types[1].volumes[0].price}</div><div>${foodObj[1].types[1].volumes[1].size}: ${foodObj[1].types[1].volumes[1].price}</div><p></p></td>`;
    pt+=`</tr>`;
    
    // end of dog table
    pt+=`</tr><table>`;
    return pt;
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




};


const printCatFood = function(foodObj){
    // heading
    let pt = `<h2 class="center">Cat Food</h2><table class="center"><tr>`;
    pt+=`<td><h3>${foodObj[0].name}</h3></td>`;

    // first row, first column 
    pt+=`<td><p><strong>Breeds</strong></p><p>${foodObj[0].breeds.join(", ")}</p>`;
    
    // first row, second column
    pt+=`<td><p><strong>${foodObj[0].types[0].type}</strong></p><div>${foodObj[0].types[0].volumes[0].size}: ${foodObj[0].types[0].volumes[0].price}</div><div>${foodObj[0].types[0].volumes[1].size}: ${foodObj[0].types[0].volumes[1].price}</div><div>${foodObj[0].types[0].volumes[2].size}: ${foodObj[0].types[0].volumes[2].price}</div><p></p></td>`;


    // first row, third column
    pt+=`<td><p><strong>${foodObj[0].types[1].type}</strong></p><div>${foodObj[0].types[1].volumes[0].size}: ${foodObj[0].types[1].volumes[0].price}</div><div>${foodObj[0].types[1].volumes[1].size}: ${foodObj[0].types[1].volumes[1].price}</div><p></p></td>`;
    pt+=`</tr>`;

    pt+=`<tr>`;
    pt+=`<td><h3>${foodObj[1].name}</h3></td>`;

    // second row, first column
    pt+=`<td><p><strong>Breeds</strong></p><p>${foodObj[1].breeds.join(", ")}</p>`;

    // second row, second column
    pt+=`<td><p><strong>${foodObj[1].types[0].type}</strong></p><div>${foodObj[1].types[0].volumes[0].size}: ${foodObj[1].types[0].volumes[0].price}</div><div>${foodObj[1].types[0].volumes[1].size}: ${foodObj[1].types[0].volumes[1].price}</div><p></p></td>`;


    // second row, third column
    pt+=`<td><p><strong>${foodObj[1].types[1].type}</strong></p><div>${foodObj[1].types[1].volumes[0].size}: ${foodObj[1].types[1].volumes[0].price}</div><div>${foodObj[1].types[1].volumes[1].size}: ${foodObj[1].types[1].volumes[1].price}</div><p></p></td>`;
    pt+=`</tr>`;

    // closes table
    pt+=`</tr><table>`;
    return pt;
    
};









module.exports = {printDogFood, printCatFood};