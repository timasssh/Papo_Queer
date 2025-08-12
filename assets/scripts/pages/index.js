import flagsInfo from "../globals/flagsInfo.js";

const carousel = document.querySelector("#carousel");
const carouselArrows = carousel.querySelectorAll(".icon")
const carouselFlag = document.querySelector("#flag");
const flagName = carousel.querySelector("h3");
let IndexOfChosenFlag = Math.floor(Math.random() * flagsInfo.length);

function setPrideFlagColor(chosedFlagIndex) {
    carouselFlag.style.background = `var(${flagsInfo[chosedFlagIndex].color})`;
    flagName.innerHTML = flagsInfo[chosedFlagIndex].name;
}

setPrideFlagColor(IndexOfChosenFlag);
carouselArrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        if (index === 1){
            IndexOfChosenFlag === (flagsInfo.length-1) ? IndexOfChosenFlag = 0 : IndexOfChosenFlag++;
        }else {
            IndexOfChosenFlag === 0 ? IndexOfChosenFlag = flagsInfo.length-1 : IndexOfChosenFlag--;
        }
        setPrideFlagColor(IndexOfChosenFlag);
    });
});