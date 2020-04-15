
function findersKeepers(arr, func) {
    if(Array.isArray(arr)){
        const newArr = arr.filter(func);
        return newArr[0];
        
    }

    return 'is not array';
  }

  module.exports = findersKeepers