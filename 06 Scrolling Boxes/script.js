let boxs = document.querySelectorAll(".box");

window.addEventListener("scroll", scrollboxes);

scrollboxes()

function scrollboxes() {
    const windowHeight = window.innerHeight / 5 * 4;

    boxs.forEach(box => {
        let boxtTopHeight = box.getBoundingClientRect().top;

        if (boxtTopHeight < windowHeight) {
            box.classList.add("show")
        } else {
            box.classList.remove("show")
        }
    });
}


