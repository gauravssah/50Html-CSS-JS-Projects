let circle = document.querySelectorAll(".circle");
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let currentActive = 0;

next.addEventListener("click", () => {

    if (currentActive == circle.length - 1) {
        circle[currentActive].classList.add("end");
    } else {
        circle[currentActive].classList.remove("inactive");
        circle[currentActive].classList.add("active");
        currentActive++;
    }



})

prev.addEventListener("click", () => {

    console.log(currentActive)

    if (currentActive <= 0) {
        currentActive = 0;


    } else {

        if (currentActive == circle.length - 1) {
            circle[circle.length - 1].classList.remove("end");
        }
        currentActive--;
        circle[currentActive].classList.remove("active");
        circle[currentActive].classList.add("inactive");

    }



}
)

