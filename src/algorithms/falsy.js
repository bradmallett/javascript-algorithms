//Should only return an array of values that are not falsy.

function falsy(arr) {
    if(Array.isArray(arr)) {
    let truthy = arr.filter((item) => item);
    return truthy;
    }

    return 'you need an array';
  }

module.exports = falsy;












   // if(Array.isArray(arr)) {
    //     const f = false;
    //     const n = null;
    //     const z = 0;
    //     const b = '';
    //     const u = undefined;
    //     const na = NaN;

    //     for(let i = 0; i < arr.length; i++) {
    //         if(arr[i] === f || arr[i] === n || arr[i] === z || arr[i] === b || arr[i] === u || arr[i] === f || na) {
    //         arr.splice(i, 1);
    //         }
    //     }

   