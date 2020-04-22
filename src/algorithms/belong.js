/* 
Return the lowest index at which a value 
(second argument) should be inserted into 
an array (first argument) once it has been sorted. 
The returned value should be a number.
*/

function belong(arr, num) {
    if(Array.isArray(arr) && typeof num === 'number') {
        const count = arr.length;

        arr.sort((a, b) => a - b);
        
        for(let i = 0; i < count; i++) {
            if(num <= arr[i]) {
                return i;
            } 
        }

        return arr.length;
    }

    return 'You need an array and a number';
}


module.exports = belong;