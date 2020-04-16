
function sliceSplice(arr1, arr2, n) {
    if (Array.isArray(arr1) && Array.isArray(arr2) && typeof n === 'number') {
        let newArr = arr2.slice();
        
        for(let i = 0; i < arr1.length; i++) {
           newArr.splice(n + i, 0, arr1[i]);
        }

        return newArr;
    }

    return 'you need 2 arrays and a number';
  }
  
module.exports = sliceSplice;