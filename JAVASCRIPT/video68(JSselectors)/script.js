console.log("HARRY")
let boxes = document.getElementsByClassName("box")
console.log(boxes)
// boxes[2].style.backgroundColor="red"    
document.getElementById("redbox").style.backgroundColor="red"
document.querySelectorAll(".box").forEach(e => {
    e.style.backgroundColor="pink"
});
console.log(document.getElementsByTagName("div"))