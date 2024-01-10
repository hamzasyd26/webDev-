// FAULTY CALCULATOR
// + > -
// * > +
// - > /
// / > *\

console.log("FAULTY CALCULATOR")

function calcf(a, b, opr) {
  if (opr == "+") {
    return a - b;
  } else if (opr == "*") {
    return a + b;
  } else if (opr == "-") {
    return a / b;
  } else if (opr == "/") {
    return a * b;
  }
}
function calc(a, b, opr) {
  if (opr == "+") {
    return a + b;
  } else if (opr == "*") {
    return a * b;
  } else if (opr == "/") {
    return a / b;
  } else if (opr == "*") {
    return a * b;
  }
}

// let a = prompt("enter a number");
// let b = prompt("enter another number");
// let opr = prompt("enter the function to be performed");


prob = Math.random();
if (prob < 0.1) {
    result = calcf(5,6,"/");
    console.log("faulty calculator gives :",result)
    // alert(`faulty calculator gives: ${result}`)
}
else{
    result = calc(5,6,"/");
    console.log("faulty calculator gives :",result)
    // alert(`faulty calculator gives: ${result}`)
}
console.log(prob)






// for in browser use prompt to intake value ,alert to show value and use Eval in alert to display the operation after it is performed