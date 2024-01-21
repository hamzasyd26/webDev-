alert('yo wassup bro');

let prom1 = new Promise((resolve, reject) => {
    let a= Math.random()
    console.log(a)
    if(a<0.5){
        reject("your number did not support")
    }
    else{
        setTimeout(() => {
            console.log("hum first 1")
            resolve("harry")
        }, 400);
    }
})
let prom2 = new Promise((resolve, reject) => {
    let a= Math.random()
    console.log(a)
    if(a<0.5){
        reject("your number did not support 2")
    }
    else{
        setTimeout(() => {
            console.log("hum first 2")
            resolve("harry2")
        }, 200);
    }
})
let prom3 = new Promise((resolve, reject) => {
    let a= Math.random()
    console.log(a)
    if(a<0.5){
        reject("your number did not support 3")
    }
    else{
        setTimeout(() => {
            console.log("hum first 3")
            resolve("harry3")
        }, 600);
    }
})
let prom4 = new Promise((resolve, reject) => {
    let a= Math.random()
    console.log(a)
    if(a<0.5){
        reject("your number did not support 4")
    }
    else{
        setTimeout(() => {
            console.log("hum first 4")
            resolve("harry4")
        }, 650);
    }
})
let prom5 = new Promise((resolve, reject) => {
    let a= Math.random()
    console.log(a)
    if(a<0.5){
        reject("your number did not support 5")
    }
    else{
        setTimeout(() => {
            console.log("hum first 5")
            resolve("harry5")
        }, 100);
    }
})

let p3= Promise.race([prom1,prom2,prom3,prom4,prom5])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
