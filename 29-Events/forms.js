
// const wes = document.querySelector(".wes");
// const signupForm = document.querySelector('[name="signup"]');

// wes.addEventListener('click', function(event) {
//     const shouldChangePage = confirm("This website might be \
//  malicious! Do you wish to proceed?");

//     if(!shouldChangePage) {
//         event.preventDefault();
//     }

//     console.log(shouldChangePage);
    
// });

// signupForm.addEventListener('submit', function(event) {
//     const name = event.currentTarget.name.value;
//     if(name.includes("chad")) {
//         alert("Sorry bro");
//         event.preventDefault();
//     }
// })

// function logEvent(event) {
//     console.log(event.type);
//     console.log(event.currentTarget.value);
// }

// signupForm.name.addEventListener("keyup", logEvent);
// signupForm.name.addEventListener("keydown", logEvent);

const photo = document.querySelector(".photo");

function handlePhotoClick() {
    if (event.type === "clicked" || event.key === "Enter") {
        console.log("you clicked the photo");
    }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);