// const pic = document.querySelector('.nice');
// pic.classList.toggle("round");


// window.addEventListener("load", function() {
//     console.log(pic.naturalWidth)
// });

// console.log(pic.getAttribute("alt"));
// pic.setAttribute("alt", "REALLY CUTE PUP");
// console.log(pic.hasAttribute("alt"));

// pic.setAttribute("wes-is-cool", "REALLY CUTE PUP");

const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener("click", function() {
    alert(`Welcome ${custom.dataset.name}
    ${custom.dataset.last} `);
})