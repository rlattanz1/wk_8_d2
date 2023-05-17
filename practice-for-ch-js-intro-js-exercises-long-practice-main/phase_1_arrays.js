// // // // Your code here
// Array.prototype.unique = function() {
//     let arr = [];
//     for (let i = 0; i < this.length; i++) {
//         if (!arr.includes(this[i])) {
//         arr.push(this[i]);
//         };
//     };
//     return arr;
// };

// console.log([1,1,2,3].unique())


// Array.prototype.twoSum = function() {
//     let arr = [];
//     for (i = 0; i < this.length; i++) {
//         for (j = i + 1; j < this.length; j++) {
//             if (this[i] + this[j] === 0) {
//                 arr.push([this[i], this[j]]);
//             }
//         }
//     }
//     return arr;
// };

// console.log([1,-1,2,3].twoSum())



Array.prototype.transpose = function() {
    let arr = [];
        for (i = 0; i < this.length; i++) {
            arr[i] = []
            for (j = 0; j < this.length; j++) {
                console.log(this[j][i]);
                arr[i][j] = this[j][i];
            }
        }
    return arr;
};
console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose())
test=[];
