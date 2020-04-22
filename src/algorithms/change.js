

function change(num) {
    let count = 0;
    let arr = [];
    let left = num;


    if(num >= 25) {
        const times = Math.floor(num / 25);
        arr.push(times);
        count = 25 * times;
        left = num - count;
    }
    else {
        arr.push(0);
    }

    if(left >= 10) {
        const times = Math.floor(left / 10);
        arr.push(times);
        count = count + (10 * times);
        left = num - count;
    }
    else {
        arr.push(0);
    }

    if(left >= 5) {
        const times = Math.floor(left / 5);
        arr.push(times);
        count = count + (5 * times);
        left = num - count;
    }
    else {
        arr.push(0);
    }

    if(left >= 1) {
        const times = Math.floor(left / 1);
        arr.push(times);
        count = count + (1 * times);
        left = num - count;
    }
    else {
        arr.push(0);
    }
    
return arr;
}



 module.exports = change;