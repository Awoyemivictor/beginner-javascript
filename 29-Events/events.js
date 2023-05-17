const buyButtons = document.querySelectorAll("button.buy");
const photoE1 = document.querySelector(".photo");

photoE1.addEventListener("mouseenter", function(e) {
    // console.log(e.currentTarget);
    console.log(this);
})


function handleBuyButtonClick(e) {
    const button = e.target;
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.target === e.currentTarget);
    e.stopPropagation();
}


buyButtons.forEach(function(oprah) {
    oprah.addEventListener('click', handleBuyButtonClick);
})

window.addEventListener('clic', function(event) {
    console.log("YOU CLICKED THE WINDOW");
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    event.stopPropagation();
    console.log(event.bubbles);
})