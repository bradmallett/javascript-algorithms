function findLargestNum(arr) {
    if (!arr || !arr.length) {
        return 'You gotta enter something...';
    } 

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

module.exports = findLargestNum;
