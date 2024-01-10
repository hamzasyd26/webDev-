console.log("this tutorial is on loops")

// for loop
for(i=0;i<10;i++){
    console.log(i+1)
}

// forin loop
var obj={
    "name":"hamza",
    "profession":"student",
    "college":"UIET PU"
}
for (const value in obj) {
    console.log(value)
}

// forof loop
for (const i of "hamza") {
    console.log(i)
}

// while loop
var i=5;
while(i<6){
    console.log(i)
    i++;
}

// do while loop
do {
    console.log(i)
    i++
} while (i<5);