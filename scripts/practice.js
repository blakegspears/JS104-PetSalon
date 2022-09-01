let myArray = [1, 2, 3];
let theSameArray = new Array(1, 2, 3);

myArray[1] = 20;//change the value of myArray

console.log(myArray[1]);//diplays 2
console.log(theSameArray);

myArray["string",10,false];
console.log(myArray);

let otherArray =["What is the meaning of life?",42,true];
console.log(otherArray);

const numbers = [10,20,30,40,50];
console.table(numbers);

const months=["Jan", "Feb", "Mar", "Apr", "May"];
console.table(months);

//access to the values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers.length);//array dimension

numbers.push(60,70,80);
numbers.unshift(-10,-20,-30);
console.table(numbers);

months.pop();//deleting May
months.shift();//deleting Jan
months.splice(1,1);//deleting Mar

console.table(months);