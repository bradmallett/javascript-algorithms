
function change(num) {
    let count = 0;
    let arr = [];
    let left = num;

    function counter(denomination) {
        const times = Math.floor(left / denomination);
        arr.push(times);
        count = count + (denomination * times);
        return left = num - count;
    }

    if(num >= 25) {
      left = counter(25);
    }
    else {
        arr.push(0);
    }

    if(left >= 10) {
        left = counter(10);
    }
    else {
        arr.push(0);
    }

    if(left >= 5) {
        left = counter(5);
    }
    else {
        arr.push(0);
    }

    if(left >= 1) {
        left = counter(1);
    }
    else {
        arr.push(0);
    }
    
return arr;
}


 module.exports = change;