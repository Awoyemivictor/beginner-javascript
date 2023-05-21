const terms = document.querySelector('.terms-and-conditions');
const button = document.querySelector('.accept');
const watch = document.querySelector('.watch');
const ob = new IntersectionObserver(obCallback, {
        root: terms,
        threshold: 1,
});
ob.observe(terms.lastElementChild);

function scrollToAccept() {
        if (!terms) {
                return; // quit this there isn't that item on the page
        }
        terms.addEventListener('scroll', (e) => {
                // console.log(e.currentTarget.scrollTop);
                // console.log(e.currentTarget.scrollHeight);
        });
}

function obCallback(payload) {
        if (payload[0].intersectionRatio === 1) {
                button.disabled = false;
                console.log('REMOVING DISABLED');
                // stop observing the button
                ob.unobserve(terms.lastElementChild);
        } else {
                button.disabled = true;
        }
}

scrollToAccept();

// const terms = document.querySelector('.terms-and-conditions');

// terms.addEventListener('scroll', (e) => {
//         console.log(e.currentTarget.scrollTop);
//         console.log(e.currentTarget.scrollHeight);
// });
