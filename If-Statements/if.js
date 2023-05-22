function slugify1(sentence, lowercase) {
        if (lowercase) {
                return sentence.replace(/\s/g, '-').toLowerCase();
        }

        return sentence.replace(/\s/g, '-');
}

function slugify2(sentence, lowercase) {
        let slug = sentence.replace(/\s/g, '-');

        if (lowercase) {
                slug = slug.toLowerCase();
        }

        return slug;
}

function slugify3(sentence, lowercase) {
        const slug = sentence.replace(/\s/g, '-');

        if (lowercase) {
                return slug.toLowerCase();
        }

        return slug;
}

function slugify4(sentence, lowercase) {
        const name = 'wes';
        const last = 'bos';
        if (name === 'scott' || (name === 'wes' && last === 'bos')) {
                console.log('WOOOOH.... Cool name!');
        } else {
                console.log('Tell me your name joor nah');
        }
}

function nameIsAwesome(name) {
        return 'awesome'.includes(name);
}

if (nameIsAwesome('wes')) {
        console.log('COOL NAME WES');
}

const dog = '';

if (dog) {
        console.log('You have a dog');
} else {
        console.log("You don't have a dog");
}

const score = {};

if (score) {
        console.log('There is a score already');
} else {
        console.log('No score yet');
}

const values = [[], {}, -10, 1, 0, '', 'full string', ' ', undefined, NaN, null];

console.group('truthy or falsy values');

values.forEach((value) => {
        if (value) {
                console.log(value, 'is truthy');
        } else {
                console.log(value, 'is falsy');
        }
});

console.groupEnd('');

const isCool = true;

if (isCool) {
} else {
        console.log('You are not cool');
}

if (!isCool) {
        console.log('You are not cool');
}

const count = 0;
const sentence = `You have ${count} item${count === 1 ? '' : 's'} in your cart`;
console.log(sentence);

function check1() {
        return true;
}

function check2() {
        console.log('Running check 1');
        return true;
}

function check3() {
        return true;
}

if (check1() && check2() && check3()) {
        console.log('Running check 3');
} else {
        console.log('all checks passed');
}

function showAdinBar() {
        console.log('is showing adming function');
}

isAdmin = 2;
if (isAdmin > 1) showAdinBar();
