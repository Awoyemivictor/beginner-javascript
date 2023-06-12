const shoppingForm = document.querySelector(".shopping");
const list = document.querySelector(".list");
// We need an array to hold our state
const items = [];
const log = console.log;

function handleSubmit(e) {
    e.preventDefault();
    log("submitted");
    const name = e.currentTarget.item.value;
    const item = {
        name: name,
        id: Date.now(),
        complete: false,
    };

    // if it's empty, then don't submit it.
    if (!name) return;
    
    // push the items into our state
    items.push(item)
    log(`There are now ${items.length} in your state`);
    // clear the form
    e.target.reset();
    displayItems();
    

    list.dispatchEvent(new CustomEvent('itemsUpdated'));
}

function displayItems() {
    log(items);
    const html = items
    .map(
        (item) => `<li class="shopping-tem">
        <input type="checkbox">
        <span class="itemName">${item.name}</span>
        <button aria-label="Remove ${item.name}>&times;</button>
        </li>`
        )
        .join("");
    list.innerHTML = html;
}

function mirrorToLocalStorage() {
    localStorage.setItem(items, 
        JSON.stringify(items));
    console.info('Saving items to localstorage');
}

function restoreFromLocalStorage() {
    console.log("Restoring from LS");
    const lsItems = JSON.parse(localStorage.getItem("items"));

    if (lsItems.length) {
        items = lsItems;
        list.dispatchEvent(new CustomEvent('itemsUpdated'));
    }
}

const buttons = list.querySelector('button', log(buttons));

shoppingForm.addEventListener('submit', handleSubmit);
list.addEventListener('itemsUpdated', displayItems);
list.addEventListener("itemsUpdated", mirrorToLocalStorage);


