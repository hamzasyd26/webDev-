// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
function double(array,doublearray) {
    for (let i = 0; i < array.length; i++) {
    const ele = array[i];
    if (array[i]!=array[i+1]) {
        doublearray.push(array[i])   
        doublearray.push(ele)   
    }
    else if(array[i]==array[i+1]){
        doublearray.push(array[i])
        doublearray.push(array[i])
        doublearray.push(ele)
        i++;
    }
    else{
        doublearray.push(ele)
    }
}
    return doublearray;
}

let arr = [1,2,3,4,4,5,6,6,7]
let dbarr=[]

// console.log(doublearray)
console.log(double(arr,dbarr))