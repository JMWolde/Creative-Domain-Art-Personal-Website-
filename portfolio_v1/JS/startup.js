
const StartUpElement = document.getElementById("StartUp-Text");
const Startup = document.getElementById("startup");
const MainElement = document.getElementById("main");
const StartUpBTN = document.createElement("button");
const Change = document.querySelector(".startup");
const hub = document.querySelector(".main-menu");
const bgVideo = document.getElementById("bgVideo");
const introSound = document.getElementById("introSound");
StartUpBTN.innerHTML = StartUpElement.innerHTML;
StartUpBTN.className = StartUpElement.className;
StartUpBTN.addEventListener("click", (e) => {
    document.body.classList.add("hidden")
    Change.classList.add("hidden");


    setTimeout(() => {
        introSound.play();
        introSound.volume = 0.1;
    }, 500);


        setTimeout(() => {
            console.log("Timed event executed!");
            hub.classList.add("found");
            bgVideo.classList.add("found");
        }, 1000);

    });
StartUpElement.replaceWith(StartUpBTN);

export function getHub() {
    return document.querySelector(".main-menu");
}