let hambar = document.querySelector('.fa-bars');
let xmark = document.querySelector('.fa-xmark');
let bar = document.querySelector('.bar');
let maincontainer = document.querySelector('.maincontainer');
let navaction = document.querySelector('.navaction');

hambar.addEventListener("click", () => {
    bar.classList.remove("unrotate")
    bar.classList.add("rotate");
    maincontainer.classList.add("boxrotate")
    maincontainer.classList.remove("boxUnrotate")
    navaction.classList.add("navactionshoe")
})

xmark.addEventListener("click", () => {
    bar.classList.remove("rotate")
    bar.classList.add("unrotate")
    maincontainer.classList.remove("boxrotate")
    maincontainer.classList.add("boxUnrotate")
    navaction.classList.remove("navactionshoe")
})





