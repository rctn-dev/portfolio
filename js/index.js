 //slider with manual override.

const projectSlider=document.querySelector(".slider .projects");
const projectSliderItems=document.querySelectorAll(".slider .projects-item");
const prev= document.querySelector(".arrows .prev");
const next= document.querySelector(".arrows .next");
prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);
projectSliderItems[0].style.opacity="1";
let index=0;
function prevSlide(){
    index--;
    if (index<0){
        projectSliderItems[0].style.opacity="0";
        index=projectSliderItems.length-1
    }
    else{
        projectSliderItems[index+1].style.opacity="0";
    }
    projectSliderItems[index].style.opacity="1";
    resetTimer()
}
function nextSlide(){
    index++;
    if (index==projectSliderItems.length){
        projectSliderItems[index-1].style.opacity="0";
        index=0
    }
    else{
        projectSliderItems[index-1].style.opacity="0";
    }
    projectSliderItems[index].style.opacity="1";
    resetTimer()
}

//automatic slider
let timer=setInterval(nextSlide,2000)
function resetTimer(){
    clearInterval(timer)
    timer=setInterval(nextSlide,2000)
}