function init(){
  document.getElementById("h1").onclick = click;
  document.getElementById("h1").onmouseleave = knas;
  document.getElementById("p1").onclick = ja;
  document.getElementById("p1").onmouseleave = roligt;

}

function click(){
  document.getElementById("h1").style.color = "red";

}

function ja(){
  document.getElementById("p1").style.color = "purple";

}

function knas(){
  document.getElementById("h1").style.color = "black";
}

function roligt(){
  document.getElementById("p1").style.color = "black";
}

window.onload = init;