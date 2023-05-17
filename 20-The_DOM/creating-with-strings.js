const item = document.querySelector('.item');

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute pup <img
    onload="alert('hacked');"
    src="https://picsum.photos/50"/>`;
const myHTML = `
    <div class="wrapper:">
        <h2>Cute ${desc}</h2>
        <img src="${src}" alt=${desc}"/>
        </div>
    `;

const myFragment = document.createRange().createContextualFragment(myHTML);
console.log(myFragment.querySelector('img'));
console.log(myFragment);
document.body.appendChild(myFragment);

