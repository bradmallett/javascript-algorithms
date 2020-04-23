/*
Write a function that splits an array 
(first argument) into groups the length 
of size (second argument) and returns 
them as a two-dimensional array.
Example: 
chunkyMonkey(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
*/

function chunkyMonkey(arr, size) {

    if(Array.isArray(arr)) {
        let newArr = [];

        while (arr.length > 0) {
            const sliced = arr.slice(0, size);
            newArr.push(sliced);
            arr.splice(0, size);
        }

        return newArr;
    }

    return 'you need an array and a number';
    }
  

  module.exports = chunkyMonkey;