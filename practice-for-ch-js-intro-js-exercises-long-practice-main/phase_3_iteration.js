// Your code here
Array.prototype.bubbleSort = function() {
    let sorted = false;
        if (sorted === false) {
            sorted = true;
            for (i = 0; i < this.length; i++) {
                let num1 = this[i];
                let num2 = this[i+1];
                if (num1 > num2) {
                    // this[i+1] = num1;
                    // this[i] = num2;
                    [this[i], this[i+1]] = [this[i+1], this[i]]
                    sorted = false;
                }
            }
        }
    return this;
};

// console.log([1,5,3,9,6,8].bubbleSort())


String.prototype.substrings = function() {
    arr = [];
    for (i = 0; i < this.length; i++) {
        for (j = i + 1; j < this.length; j++) {
            if (!arr.includes(this.slice(i, j)) && (this.slice(i, j)).length>1) {
                arr.push(this.slice(i, j));
            }
        }
    }
    return arr;
};

console.log("string".substrings())
