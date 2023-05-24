/*
Callback methods
*/

// Find the first rating that talks about a burger with find()
// Find all ratings that are above 2 with filter()
// Find all ratings that talk about a burger with filter()
// Remove the one star rating however you like!

// Check if there is at least 5 of one type of meat with some()
// Make sure we have at least 3 of every meat with every()
// Sort the toppings alphabetically with sort()
// Sort the order totals from most expensive to least with sort()
// Sort the prices with sort()

const feedback = [
        { comment: 'Love the burgs', rating: 4 },
        { comment: 'Horrible Service', rating: 2 },
        { comment: 'Smoothies are great, like the burger too', rating: 5 },
        { comment: 'Ambiance needs work', rating: 3 },
        { comment: "I DON'T LIKE BURGERS", rating: 1 },
];

// const burgRating = feedback.find((rating) => rating.comment.includes('burg'));
// console.log(burg);

// function findBurgRating(singleFeedback) {
//         return singleFeedback.comment.includes('burg');
// }

// const burgRating = feedback.find(findBurgRating);
// console.log(burgRating);

// Grouping all the find functions into an object
// const util = {
//         findBurgRating(singleFeedback) {
//                 return singleFeedback.comment.includes('burg');
//         },
// };

// const findBurgRating = (singleFeedback) => singleFeedback.comment.include('burg');
// const findSmoothieRating = (singleFeedback) => singleFeedback.comment.includes('Smoothie');
// const burgRating = feedback.find(findSmoothieRating);

// console.log(burgRating);

function findByWord(word) {
        return function (singleFeedback) {
                return singleFeedback.comment.includes(word);
        };
}

const burgFinder = feedback.find(findByWord('burg'));
// const burgRating = feedback.find(burgFinder);

const smoothieFinder = feedback.find(findByWord('Smoothie'));
// const smoothieRating = feedback.find(smoothieFinder);

// Finding all the ratings that are above 2 using filter()
// const goodReviews = feedback.filter((singleFeedback) => singleFeedback.rating > 2);
// console.log(goodReviews);

function filterByMinRating(minRating) {
        return function (singleFeedback) {
                return singleFeedback.rating > minRating;
        };
}
const goodReviews = feedback.filter(filterByMinRating(4));
// console.log(goodReviews);

// Find all ratings that talk about a burger with filter()
// const burgRatings = feedback.filter((singleFeedback) => singleFeedback.comment.includes('burg'));
const burgRatings = feedback.filter(findByWord('burg'));
// console.table(burgRatings);

// Remove the one star rating however you like!
const legitRatings = feedback.filter((single) => single.rating !== 1);
// console.table(legitRatings);

// Check if there is at least 5 of one type of meat with some()
const meats = {
        beyond: 10,
        beef: 5,
        pork: 7,
};

// chaining the some method onto our newly created array and looping over each item with some
const isThereEnoughOfAtLeastOneMeat = Object.values(meats).some((meatValue) => meatValue >= 5); // To convert an object into an array

// Make sure we have at least 3 of every meat with every()
const isThereEnoughOfEveryMeat = Object.values(meats).every((meatValue) => meatValue >= 3);
// console.log(isThereEnoughOfEveryMeat);

// Sort the toppings alphabetically with sort()
const numbers = [1, 2, 100, 3, 200, 400, 155];
const numbersSorted = numbers.sort((firstItem, secondItem) => firstItem - secondItem);

// console.log(numbersSorted);

// Sort the order totals from most expensive to least with sort()
function numbersSort(a, b) {
        return a - b;
}

// console.log(orderTotals.sort(numbersSort))

// Sort the prices with sort()
const productsSortedByPrice = Object.entries(numbers).sort((a, b) => {
        const aPrice = a[1];
        const bPrice = b[1];
        return bPrice - aPrice;
});

console.table(productsSortedByPrice);
