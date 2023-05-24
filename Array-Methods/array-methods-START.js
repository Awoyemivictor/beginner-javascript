// Join Method
const buns = new Array('egg', 'wonder', 'brioche');
// console.log(buns.join(' or '));

// Split Method
const foodString = 'hot dogs, hamburgers, sausages, corn, 👪';
// console.log(foodString.split(','));

// Pop Method
const toppings = [
        'Mushrooms',
        'Tomatoes',
        'Eggs',
        'Chili',
        'Lettuce',
        'Avocado',
        'Chiles',
        'Bacon',
        'Pickles',
        'Onions',
        'Cheese',
];
// take the last item off toppings with pop()
const lastItem = toppings.pop();
// console.log(lastItem);
// add it back with push()
toppings.push(lastItem);
// console.log(toppings);

// Shif and Unshift methods
const firstItem = toppings.shift(); // take the first item off toppings with shift()
// console.log(firstItem);

toppings.unshift(firstItem); // add it back in with unshift()
// console.log(firstItem);

// Working with immutability
const newToppings = toppings.slice(0, toppings.length - 1);
// console.log(newToppings);

// Putting it back
const newToppings2 = [...newToppings, toppings[toppings.length - 1]];
// console.log(newToppings2);

// Making a copy of the toppings array with slice()
const toppingsCopy = toppings.slice(0);
// console.log(toppingsCopy);
// Checking if the original toppings is changed or not
toppings[0] = 'Mushy Boi';
// console.log(toppings);
// console.log(toppingsCopy);

const toppingsCopy2 = [...toppings];
toppingsCopy.splice(3, 3);
// console.log(toppingsCopy);

const avoIndex = toppings.indexOf('Avocado');
// console.log(avoIndex);

// IndexOf works with any type
const wes = {
        name: 'wes',
};
const people = [{ name: 'scott' }, wes];
console.log(people.indexOf(wes));

console.log(people.indexOf({ name: 'scott' }));
console.log({ name: wes === 'wes' });

// includes()
const isInToppings = toppings.includes('Hot Sauce');
console.log(isInToppings);
// add it if it's not
if (!isInToppings) {
        toppings.push('Hot Sauce');
}
console.log(toppings);
console.log(toppings.includes('Hot Sauce'));

// Flipping the toppings around
// Using reverse - mutable method
toppings.reverse();
// console.log(toppings);

// Reversing immutably
const toppingsReversed = [...toppings].reverse();
console.log(toppingsReversed);
