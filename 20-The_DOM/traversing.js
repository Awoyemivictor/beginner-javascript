// const wes = document.querySelector('.wes');
// console.log(wes.childNodes);
// console.log(wes.firstElementChild);
// console.log(wes.lastElementChild);
// console.log(wes.previousElementSibling);
// console.log(wes.nextElementSibling);
// console.log(wes.parentElement);
// console.log(wes.children);
// console.log(wes.closest)

const p = document.createElement("p");
p.textContent = "I will be removed";
document.body.appendChild(p);
p.remove();
console.log(p);