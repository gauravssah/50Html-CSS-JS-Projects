const boxs = document.querySelectorAll(".box");
let duration = document.querySelector(".duration");
const button = document.querySelector(".btn");
const musiccontiner = document.querySelector(".musiccontiner");

const musicArry = [
    { musicName: "Into the Depths", musicpath: "./Music/Into the Depths (Sting) - Jingle Punks.mp3" },
    { musicName: "Left U Into", musicpath: "./Music/Left U Into (Sting) - Otis McDonald.mp3" },
    { musicName: "Loping Sting", musicpath: "./Music/Loping Sting - Kevin MacLeod.mp3" },
    { musicName: "On the Delta", musicpath: "./Music/On the Delta - John Patitucci.mp3" },
    { musicName: "Short Guitar Clip", musicpath: "./Music/Short Guitar Clip - Audionautix.mp3" },
    { musicName: "Your Intro", musicpath: "./Music/Your Intro - Audionautix.mp3" },
    { musicName: "Loping Sting", musicpath: "./Music/Loping Sting - Kevin MacLeod.mp3" },
    { musicName: "Short Guitar Clip", musicpath: "./Music/Short Guitar Clip - Audionautix.mp3" },
    { musicName: "Left U Into", musicpath: "./Music/Left U Into (Sting) - Otis McDonald.mp3" },
    { musicName: "Your Intro", musicpath: "./Music/Your Intro - Audionautix.mp3" },
    { musicName: "Into the Depths", musicpath: "./Music/Into the Depths (Sting) - Jingle Punks.mp3" },
    { musicName: "On the Delta", musicpath: "./Music/On the Delta - John Patitucci.mp3" },


]


let mymusic = new Audio(`${musicArry[0].musicpath}`)
// console.log(mymusic)
// mymusic.play()



let index = 0;
// boxs.forEach((box) => {
//     if (index < musicArry.length) {
//         box.textContent = musicArry[index].musicName;
//     }
//     index++;
// });

// -------------------------------------

musicArry.forEach((musics) => {
    if (index < musicArry.length) {
        let div = document.createElement("div");
        div.classList.add("box");
        div.id = index;
        div.innerHTML = `${musicArry[index].musicName} <span></span>`;
        musiccontiner.append(div);
    }
    index++;
});

let newbox = Array.from(musiccontiner.querySelectorAll(".box"))

newbox.forEach((box) => {
    box.addEventListener("click", (e) => {

        // if (!mymusic.paused && mymusic.currentTime > 0) {
        //     mymusic.pause()

        // } else {
        //     let boxId = e.target.id;
        //     mymusic = new Audio(`${musicArry[boxId].musicpath}`)
        //     mymusic.play();
        // }

        // --------------------------------------

        mymusic.pause();
        let boxId = e.target.id;
        mymusic = new Audio(`${musicArry[boxId].musicpath}`)
        mymusic.play();
    });
})

button.addEventListener("click", () => {
    mymusic.pause()
})