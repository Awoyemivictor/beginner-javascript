/* eslint-disable no-new-object */
const name1 = 'wes';
let name2 = name1;

name2 = 'Christopher';
console.log(name1 === name2);

// eslint-disable-next-line no-new-object
const person1 = new Object({
        first: 'wes',
        last: 'bos',
        clothing: {
                shirts: 10,
                pants: 2,
        },
});

const person2 = new Object({
        first: 'wes',
        last: 'bos',
});

// const person3 = person1;
// person3.first = 'Larry';
// console.log(person3.first);
// console.log(person1.first);

// Spread Operator
// const person4 = { ...person1 };
// person4.first = 'victor';
// console.log(person4);
// console.log(person1);

// Using Object.assign
// eslint-disable-next-line prefer-object-spread
// const person5 = Object.assign({}, person1);
// person5.clothing.shirts = 100;
// console.log(person5);
// console.log(person1);

// Using lodash
// https://unpkg.com/
// https://lodash.com/docs
const person3 = _.cloneDeep(person1);
person3.first = 'Larry';
person3.clothing.shirts = 100;

// Merging Objects together using spread operator
const meatInventory = new Object({
        bacon: 2,
        sausage: 3,
        oyster: 10,
});

const veggieInventory = new Object({
        lettuce: 5,
        tomatoes: 3,
        oyster: 15,
});

const inventory = {
        ...meatInventory,
        ...veggieInventory,
        bacon: 10,
};

console.log(inventory);

function doStuff(data) {
        data = 'something else';
        console.log(data);
}

doStuff(name1);

function doStuff2(data) {
        data.tomatoes = 100000000001;
        console.log(data);
}

doStuff2(inventory);
