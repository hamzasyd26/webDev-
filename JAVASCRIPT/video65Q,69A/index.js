// alert("Factorial of a number")
// a= prompt("Enter a number")
let a=3;

let arr=[]
for (let index = 0; index < a; index++) {
    const element = (index+1);
    arr[index]=element;
}
let c= arr.reduce((a,b)=>{
    return a*b;
})
console.log(c)

// let element=1;
// for (let i = 0; i< arr.length; i++) {
//     element *= arr[i];
// }

