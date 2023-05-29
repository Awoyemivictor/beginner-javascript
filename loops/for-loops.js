const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];
const name = 'Wes Bos🚀'

// for (let i = 100; i <= 120; i += 2) {
//     console.log(i)
// }

// for (var i = 0; i <= 120; i +=2) {
//     console.log(i)
// }

// for (let i = 0; i < numbers.length; i++)
//     console.log(numbers[i]);

// for of loop
// for (const letter of [...name])
//     console.log(letter)

// for (const number of numbers)
//     console.log(number)

// for in loop
// for (const number in numbers)
//     console.log(number)

const wes = new Object({
    name: 'wes',
    age: 100,
    cool: true,
})

for (const prop in wes)
    console.log(prop);

const baseHumanStats = {
    feet: 2,
    arms: 2,
    eyes: 2,
    head: 1,
};

function Human(name) {
    this.name = name;
}

Human.prototype = baseHumanStats;
const wes2 = new Human('wes');

// console.log(Object.entries(wes2));

for (const prop in wes2)
    console.log(prop)


// while and do while loops
let cool = true;
let i = 1;
while (cool === true) {
    console.log('You are cool');
    i++
    if (i > 10) {
        cool = false;
    }
}

    



