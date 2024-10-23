var background=document.querySelector(".image")
var popups=document.getElementById("popup")
function book(){
    background.style.opacity=0.5
    popups.style.display="block"
}
function next(){
    background.style.opacity=1
    popups.style.display="none"
}