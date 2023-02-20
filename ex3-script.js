window.addEventListener("load", start);

function start() {
    moveNow();
    document.querySelector("#orange_container").addEventListener("click", stop);

    document.querySelector("#orange_sprite").addEventListener("dblclick", jumpNow);

}

function moveNow() {
  console.log("moveNow");
  document.querySelector("#orange_container").classList.add("move");
}

function jumpNow(){
    console.log("jumpNow");
document.querySelector("#orange_sprite").classList.add("jump");
}

function stop(){
document.querySelector("#orange_container").classList.add("paused");

}