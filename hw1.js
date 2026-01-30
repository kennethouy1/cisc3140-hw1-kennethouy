// part 1 
//sum function
function sum(arr){
    let total = 0;

    for(const num of arr){
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
    if(arr.length === 0){
        return null;
    }
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
    if(arr.length === 0){
        return null;
    }
    let largest = arr[0];
    for (const num of arr){
        if(num > largest) {
            largest = num;
        }
    }
    return largest; 
}

//part 2
//capitalize function
function capitalize(str){
    if(str.length ===0 ){
        return "";
    }
    return str[0].toUpperCase() + str.slice(1);
}

//reverse functoin
function reverse(str){
    let result = "";
    for (let i = str.length - 1; i >= 0; i--){
        result+= str[i];
    }
    return result;
}

//function count vowels

function countVowels(str){
    let count = 0;
    let vowels = "aeiouAEIOU";

    for(const char of str ){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

//part 3 Object methods
const student = {
  name: "Kenneth",
  grades: [90, 85, 92, 88],

  getAverage: function () {
    return average(this.grades);
  },

  isHonorRoll: function () {
    return this.getAverage() >= 90;
  }
};

//test

const numbers = [10, 20, 30, 40, 50];
const text = "javascript";


console.log("The numbers are ", numbers);
console.log("The text is ",text);
console.log("Array functions");
console.log("Sum:", sum(numbers));
console.log("Average:", average(numbers));
console.log("Min:", min(numbers));
console.log("Max:", max(numbers));

console.log("String functions");
console.log("Capitalize:", capitalize(text));
console.log("Reverse:", reverse(text));
console.log("Vowel Count:", countVowels(text));

console.log("Object methods");
console.log("Student Name:", student.name);
console.log("Average Grade:", student.getAverage());
console.log("Honor Roll:", student.isHonorRoll());



