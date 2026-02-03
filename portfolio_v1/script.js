const MainElement = document.getElementById("MainText");
const MainBTN = document.createElement("button");
MainBTN.innerHTML = MainElement.innerHTML;
MainBTN.className = MainElement.className;
MainBTN.addEventListener("click", (e) => {
video.style.display = "block";
video.play();
});
video.onended = () => {
    video.style.display = 'none';
};
MainElement.replaceWith(MainBTN);