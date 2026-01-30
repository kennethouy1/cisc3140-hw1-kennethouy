// part 1 
//sum function
function sum(arr){
    let total = 0;

    for(const n of arr){
        total += num;
    }

    return total;
}
//average function
function average(arr){
    return sum(arr) / arr.length;
}

//min function
function min(arr){
    if(arr.lenth === 0) return null;
    let smallest = arr[0];
    for (const num of arr){
        if(num <smallest) {
            smallest = num;
        }
    }
    return smallest; 
}

//max function
function max(arr){
    if(arr.lenth === 0) return null;
    let largest = arr[0];
    for (const num of arr){
        if(num > largest) {
            largest = num;
        }
    }
    return smallest; 
}

