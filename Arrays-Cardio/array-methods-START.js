const numbers = [1, 2, 3, 4, 5];

[...'wes'];
Array.of(...'wes');

function createRange(start, end) {
        const range = Array.from({ length: end - start + 1 }, (item, index) => index + start);

        return range;
}

const myRange = createRange(3, 7);
// console.log(Array.isArray(myRange));

// Object Static Methods
const meats = {
        beyond: 10,
        beef: 5,
        pork: 7,
};

// console.log(Object.entries(meats));
// console.log(Object.keys(meats));
// console.log(Object.values(meats));

Object.values(meats).forEach((qty) => {
//         console.log(qty);
// });

Object.keys(meats).forEach((qty) => {
        // console.log(qty);
});

Object.entries(meats).forEach(([key, value]) => {
    // const key = entry[0];
    // const value = entry[1];
    // const [key, value] = entry;
    console.log(key, value);
  })