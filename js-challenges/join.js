"use strict";

var _ = {
  // Implements:
  // https://lodash.com/docs#join
  join: (array, separator = ',') => {
    // write code to implement method here
    let res = '';
    for (let i = 0; i < array.length; i++) {
      res = res.concat(
        array[i] +
        ((i === array.length - 1) ? '' : `${separator}`)
      );
    return res;
  }
}

const value = _.join(["hello", "goodbye"], ", ");

console.log(value);