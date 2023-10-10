const email = document.querySelector("#email");
const password = document.querySelector("#password");
const Emailtext = document.querySelector(".Emailtext");
const passwordtext = document.querySelector(".passwordtext");
const container = document.querySelector(".container");

email.addEventListener("click", () => {

    Emailtext.classList.add("up");
});

password.addEventListener("click", () => {
    passwordtext.classList.add("uppass");
});

// container.addEventListener("click", () => {

//     if (!email.value) {

//         Emailtext.classList.remove("up");
//     } else {

//         Emailtext.classList.add("up");
//     }

//     if (!password.value) {

//         passwordtext.classList.remove("uppass");
//     } else {

//         passwordtext.classList.add("uppass");
//     }
// })

