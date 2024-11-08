{
  //Problem2: A TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  type NumArray = Array<number>;

  const removeDuplicates = (arr: NumArray): NumArray => {
    return Array.from(new Set(arr));
  };

  console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
}
