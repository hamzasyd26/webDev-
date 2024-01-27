let a= prompt("Enter first number")
let b=prompt("Enter second number")

if(isNaN(a)||isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}

let sum = parseInt(a)+parseInt(b)

try {
    console.log(sum*x) 
} catch (err) {
    console.log("error aa gya bhai")
    alert(err.name)
    alert(err.message)
    alert(err.stack)
}
finally{
    console.log("done")
}