doSonething(function (result) {
    doSomethingElse(result, function (newResult) {
        doThirdThing(newResult, function (finalResult) {
            console.log(`Got the final result: ${finalResult}`);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

const promise = doSomething();
const promoise2 = promise.then(successCallback, failureCallback);

doSomething()
    .then(function (result) {
        return doSomethingElse(result);
    })
    .then(function (newResult) {
        return doThirdThing(newResult);
    })
    .then(function (finalResult) {
        console.log(`Got the final result: ${finalResult}`);
    })
    .catch(failureCallback);


doSomething()
    .then((result) => doSomethingElse(result))
    .then((newResult) => doThirdThing(newResult))
    .then((finalResult) => {
        console.log(`Got the final result: ${finalResult}`);
    })
    .catch(failureCallback);



const listOfIngredients = [];

doSomething()
    .then((url) =>
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                listOfIngredients.push(data);
            }),
            )
            .then(() => {
                console.log(listOfIngredients);
            });

// OR

doSomething()
    .then((url) => fetch(url))
    .then((res) => res.json())
    .then((data) => {
        listOfIngredients.push(data);
    })
    .then(() => {
        console.log(listOfIngredients);
    });

    