const myMap = new Map();
// eslint-disable-next-line no-new-object
const person1 = new Object({
        name: 'wes',
        age: 20,
});

// APIS .set(), .has(), .delete()

myMap.set('name', 'wes');
myMap.set(100, 'This is a number');
// Adding object as key in a map
myMap.set(person1, 'Really cool');
console.log(myMap);

console.log(myMap.get(person1));

// Example 2
const score = 100;
const prizes = new Map();

prizes.set(100, 'Bear');
prizes.set(200, 'Duck');
prizes.set(300, 'Car');

console.log(`you win a ${prizes.get(score)}`);

// Select that ul
const ul = document.querySelector('.prizes');

// for (const [points, prize] of prizes) {
//         const li = `<li>${points} - ${prize}</li>`;
//         ul.insertAdjacentElement('beforeend', li);
// }

// Passing items to map
// Example 1
const passItem1 = new Map([
        [1, 2],
        [3, 4],
]);

console.log(passItem1);

// Example 2
const passItem2 = new Map([
        ['name', 'wes'],
        ['age', '49'],
]);

console.log(passItem2);

// JSON
const person = {
        name: 'wes',
        age: 100,
};

console.log(JSON.stringify(person));
