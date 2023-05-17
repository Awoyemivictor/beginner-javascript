
// 'fruits' array created using array literal notation.
const fruits = ["Apple", "Banana"];
console.log(fruits.length);

// 'fruits2' array created using the Array() constructor.
const fruits2 = new Array("Apple", "Banana");
console.log(fruits2.length);

// 'fruits3' array created using String.prototype.split().
const fruits3 = "Apple, Banana".split(", ");
console.log(fruits3.length);


// CREATE STRING FROM ARRAY
const fruits4 = ["Apple", "Banana"];
const fruitsString = fruits4.join(", ");
console.log(fruitsString);

// ACCESSING AN ARRAY ITEM BY ITS INDEX
const fruits5 = ["Apple", "Banana"];

// The index of an array's first element is always 0.
console.log(fruits5[0]);
// The index of an array's second element is always 1.
console.log(fruits5[1]);
// The index of an array's last element is always one
// less than the length of the array.
console.log(fruits5[fruits5.length - 1]);
// Using an index number larger than the array's length
// returns 'undefined'.
console.log(fruits5[99]);


// FINDING THE INDEX OF AN ITEM IN AN ARRAY
const fruits6 = ["Apple", "Banana"];
console.log(fruits6.indexOf("Banana"));


// CHECKING IF AN ARRAY CONTAINS A CERTAIN ITEM
const fruits7 = ["Apple", "Banana"];
console.log(fruits7.includes("Banana"));
console.log(fruits7.includes("Cherry"));
// If indexOf() doesn't return -1, the array contains the given item.
console.log(fruits7.indexOf("Banana") !== -1);
console.log(fruits7.indexOf("Cherry") !== -1);


// APPENDING AN ITEM TO AN ARRAY
const fruits8 = ["Apple", "Banana"];
const newLength = fruits8.push("Orange");
console.log(fruits8);
console.log(newLength);


// REMOVING THE LAST ITEM FROM THE END OF AN ARRAY
const fruits9 = ["Apple", "Banana", "Orange"];
const removedItem = fruits9.pop();
console.log(fruits9);
console.log(removedItem);


// REMOVING MULTIPLE ITEMS FROM THE END OF AN ARRAY
const fruits10 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start = -3;
const removedItems = fruits10.splice(start);
console.log(fruits10);
console.log(fruits10.length);
console.log(removedItems);
console.log(removedItems.length);


// TRUNCATING AN ARRAY DOWN TO JUST ITS FIRST N ITEMS
const fruits11 = ["Apple", "Banana", "Strawberry", "Mango", "Cherry"];
const start2 = 2;
const removedItems2 = fruits11.splice(start2);
console.log(fruits11);
console.log(removedItems2);


// REMOVING THE FIRST ITEM FROM AN ARRAY
const fruits12 = ["Apple", "Banana"];
const removedItems3 = fruits12.shift();
console.log(fruits12);
console.log(removedItems3);


// REMOVING MULTIPLE ITEMS FROM THE BEGGINNING OF AN ARRAY
const fruits13 = ["Apple", "Strawberry", "Cherry", "Banana", "Mango"];
const start3 = 0;
const deleteCount = 3;
const removedItems4 = fruits13.splice(start3, deleteCount);
console.log(fruits13);
console.log(removedItems4);


// ADDING A NEW FIRST ITEM TO AN ARRAY
const fruits14 = ["Banana", "Mango"];
const newLength14 = fruits14.unshift("Strawberry");
console.log(fruits14);
console.log(newLength14);


// REMOVING A SINGLE ITEM BY INDEX
const fruits15 = ["Strawberry", "Banana", "Mango"];
const start15 = fruits15.indexOf("Banana");
const deleteCount15 = 1;
const removedItems15 = fruits15.splice(start15, deleteCount15);
console.log(fruits15);
console.log(removedItems15);


// REMOVING MULTIPLE ITEMS BY INDEX
const fruits16 = ["Apple", "Banana", "Strawberry", "Mango"];
const start16 = 1;
const deleteCount16 = 2;
const removedItems16 = fruits16.splice(start16, deleteCount16);
console.log(fruits16);
console.log(removedItems16);


// REPLACING MULTIPLE ITEMS IN AN ARRAY
const fruits17 = ["Apple", "Banana", "Strawberry"];
const start17 = -2;
const deleteCount17 = 2;
const removedItems17 = fruits17.splice(start17, deleteCount17, "Mango", "Cherry");
console.log(fruits17);
console.log(removedItems17);


// ITERATING OVER AN ARRAY
const fruits18 = ["Apple", "Mango", "Cherry"];
for(const fruit of fruits18) {
    console.log(fruit);
}


// CALLING A FUNCTION ON EACH ELEMENT IN AN ARRAY
const fruits19 = ["Apple", "Mango", "Cherry"];
fruits19.forEach((item, index, array) => {
    console.log(item, index);
});


// MERGING MULTIPLE ARRAYS TOGETHER 
const fruits20 = ["Apple", "Banana", "Strawberry"];
const moreFruits20 = ["Mango", "Cherry"];
const combinedFruits20 = fruits20.concat(moreFruits20);
console.log(combinedFruits20);
console.log(fruits20);
console.log(moreFruits20);


// COPYING AN ARRAY
const fruits21 = ["Strawberry", "Mango"];
const fruitsCopy21a = [...fruits21];
console.log(fruitsCopy21a);
const fruitsCopy21b = Array.from(fruits21);
console.log(fruitsCopy21b);
const fruitsCopy21c = fruits21.slice();
console.log(fruitsCopy21c);


// CREATING SHALLOW ARRAY COPY
const fruits22 = ["Strawberry", "Mango"];
const fruitsAlias22 = fruits22;
console.log(fruits22 === fruitsAlias22);
fruits22.unshift("Apple", "Banana");
console.log(fruits22);
console.log(fruitsAlias22);


// GROUPING THE ELEMENTS OF AN ARRAY
const inventory23 = [
    { name: "asparagus", type: "vegetables" },
    { name: "bananas", type: "fruit" },
    { name: "goat", type: "meat" },
    { name: "cherries", type: "fruit" },
    { name: "fish", type: "meat" },
];
//  =


// CREATING A TWO-DIMENSIONAL ARRAY
const board = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    [" ", " ", " ", " ", " ", " ", " ", " "],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
];
console.log(`${board.join("\n")}\n\n`);
board[4][4] = board[6][4];
board[6][4] = " ";
console.log(board.join("\n"));


// USING AN ARRAY TO TABULATE A SET OF VALUES
const values25 = [];
for(let x = 0; x < 10; x++) {
    values25.push([2 ** x, 2 * x ** 2]);
}
console.table(values25);


// CREATING AN ARRAY USING THE RESULT OF A MATCH
const myRe = /d(b+)(d)/i;
const execResult = myRe.exec("cdbBdbsbz");

console.log(execResult.input);
console.log(execResult.index);
console.log(execResult);