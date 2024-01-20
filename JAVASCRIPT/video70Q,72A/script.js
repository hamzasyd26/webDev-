console.log("Initializing...")

let box= document.getElementsByClassName("box")

function getrandomcolor(){
    val1= Math.random()*255
    val2= Math.random()*255
    val3= Math.random()*255
    return `rgb(${val1},${val2},${val3})`
}


Array.from(box).forEach(e=>{
    e.style.color= getrandomcolor()
    e.style.backgroundColor= getrandomcolor()

})