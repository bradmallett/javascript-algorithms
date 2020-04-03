const findLongestWordLength = (str) => {
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
  
  const longest = findLongestWordLength("The quick brown fox jumped over the lazy dog");
  console.log(longest);

  module.exports = findLongestWordLength;
  