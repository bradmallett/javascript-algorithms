/*
Look through an array and
remove any duplicates if
they exist.
[1, 2, 3, 4, 2, 5] should be [1, 2, 3, 4, 5]
*/

function rmDuplicates(arr) {
    
    for(let item of arr) {
        while (arr.indexOf(item) != arr.lastIndexOf(item)) {
            arr.splice(arr.lastIndexOf(item), 1);
          }
    }

return arr;
}


module.exports = rmDuplicates;