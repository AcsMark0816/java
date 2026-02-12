document.body.style.backgroundColor = "red"
const header = document.getElementsByTagName("header")[0]
const main = document.getElementsByTagName("main")[0]
const footer = document.getElementsByTagName("footer")[0]
let windowheight = window.innerHeight
let footerheight = footer.offsetHeight;
let headerheight = header.offsetHeight;
let mainheight = windowheight - headerheight - footerheight
main.style.height = mainheight + "px"
const fish = document.createElement("img")
main.append(fish)
fish.alt = "ez egy hal"
fish.src = "simafish.png"
fish.style.width = "200px"
let windwidth = window.innerWidth

let leftposition  = 0

fish.style.position = "absolute"
let direction = "right"
setInterval(() => {
fish.style.left = leftposition + "px"
leftposition += 2

if((leftposition +fish.offsetWidth + 2) > windwidth && direction == "right"){
direction = "left"
}
else if(direction == "left" && (leftposition - 2) < 0){
    direction = "right"
}
if(direction == "right")
    leftposition += 2
else
leftposition -=2


}
,20)


console.log("windowheaight",windowheight,"footerheaight",footerheight,"headerheight".headerheight,"mainheaight",mainheight);
