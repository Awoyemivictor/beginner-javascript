// function buzzer() {
//         console.log('ENNNGGG!');
// }

// function sayHi() {
//         console.log('HEY');
// }

// function setImmediateInterval(funcToRun, ms) {
//         // right away call that function
//         funcToRun();
//         return setInterval(sayHi, ms);
// }

// setImmediateInterval(buzzer, 2000);

function destroy() {
        document.body.innerHTML = `<p>DESTROYED</p>`;
}

const bombTimer = setTimeout(destroy, 5000);

console.log(typeof bombTimer);

window.addEventListener('click', () => {
        console.log('You clicked! You saved the world!');
        // How do you stop the timer from running?!
        clearTimeout(bombTimer); // STOP THE TIMER FROM RUNNING
});

const poopInterval = setInterval(() => {
        console.log(`💩`);
        console.log('Hehehe');
}, 10);

setTimeout(() => {
        clearInterval(poopInterval);
}, 3000);
