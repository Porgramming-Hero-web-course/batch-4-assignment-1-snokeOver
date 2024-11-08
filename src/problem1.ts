//A TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

type NumArray = Array<number>;

const sumArray = (arr: NumArray): number => {
  return arr.reduce((sum, currVal) => sum + currVal, 0);
};

console.log(sumArray([1, 2, 3, 4, 5]));
