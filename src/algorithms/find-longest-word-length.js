const findLongestWordLength = (str) => {
    if (!str) {
        return '';
    }

    const intoArray = str.split(' ');
    
    const findLongest = (largest, current) => {
        if(current.length > largest.length){
            largest = current;
        };
        return largest;
    };

    const longestWord = intoArray.reduce(findLongest);
    return longestWord;

  };

  module.exports = findLongestWordLength;
  