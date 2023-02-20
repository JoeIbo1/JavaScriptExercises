window.addEventListener("load", start);

function start() {
  document.querySelector("#blue_sprite").addEventListener("click", fallNow);
}

function fallNow() {
  console.log("fallNow");
  document.querySelector("#blue_sprite").classList.add("fallover");
}