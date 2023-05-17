// Your code here


Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

const test = (acc, ele) => {
    return(acc+++ele);
};


// console.log([1, 2, 3, 4, 5].myEach(test))


// Array.prototype.myMap = function(callback) {
//     arr = []
//     this.myEach(function(num) {
//         arr.push(callback(num, 3));
//     });
//     return arr;
// };

// console.log([1, 2, 3, 4, 5].myMap(test))

Array.prototype.myReduce = function(callback, acc) {
    if (acc === undefined) {
        acc = this[0];
        for (i = 1; i < this.length; i++) {
            acc = callback(acc, this[i]);
        }
    }
    else {
        for (i = 0; i < this.length; i++) {
            acc = callback(acc, this[i]);
        }
    }
    return acc;
};

console.log([1, 2, 3, 4, 5].myReduce(test, 10))
