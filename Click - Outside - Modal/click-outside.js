const cardButtons = document.querySelectorAll('.card button');
const modalInner = document.querySelector('modal-inner');

function handleCardButtonClick(event) {
        const button = event.currentTarget;
        const card = button.closest('.card');
        // Grab the image src
        const imgSrc = card.querySelector('img').src;
        const desc = card.dataset.description;
        const name = card.querySelector('h2').textContent;

        modalInner.innerHTML = `<img src="${imgSrc.replace('200', '600')}" alt="${name}" />
                        <p>${desc}</p>`;

        
}
