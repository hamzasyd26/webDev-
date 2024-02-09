async function sleep(){
    return new Promise((resolve,reject)=>{

        setTimeout(() => {
            resolve(45)
        }, 2000);
    
    })
}    

// IIFE
(async function main(){
    let a= await sleep()
    console.log(a)
    let b= await sleep()
    console.log(b)
})()

function sum(a,b,c,d){
    return a+b+c+d;
}
// let a= await sleep()
// console.log(a)
// let b= await sleep()
// console.log(b)
let [x,y,...rest]=[1,4,2,6,0,9]
console.log(x,y,rest)

let obj={
    a:1,
    b:2,
    c:3
}
let {a,b}=obj
console.log(a,b)

let arr=[2,3,5,1]
console.log(sum(...arr))
 