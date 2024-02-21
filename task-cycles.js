// 1 =================================
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.
// Examples
// arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]

// Your code:
const arrayOfMultiples = (num, length) => {
    // ... write code ...
    let new_arr = [];
    let index = 1;
    while(index <= length)
    {
        new_arr.push(num * index);
        index++;
    }
    console.log(new_arr);
};

console.log("arrayOfMultiples");
arrayOfMultiples(7, 5);
//arrayOfMultiples(12, 10);
//arrayOfMultiples(17, 6);


// 2 =================================
// Change direction of array
// TIP: Check if there is function which can help you https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// Example:
// changeDirection([0, 1, 2, 3]) ➞ [3, 2, 1, 0]
// changeDirection([]) ➞ []
// changeDirection([1, 2]) ➞ [2, 1]

// Your code:
const changeDirection = (array) => {
// ... write code ...
    /*
    let new_arr = [];
    for(let i = array.length - 1; i >= 0; i--)
    {
        new_arr.push(array[i]);
    }
    console.log(new_arr);
    */
    let reversed = array.reverse();
    console.log(reversed);
};

console.log("changeDirection");
changeDirection([0,1,2,3]);
//changeDirection([]);
//changeDirection([1,2]);

// 3 =================================
// Create function that takes two arrays and return object with two keys - bigger array, sum all numbers
// Examples
// biggerArray([1,2,3,4,5], [50,50]) ➞ { array: [50,50], sum: 100 }
// biggerArray([1,2,3], [2,3,4]) ➞ { array: [2,3,4], sum: 9 }

// Your code:
const biggerArray = (array1, array2) => {
    let sum_of_arr1 = 0;
    let sum_of_arr2 = 0;
    const result = {array : 0, sum: 0};
    for(let i = 0; i < array1.length; i++)
    {
        sum_of_arr1 += array1[i];
    }

    for(let i = 0; i < array2.length; i++)
    {
        sum_of_arr2 += array2[i];
    }

    if(sum_of_arr1 > sum_of_arr2)
    {
        result.array = array1;
        result.sum = sum_of_arr1;
    }
    else
    {
        result.array = array2;
        result.sum = sum_of_arr2;
    }
    console.log(result);
};

console.log("biggerArray");
biggerArray([1,2,3,4,5], [50,50]);
//biggerArray([1,2,3], [2,3,4]);