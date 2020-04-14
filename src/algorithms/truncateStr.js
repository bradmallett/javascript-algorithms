
function truncateStr(str, num) {

    if(typeof str === 'string' && typeof num === 'number'){

        if(str.length <= num){
            return str;
        }

        const newStr = str.substring(0, num);
        const truncated = `${newStr}...`;

        return truncated;

    }
    return 'You need a string then a number';

    };

module.exports = truncateStr;