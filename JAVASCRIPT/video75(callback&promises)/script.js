console.log("hi there")
console.log("going deep in js")

setTimeout(() => {
    console.log("after 3 sec")
}, 3000);

console.log("the end")


// callback hell -> solution is promises
const fn=()=>{
    console.log("nothing")
}
const callback = (arg,fn)=>{
    console.log(arg)
    fn()
}
const loadscript=(src,callback)=>{
    let sc= document.createElement("script")
    sc.src= src;
    sc.onload= callback("harry",fn)
    document.head.append(sc)
}

loadscript( "https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js" , callback)