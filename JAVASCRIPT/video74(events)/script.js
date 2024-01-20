let button = document.getElementById("btn")
button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML=" <b>yayy!!</b> this was clicked"
})

button.addEventListener("contextmenu",()=>{
    alert("dont hack us by right click!")
})
document.addEventListener("keydown",(e)=>{
    console.log(e.key, e.keyCode)
})
