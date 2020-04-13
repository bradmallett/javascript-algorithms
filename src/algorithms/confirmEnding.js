

function confirmEnding(str, target) {
    if (typeof str === "string" && typeof target === "string") {
        const i = str.length - target.length;

        if(str.substring(i) === target) {
            return true;
        }

        return false;
    }

    return false;
};


module.exports = confirmEnding;
