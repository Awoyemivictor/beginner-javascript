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

const students = [
        {
                id: '11ce',
                first_name: 'Dall',
                last_name: 'Puckring',
        },
        {
                id: '2958',
                first_name: 'Margarete',
                last_name: 'Brandi',
        },
        {
                id: '565a',
                first_name: 'Bendicty',
                last_name: 'Woodage',
        },
        {
                id: '3a16',
                first_name: 'Micki',
                last_name: 'Mattes',
        },
        {
                id: 'f396',
                first_name: 'Flory',
                last_name: 'Gladeche',
        },
        {
                id: 'de5f',
                first_name: 'Jamill',
                last_name: 'Emilien',
        },
        {
                id: '54cb',
                first_name: 'Brett',
                last_name: 'Aizikowitz',
        },
        {
                id: '9135',
                first_name: 'Lorry',
                last_name: 'Smallman',
        },
        {
                id: '978f',
                first_name: 'Gilly',
                last_name: 'Flott',
        },
];

const people = [
        {
                birthday: 'April 22, 1993',
                names: {
                        first: 'Keith',
                        last: 'Buckley',
                },
        },
        {
                birthday: 'January 3, 1975',
                names: {
                        first: 'Larry',
                        last: 'Heep',
                },
        },
        {
                birthday: 'February 12, 1944',
                names: {
                        first: 'Linda',
                        last: 'Bermeer',
                },
        },
];

const buns = ['egg', 'wonder', 'brioche'];

const meats = {
        beyond: 10,
        beef: 5,
        port: 7,
};

const prices = {
        hotDog: 453,
        burger: 754,
        sausage: 534,
        corn: 234,
};

const orderTotals = [342, 1002, 523, 34, 634, 854, 1644, 2222];

const feedback = [
        { type: 'shirt', price: 4000 },
        { type: 'pants', price: 4532 },
        { type: 'socks', price: 234 },
        { type: 'shirt', price: 2343 },
        { type: 'pants', price: 2343 },
        { type: 'socks', price: 542 },
        { type: 'pants', price: 123 },
];

/*
Looping Methods
*/
// function lotTopping(topping) {
//         console.log(topping);
//         debugger;
// }

// toppings.forEach(lotTopping);

// toppings.forEach((topping, index, array) => {
//         console.log(topping, index, array);
//         // debugger;
// });

/* Example: 
Loop over each topping and:
- Log the topping
- Log the next topping if there is one
- Log the previous topping if there is one
- if it's the last item in the array, log "goodbye"
*/
// console.log(toppings); // Loggint the topping
function logTopping(topping, index, originalArray) {
        const nextTopping = originalArray[index + 1];
        const prevTopping = originalArray[index - 1];

        // log the topping
        console.log(topping);

        // log the prev topping if there is one
        prevTopping ? console.log(prevTopping) : null;

        // log the next topping if there is one
        nextTopping ? console.log(nextTopping) : null;

        // if its the last item in the array, say good bye
        index === originalArray.length - 1 ? console.log('Goodbye') : console.log('getting the next topping');

        // index === originalArray.length && console.log('Goodbye);
        console.log('--------🍕-----');
}

toppings.forEach(logTopping);

console.clear(); // To clear all the toppings work we did above

// Map
const faces = ['😃', '🤠', '🤡', '🤑', '😵', '🌞', '🐶', '😺'];

function addArms(face) {
        return `👋 ${face} 👋`;
}
// const toys = faces.map(addArms);
// console.log(toys);

// const fullNames = ['wes', 'kait', 'poppy'].map((name) => `${name} bos`);
// console.log(fullNames);

function bosify(name) {
        return `${name} Bos`;
}

// const fullNames = ['wes', 'kait', 'poppy'].map(bosify);
// console.log(fullNames);

// Capitalizing the first letter of the word
function capitalize(word) {
        return `${word[0].toUpperCase() + word.slice(1)}`;
}

const fullNames = ['wes', 'kait', 'poppy'].map(capitalize).map(bosify);
// console.log(fullNames);

const orderTotalsWithTax = orderTotals.map((total) => total * 1.13);
// console.log(orderTotalsWithTax);

// Making cowboy bodies out of emojis
function attachBody(face, body) {
        return `
                 ${face}
        　　　　${body.repeat(3)}
        　　　 ${Array(3).fill(body).join(' ')}
        　　 👇🏽 ${body.repeat(2)}　👇🏽
              ${Array(2).fill(body).join('   ')}
              ${Array(2).fill(body).join('   ')}
        　　　 👢　　👢
        `;
}

// faces.map((face) => attachBody(face, '🍟')).forEach((body) => console.log(body));

// Array of objects that comes back from the API
const cleanPeople = people.map((person) => {
        // console.log(person);
        const birthday = new Date(person.birthday).getTime();
        // console.log(birthday);
        const now = Date.now();
        // console.log(birthday, now);
        // 1000 * 60 * 60 * 24 * 365 = 31536000000
        const age = Math.floor(now - birthday / 31536000000);
        console.log(age);

        return {
                age,
                name: `${person.names.first} ${person.names.last}`,
        };
});

// console.table(cleanPeople);

console.clear();
// Looping and Iterating - Filter, Find and Higer Order Functions
const over40 = cleanPeople.filter((person) => person.age > 40);
// console.table(over40);

// Using find() Method
// const student = students.filter((stud) => stud.id === '565a');
// console.log(student);

// function isStudent(student) {
//         return student.id === '565a';
// }

// const student = students.find(isStudent);
// console.log(student);

// function findById(id) {
//         return function isStudent(student) {
//                 return student.id === id;
//         };
// }

// const student = students.find(findById('56a'));
// const student = student.find(findByProp('id', '565a'));

function findByProp(prop, propWeAreLookingFor) {
        return function isStudent(student) {
                return student[prop] === propWeAreLookingFor;
        };
}

// console.log(student)

const student = students.find(findByProp('id', '565a'));
const student2 = students.find(findByProp('first_name', 'Micki'));

console.log(student);
console.log(student2);

console.clear();

let total = 0;
orderTotals.forEach((singleTotal) => {
        total += singleTotal;
});

// console.log(total);

function tallyNumbers(tally, currentTotal) {
        console.log(`The current tally is ${tally}`);
        console.log(`The current total is ${currentTotal}`);
        console.log('-------------');

        return tally + currentTotal;
}

// const allOrders = orderTotals.reduce(tallyNumbers, 0);
// console.log(allOrders);

// Example
const inventory = [
        { type: 'shirt', price: 4000 },
        { type: 'pants', price: 4532 },
        { type: 'socks', price: 234 },
        { type: 'shirt', price: 2343 },
        { type: 'pants', price: 2343 },
        { type: 'socks', price: 542 },
        { type: 'pants', price: 123 },
];

function inventoryReducer(totals, item) {
        console.log(`Looping over ${item.type}`);
        totals[item.type] += 1 || 1;
        return totals;
}
const inventoryCounts = inventory.reduce(inventoryReducer, {});
console.log(inventoryCounts);

const totalInventoryPrice = inventory.reduce((acc, item) => acc + item.price, 0);
console.log(totalInventoryPrice);
