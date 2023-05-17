// Your code here

const fibonacci = function(n) {
    if (n===1) {
        return [0];
    }
    if (n===2) {
        return [0, 1];
    }
    res = fibonacci(n-1);
    res.push(res[res.length -1] + res[res.length-2]);
    return res;
};
console.log(fibonacci(8))

const merge = function(left, right) {
    merge = [];
    while (left.length !== 0 || right.length !==0) {
        switch (left[0] >= right[0]) {
            case true:
                merge.push(right.shift);
            case false:
                merge.push(left.shift);
        }
    }
    return merge + left + right
};

Array.prototype.mergeSort = function(callback) {
    let midpoint = this.length / 2
    let left = 
};
