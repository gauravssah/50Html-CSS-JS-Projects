const rightcontainer = document.querySelector(".rightcontainer");
const leftcontainer = document.querySelector(".leftcontainer");


leftcontainer.addEventListener("mouseenter", () => {
    leftcontainer.classList.add("lefteffect");
    rightcontainer.classList.add("lefteffect");
})

leftcontainer.addEventListener("mouseleave", () => {
    leftcontainer.classList.remove("lefteffect");
    rightcontainer.classList.remove("lefteffect");
})


// ------------------------------------------------

rightcontainer.addEventListener("mouseenter", () => {
    rightcontainer.classList.add("righteffect");
    leftcontainer.classList.add("righteffect");
})

rightcontainer.addEventListener("mouseleave", () => {
    rightcontainer.classList.remove("righteffect");
    leftcontainer.classList.remove("righteffect");
})