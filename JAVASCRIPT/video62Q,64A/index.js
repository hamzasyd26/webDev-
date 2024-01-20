alert("RANDOM BUSINESS NAME GENERATOR")

let a;

prob= Math.random()
if(prob<0.33){
    a="crazy";
}
else if(0.33<prob<0.66){
    a="Amazing";
}
else{
    a="Fire";
}


pb= Math.random()
if(pb<0.33){
    a=a+" Engine";
}
else if(0.33<pb<0.66){
    a=a+" food";
}
else{
    a=a+" garments";
}



prb= Math.random()
if(prb<0.33){
    a=a+" Bros";
}
else if(0.33<prb<0.66){
    a=a+" Limited";
}
else{
    a= a+" Hub";
}

console.log("Buisness name is",a)