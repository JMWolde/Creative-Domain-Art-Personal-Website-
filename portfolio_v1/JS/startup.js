
const StartUpElement = document.getElementById("StartUp-Text");
const Startup = document.getElementById("startup");
const MainElement = document.getElementById("main");
const StartUpBTN = document.createElement("button");
const Change = document.querySelector(".startup");
const hub = document.querySelector(".main-menu");
const bgVideo = document.getElementById("bgVideo");
StartUpBTN.innerHTML = StartUpElement.innerHTML;
StartUpBTN.className = StartUpElement.className;
StartUpBTN.addEventListener("click", (e) => {
    document.body.classList.add("hidden")
    Change.classList.add("hidden");


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