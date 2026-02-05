const MainElement = document.getElementById("MainText");
const MainBTN = document.createElement("button");
const overlay = document.querySelector(".screen-fade");
MainBTN.innerHTML = MainElement.innerHTML;
MainBTN.className = MainElement.className;
MainBTN.addEventListener("click", (e) => {
overlay.classList.add("is-active");
});
MainElement.replaceWith(MainBTN);