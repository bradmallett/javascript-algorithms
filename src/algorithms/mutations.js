/*
Return true if all of the
letters in the second array
are in the first array.
-------------
Example: ['Hello', ello] = true
Example: ['Hello', Hey] = false
*/

function mutation(arr) {
    const mainString = arr[0].toLowerCase();
    const compareArray = arr[1]
        .replace(/[^A-Z]+/gi,"") 
        .toLowerCase()
        .split('');
        console.log(compareArray);

    for(let letter of compareArray) {
        if(mainString.indexOf(letter) < 0) {
            return false;
        }
    }

    return true;
  }
  

module.exports = mutation;