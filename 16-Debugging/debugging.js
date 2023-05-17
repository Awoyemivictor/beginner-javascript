const people = [
    {
        name: "Wes",
        cool: true,
        country: "Canada"
    },
    {
        name: "Scott",
        cool: true,
        country: "Merica"
    },
    {
        name: "Victor",
        cool: false,
        country: "Nigeria"
    },
];

people.forEach((person, index) => {
    console.log(person.name);
});

function doctorize(name) {
    return `Dr. ${name}`;
}

function greet(name) {
    doesntExist();
    return `Hello ${name}`;
}

function go() {
    const name = doctorize(greet("Victor"));
    console.log(name);
}



const button = document.querySelector(".bigger");
button.addEventListener('click', function(e) {
    const newFontSize = parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
    e.currentTarget.style.fontSize = `${newFontSize}px`;
});

// Dad joke fetch
async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'tex/plain',
        },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
}

