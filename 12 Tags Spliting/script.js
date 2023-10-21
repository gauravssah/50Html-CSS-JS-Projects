const textarea = document.querySelector(".container textarea");
const tagsbox = document.querySelector(".tagsbox");

textarea.addEventListener("keyup", (e) => {
    createTag(e.target.value);
    if (e.key == "Enter") {
        e.target.value = ""
        randomtagPicker()
    }
});

function createTag(value) {
    const tags = value.split(",")
        .filter((tag) => { return tag.trim() !== "" })
        .map((tag) => { return tag.trim() });

    tagsbox.innerHTML = "";

    tags.forEach(tag => {
        const div = document.createElement("div");
        div.classList.add("tag");
        div.textContent = tag;
        tagsbox.appendChild(div);

    });

}

function randomtagPicker() {
    const tags = document.querySelectorAll(".tag");

    const seTid = setInterval(() => {
        let randomNum = Math.floor(Math.random() * tags.length)
        console.log(randomNum)
        tags[randomNum].classList.toggle("heiglit")

    }, 30);


    setTimeout(() => {
        let randomNum = Math.floor(Math.random() * tags.length)
        tags.forEach((tag) => {
            if (tag.classList.contains("heiglit")) {
                tag.classList.remove("heiglit");
            }
        })
        clearInterval(seTid);
        tags[randomNum].classList.add("heiglit");
    }, 3000);
}