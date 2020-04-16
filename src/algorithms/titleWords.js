
function titleWords(str) {
    if (typeof str === 'string') {
        let lower = str.toLowerCase();
        let capitalized = lower.replace(/\b[a-zA-Z]/g, (letter) => letter.toUpperCase());
        
        return capitalized;
    }

    return 'you need a string';
  }
  
module.exports = titleWords;
  
// function titleWords(str) {
//     if (typeof str === 'string') {
//         const lowerArr = str.toLowerCase().split('');
        
//         for (let i = 0; i < lowerArr.length; i++) {
//             if (lowerArr[i - 1] === ' '){
//                lowerArr[i] = (lowerArr[i].toUpperCase());
//             } 
//         }

//         lowerArr[0] = lowerArr[0].toUpperCase();
//         return lowerArr.join('');
//     }

//     return 'you need a string';
//   }