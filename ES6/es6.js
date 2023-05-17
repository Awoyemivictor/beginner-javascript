const { getJSDocOverrideTagNoCache } = require("typescript");

function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
}


get('story.json').then(JSON.parse).then(function(response) {
    console.log("Success!", response);
}).catch(function(error) {
console.log("Failed!", error);
})

getJSON('story.json').then(function(story) {
    return getJSON(story.chapterUrls[0]);
}).then(function(chapter1) {
    console.log("Got chapter 1!", chapter1);
})

var storyPromise;

function getChapter(i) {
    storyPromise = storyPromise || getJSON('story.json');

    return storyPromise.then(function(story) {
        return getJSON(story.chapterUrls[i]);
    })
}

// and using it is simple:
getChapter(0).then(function(chapter) {
    console.log(chapter);
    return getChapter(1);
}).then(function(chapter) {
    console.log(chapter);
})

asyncThing1().then(function() {
    return asyncThing2();
}).then(function() {
    return asyncThing3();
}).catch(function(err) {
    return asyncRecovery1();
}).then(function() {
    return asyncThing4();
}, function(err) {
    return asyncRecovery2();
}).catch(function(err) {
    console.log("Don't worry about it");
}).then(function() {
    console.log("All done!");
})


var jsonPromise = new Promise(function(resolve, reject) {
    // JSON.parse throws an error if you feed it some
    // invalid JSOn, so this implicityly rejects:
    resolve(JSON.parse("This ain't JSON"));
});

jsonPromise.then(function(data) {
    // This never happens:
    console.log("It worked!", data);
}).catch(function(err) {
    // Instead, this happens:
    console.log("It failed!", err);
})

get('/').then(JSON.parse).then(function() {
    // This never happens, '/' is an HTML page, not JSON
    // so JSON.parse throws
}).catch(function(err) {
    // Instead, this happens:
    console.log("It failed!", err);
})

getJSON('story.json').then(function(story) {
    return getJSON(story.chapterUrls[0]);
}).then(function(chapter1) {
    addHtmlToPage(chapter1.html);
}).catch(function() {
    addTextToPage("Failed to show chapter");
}).then(function() {
    document.querySelector('.spinner').getElementsByClassName.display = 'none';
})


try{
    var story = getJSONSync('story.json');
    addHtmlToPage(story.heading);

    story.chapterUrls.forEach(function(chapterUrl) {
        var chapter = getJSONSync(chapterUrl);
        addHtmlToPage(chapter.html);
    });

    addTextToPage("All done");
}
catch (err) {
    addTextToPage("Argh, broken: " + err.message);
}

getJSON('story.json')
.then(function(story) {
    addHtmlToPage(story.heading);

    // Take an array of promises and wait on them all
    return Promise.all(
        // Map our array of chapter urls to
        // an array of chapter json promises
        story.chapterUrls.map(getJSON)
    );
}).then(function(chapters) {
    // Now we have the chapters jsons in order! Loop through...
    chapters.forEach(function(chapter) {
        // ... and add to the page
        addHtmlToPage(chapter.html);
    });
    addTextToPage("All done");
}).catch(function(err) {
    // catch any error that happened so far
    addTextToPage("Argh, broken: " + err.message);
}).then(function() {
    document.querySelector('.spinner').style.display = 'none';
})