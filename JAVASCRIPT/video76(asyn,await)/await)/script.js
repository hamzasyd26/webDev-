console.log("hell0")

function getdata(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(445)
        }, 3000);
    })
}

console.log("loading modules")
console.log("load data")

let data= getdata()

// apporach 1
data.then((v) => {
    console.log(v)
    console.log("process data")    
})
