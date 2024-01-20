arr = [1,2,3,4,5];
console.log(arr,typeof arr)
console.log(arr.length)
arr[0]=12;
console.log(arr)
console.log(arr[2])
console.log(arr[4])

console.log(arr.pop());

arr.push("harry")
console.log(arr)

console.log(arr.shift())

arr.unshift("jack")
console.log(arr)

delete arr[4]
console.log(arr)

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]

console.log(a1.concat(a2,a3))

let num = [8,2,5,1,3,9,7]
console.log(num.sort())

console.log(num.splice(1,2))

console.log(num.splice(1,3))

console.log(arr.toString())
console.log(arr.join("And"))


