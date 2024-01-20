let a= [9,3,2,8,10];

// a.forEach((value,index,arr)=>{
//     console.log(value,index,arr)
// })
newa =[];
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    newa.push(element**2)
}
console.log(newa)

let newarr = a.map(e=>{
    return e**2
})
console.log(newarr)

const greaterthanseven= (e)=>{
    if(e>7){
        return true
    }
    return false
}
console.log(a.filter(greaterthanseven))

arr2=[1,2,3,4,5]
const red =(a,b)=>{
    return a*b
}
console.log(arr2.reduce(red))
console.log(Array.from("hamza"))