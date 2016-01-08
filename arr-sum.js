exports.sum = function (arr) {
  // Old way
  // total = 0;
  // for(var i in arr){
    // total += arr[i];
  // }
  // return total;

  //ES2015
  return arr.reduce((a, b) => a+b, 0);
};
