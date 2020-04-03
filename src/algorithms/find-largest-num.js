
//RETURN ARRAY OF LARGEST NUMBER FROM EACH INNER ARRAY

function largestOfFour(arr) {
    let bgstArray = [];
    arr.forEach(numberGroup => {
        const largest = numberGroup.reduce((biggest, currVal) => {
            if(currVal > biggest){
                biggest = currVal;
            };
            return biggest;
        });
        bgstArray.push(largest);
    });
    return bgstArray;
  };

const myAnswer = 
largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

console.log(myAnswer);

//RETURNS: [25, 48, 21, -3]

module.exports = largestOfFour;