let display = document.querySelector("#display");

function dis(val){
    display.value += val;
}

function allclear(){
    display.value = "";
}

function clearonce(){
    display.value = display.value.slice(0,-1);
}

function solve(){
    let x = display.value;
    let y = eval(x);
    display.value = y;
}

let sound = new Audio();
sound.src = "audio.mp3";

let btns = document.querySelectorAll("button");
btns.forEach((btn) => {
    btn.addEventListener("click",function(){
        sound.play();
    })
});