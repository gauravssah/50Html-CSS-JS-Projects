let box = document.getElementsByClassName("box")

for (const boxs of box) {
    boxs.addEventListener("click", () => {
        removeActiveClasses()
        boxs.classList.add("active")

    })

}

function removeActiveClasses() {
    for (const boxs of box) {
        boxs.classList.remove("active")
    }
}



