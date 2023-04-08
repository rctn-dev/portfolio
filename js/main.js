const burgerBtn=document.querySelector(".burger-btn");
const burgerBtnIcon=document.querySelector(".burger-btn i");
const dropDownMenu=document.querySelector(".dropdown-menu");
const dropDownMenuLink=document.querySelectorAll(".dropdown-menu li");
const shareBtn=document.querySelector(".social-media .share");
const shareLinkMenu=document.querySelector(".share-link");
burgerBtn.addEventListener("click", toggleMenu);
shareBtn.addEventListener("click", toggleShareMenu);

shareLinkMenu.classList.remove("open");


// dropdown menu of the burger-menu is handled.
function toggleMenu(){
    dropDownMenu.classList.toggle("open");
    let isOpen= dropDownMenu.classList.contains("open");
    burgerBtnIcon.classList=isOpen ? "fa-solid fa-xmark fa-1x": "fa-solid fa-bars fa-1x";
    dropDownMenuLink.forEach(item=>item.classList.toggle("open"));
}
// dropdown menu of the share button is handled.
function toggleShareMenu(){
    shareLinkMenu.classList.toggle("open");   
}
// If the burger-menu is open while media size increases, it should be closed.
const windowSizeChanges= window.matchMedia("(max-width: 940px)");
windowSizeChanges.addEventListener('change',closeBurgerMenu)
function closeBurgerMenu(){
    let isOpen= dropDownMenu.classList.contains("open");
    if(isOpen){
        toggleMenu()
    }
}


//Persistent light-dark mode   
//Set default value for the localStorage.
const toggleLightIcon=document.querySelector(".dark-light i");
const lightBtn=document.querySelector(".dark-light");
lightBtn.addEventListener("click", toggleLight);

if (localStorage.getItem("light-mode") === null) {
    localStorage.setItem("light-mode","disabled"); 
  }
// Persistent behavior is maintained.  
let lightMode = localStorage.getItem("light-mode");
console.log(lightMode)
if (lightMode==="enabled"){
    document.body.classList.add("light-mode");
    toggleLightIcon.classList="fas fa-moon fa-2x";
}
// changing light-mode behavior is handled, last mode(light or dark) is recorded.
function toggleLight(){
   document.body.classList.toggle("light-mode");
   isLightOpen= document.body.classList.contains("light-mode");
   console.log(isLightOpen)
    if (isLightOpen){
        toggleLightIcon.classList="fas fa-moon fa-2x";
        localStorage.setItem("light-mode","enabled"); 
    }
    else{
        toggleLightIcon.classList="fas fa-sun fa-2x";
        localStorage.setItem("light-mode","disabled");
    }
}

