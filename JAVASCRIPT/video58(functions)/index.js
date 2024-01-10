function nice( name ) {
    console.log("hey "+ name +" you are nice")
    console.log("hey "+ name +" you are good")
    console.log("hey "+ name +" your Tshirt is also nice")
    console.log("hey "+ name +" your course is good too!")
}
nice("rohan")

nice("rima")

function sum(a,b){
    // console.log(a+b)
    return a+b
}
result= sum(2,9);
console.log("sum of the given numbers is",result);

// ARROW FUNCTION
const fun1= (x)=>{
    console.log("your entered age is",x)
}
fun1(18);   