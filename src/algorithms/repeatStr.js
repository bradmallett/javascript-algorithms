
function repeatStr(str, num) {
    if(typeof str === 'string' && typeof num === 'number'){

        if(num <= 0){
            str = '';
            return str;
        }

        let myArr = [];
                
        for(let i = 0; i < num; i++) {
            myArr.push(str)
        };

        const joined = myArr.join('');
        return joined;
    }

    return 'You entered something wrong.';

  };
  
module.exports = repeatStr;
  