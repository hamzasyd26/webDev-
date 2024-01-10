console.log("hello this is condition tutorial")

let age=5;
let grace=2;

// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age % grace)
// console.log(age ** grace)

// condition 1
if((age+grace)>18){
    console.log("you can drive");
}
else{
    console.log("you cannot drive")
}

// condition 2
if(age<16){
    console.log("You are underage")
}
else if(age==16){
    console.log("you can drive but scooty only")
}
else{
    console.log("you can drive")
}

var a=6;
var b=8;

var c= a>b? (a-b):(b+a);
console.log(c)