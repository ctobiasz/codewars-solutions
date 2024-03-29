//You have an array of numbers.
//Your task is to sort ascending odd numbers but even numbers must be on their places.
//Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
//Example
//sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]


function sortArray(array) {
   const odds   = [];
   const evens = [];
   const result = [];
   
   for(let i=0; i < array.length; i++) {
     if(array[i] % 2 === 0) {
       evens.push(array[i]);
     } else {
       odds.push(array[i]);
     }
   }
   odds.sort((a, b) => a - b);
   for(let i=0; i < array.length; i++) {
      if(array[i]%2 === 0) {
        result.push(evens.shift());
     } else {
       result.push(odds.shift());
     }
   }
   return result
}
