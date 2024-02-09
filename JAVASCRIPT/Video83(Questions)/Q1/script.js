// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

let stdnm = ["naman","yash","sarvapalli","ramanujan","anjali","faizan","vankateshwaram","raghuvanshaj"];
let house =[];

for (let index = 0; index < stdnm.length; index++) {
    const student = stdnm[index];
    if(student.length<6){
        house.push(student +" Gryffindor")
    }
    else if(student.length<8){
        house.push(student+ " Hufflepuff")
    }
    else if(student.length<12){
        house.push(student+ " Ravenclaw")
    }
    else{
        house.push(student+ " Slytherin")
    }
}
console.log(house)