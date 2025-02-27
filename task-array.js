// EXERCISE:
// You can write all the code natively (for cycles and such) or you can use some advanced functions which JS arrays provides in case you see them fit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// There can be multiple solutions to each task, solve it as you see fit.
// You will work with array `numbers` which will be generated by code (code below) in every task.
// Write these functions:

// This block generates array with random length with values between 1-100
let numbers = [];
const length = Math.ceil(Math.random() * 10) + 5;
for (let i = 0; i < length; i = i + 1) {
  numbers.push(Math.ceil(Math.random() * 100));
}

// a) Function which will print to console a whole array
const printArray = (numbers) => {
  // Your code:
    console.log(numbers)
};

//otestovani
console.log("printArray");
printArray(numbers);

// b) Function which will print to console the length of array
const printLength = (numbers) => {
  // Your code:
    console.log(numbers.length);
};

console.log("printLength");
printLength(numbers);

// c) Function which will print to console the first element of array
const printFirstItem = (numbers) => {
  // Your code:
    console.log(numbers[0]);
};

console.log("printFirstItem");
printFirstItem(numbers);

// d) Function which will print to console the last element
const printLastItem = (numbers) => {
  // Your code:
  console.log(numbers[numbers.length - 1])
};

console.log("printLastItem");
printLastItem(numbers);

// e) Function which will print to console the largest number (You can check Math functions)
const printLargestItem = (numbers) => {
  // Your code:
  console.log(Math.max(...numbers));
};

console.log("printLargestItem");
printLargestItem(numbers);

// f) Function which will print to console the smallest number (You can check Math functions)
const printSmallestItem = (numbers) => {
  // Your code:
  console.log(Math.min(...numbers));
};

console.log("printSmallestItem");
printSmallestItem(numbers);

// g) Function which will print to console the sum of all numbers in array (You can check reduce function)
const printSum = (numbers) => {
  // Your code:
  let sum = 0;
  for(let i = 0; i < numbers.length; i++)
  {
    sum += numbers[i];
  }
  console.log(sum);
};

console.log("printSum");
printSum(numbers);

// h) Function which will print to console the difference between the largest and the smallest number (You can check Math functions)
const printSALDifference = (numbers) => {
  // Your code:
  let max_num = Math.max(...numbers);
  let min_num = Math.min(...numbers);
  let sum = max_num - min_num;
  console.log(sum);
};

console.log("printSALDifference");
printSALDifference(numbers);

// i) Function which will print to console the average of all numbers (You can check reduce function)
const printAverage = (numbers) => {
  // Your code:
  let average = 0.0;
  let sum = 0;
  for(let i = 0; i < numbers.length; i++)
  {
    sum += numbers[i];
  }
  average = sum / numbers.length;
  console.log(average);
};

console.log("printAverage");
printAverage(numbers);


// j) Function which will print to console the index of largest number (You can check Math functions)
const printLargestsIndex = (numbers) => {
  // Your code:
  let max_index = 0;
  let current_largest = 0;
  for(let i = 0; i < numbers.length; i++)
  {
    if(numbers[i] > current_largest)
    {
      max_index = i;
      current_largest = numbers[i];
    }
  }
  console.log(max_index);
};

console.log("printLargestIndex");
printLargestsIndex(numbers);

// k) Function which will print to console the even numbers (not the array of even numbers),
// if array doesn't contain any even number, show text "Even number isn't in array"
const printEvenNums = (numbers) => {
  // Your code:
  let count = 0;
  for(let i = 0; i < numbers.length; i++)
  {
    if(numbers[i] % 2 == 0)
    {
      count++;
      console.log(numbers[i]);
    }  
  }
  if(count == 0)
  {
    console.log("Even number isn't in array");
  }

};

console.log("printEvenNums");
printEvenNums(numbers);

// l) Function which will multiple by 2 every number in array and print the array to console
// Example: printNumsMultipliedBy2([1,2,3]) -> [2,4,6]
const printNumsMultipliedBy2 = (numbers) => {
  // Your code:
  let new_arr = [];
  for(let i = 0; i < numbers.length; i++)
  {
    new_arr.push(numbers[i] * 2);
  }

  console.log(new_arr);
};

console.log("printNumsMultipliedBy2");
printNumsMultipliedBy2(numbers);