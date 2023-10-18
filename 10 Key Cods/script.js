const containe = document.querySelector(".containe");


window.addEventListener("keydown", (e) => {
    console.log(e.key)
    console.log(e.keyCode)
    console.log(e.code)

    containe.innerHTML =
        ` <div class="box">
    <h1 class="heading">
        event.key
    </h1>
    <div class="keybox">
        ${e.key == " " ? "Space" : e.key}
    </div>
    </div>
    <div class="box">
    <h1 class="heading">
        event.keyCode
    </h1>
    <div class="keybox">
    ${e.keyCode}
    </div>
    </div>
    <div class="box">
    <h1 class="heading">
        event.code
    </h1>
    <div class="keybox">
    ${e.code}
    </div>
    </div>`;











})
