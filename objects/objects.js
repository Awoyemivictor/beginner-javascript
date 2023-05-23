const age = 100;

// eslint-disable-next-line no-new-object
const wes = new Object({
        name: 'wes',
        propertyToCheck: 'NEVER',
        age,
        'cool-dude': true,
        'really cool': false,
        777: true,
        dog: 'snickers',
        clothing: {
                shirts: 10,
                pants: 2,
        },
        sayHello(greeting = 'Hey') {
                return `${greeting} ${this.name}`;
        },
        sneeze: () => {
                console.log('AHHH CHOOO', this);
        },
});

const nameInput = document.querySelector('[name="first"]');
if (nameInput) {
        const name = nameInput.value;
}
const name = nameInput ? nameInput.value : '';
console.log(name);

// Deleting a property from an Object
console.log(delete wes.job);

// Methods: A function that lives inside of an object
console.log(wes.sayHello('Alaye'));

console.log(wes.sneeze());
