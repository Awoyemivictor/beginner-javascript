const names = ['wes', 'kait', 'snickers'];

// console.log(names[names.length - 1]);

// Mutative Method
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// numbers1.reverse();
// console.log(numbers1);

// Immutative Method
const pizza = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const pizzaSlice = pizza.slice(2, 6);
// console.log(pizzaSlice);
// console.log(pizza);

// Using Mutable method but don't want to mutate the original array
const numbersReversed = [...numbers1].reverse();
// console.log(numbersReversed);
// console.log(numbers1);

// Using push Method
// names.push('lux'); // Mutates the original array
// console.log(names);
// const names2 = [...names, 'lux'];
// console.log(names2);

// Using the unshift Method
// names.unshift('poppy'); // Mutable Way
// console.log(names);

// const names3 = ['poppy', ...names]; // Immutable Way
// console.log(names3);

// Slice and Splice Methods
// console.log(numbers1);
// numbers1.splice(3, 2);
// console.log(numbers1);

// Addint items to the middle of an array

const bikes = ['bianchi', 'miele', 'panasonic', 'miyata'];
const newBikes = [...bikes.slice(0, 2), 'benotto', ...bikes.slice(2)];
console.log(newBikes);

// removing panasonic
const newBikes2 = [...newBikes.slice(0, 3), ...newBikes.slice(4)];
console.log(newBikes2);

const comments = [
        { text: 'Cool Beans', id: 123 },
        { text: 'Love this', id: 133 },
        { text: 'Neato', id: 233 },
        { text: 'Good bikes', id: 333 },
        { text: 'So good', id: 433 },
];

function deleteComment(id, comments) {
        // first find the index of the item in the array
        const commentIndex = comments.findIndex((comments) => comments.id === id);
        // make a new array without that item in it
        return [...comments.slice(0, commentIndex), ...comments.slice(commentIndex + 1)];
        // return our new array
}

const kaitIndex = names.findIndex((names) => names === 'kait');
console.log(kaitIndex);
console.log(names[kaitIndex]);

const newNamesWithoutKait = [
        // Get everything up to the kait index
        ...names.slice(0, kaitIndex),
        // Everything after
        ...names.slice(kaitIndex + 1),
].flat();
console.log(newNamesWithoutKait);

const newNames999 = newNamesWithoutKait.flat();
console.log(newNames999);
