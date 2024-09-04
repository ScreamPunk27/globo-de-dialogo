const MODAL = document.querySelector('.modal');
const SWITCH_BUTTON = document.querySelector('.switch');
const TRIANGLE = document.querySelector('.triangle');
let switchState = false;

SWITCH_BUTTON.addEventListener('click',()=>{
    if(switchState == false){
        MODAL.style.height = "auto";
        MODAL.style.opacity = "1";
        MODAL.style.padding = "3rem 1rem";
        MODAL.style.overflow = "visible";
        SWITCH_BUTTON.style.backgroundColor = "red";
        SWITCH_BUTTON.style.transform = "rotate(45deg)";
        SWITCH_BUTTON.style.marginTop = "3rem";
        TRIANGLE.style.opacity = "1";
        switchState = true;
    }else{
        MODAL.style.height = "0";
        MODAL.style.opacity = "0";
        MODAL.style.padding = "0";
        MODAL.style.overflow = "hidden";
        SWITCH_BUTTON.style.backgroundColor = "#58D68D";
        SWITCH_BUTTON.style.transform = "rotate(0deg)";
        SWITCH_BUTTON.style.marginTop = "0";
        TRIANGLE.style.opacity = "0";
        switchState = false;
    }
    
})