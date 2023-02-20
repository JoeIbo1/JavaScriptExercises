window.addEventListener("load", start);

function start(){
document.querySelector("#orange_sprite").addEventListener("click", jumpNow);
}

function jumpNow(){
    console.log("jumpNow");
document.querySelector("#orange_sprite").classList.add("jump");
}