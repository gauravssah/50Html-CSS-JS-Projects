const toggleIcon = document.querySelectorAll(".toggleIcon");

toggleIcon.forEach((icon) => {
    icon.addEventListener("click", (e) => {
        // console.log(e.target.parentElement.parentElement.parentElement);
        e.target.parentElement.parentElement.parentElement.classList.toggle("active");


        console.log(e.target.classList)
    })
})