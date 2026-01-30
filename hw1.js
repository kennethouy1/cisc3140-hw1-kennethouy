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

//mix function
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



