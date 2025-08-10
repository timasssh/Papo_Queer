import flagsInfo from "../globals/flagsInfo.js";

const carousel = document.querySelector("#carousel");
const carouselArrows = carousel.querySelectorAll(".icon")
const flag = document.querySelector("#flag");
const flagName = carousel.querySelector("h3");
let chosenFlag = 0;

carouselArrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        if (index === 1){
            chosenFlag === (flagsInfo.length-1) ? chosenFlag = 0 : chosenFlag++;
        }else {
            chosenFlag === 0 ? chosenFlag = flagsInfo.length-1 : chosenFlag--;
        }
        flag.style.background = `var(${flagsInfo[chosenFlag].color})`;
        flagName.innerHTML = flagsInfo[chosenFlag].name;
    });
});