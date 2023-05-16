// Your code here
Array.prototype.unique = function() {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (!arr.includes(this[i])) {
        arr.push(this[i]);
        };
    };
    return arr;
};

console.log[1,1,2,3].unique()
  