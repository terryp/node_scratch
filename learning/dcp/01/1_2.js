/*

Locate Smallest Window to Be Sorted

Given an array of integers that are out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example,

  Given:              [3, 7, 5, 6, 9]

  You Should Return: (1, 3)

*/

function smallestWindowToSort(input) {
  let output = [];
  let left = false;
  let right = false;
  let notSorted = input.slice();
  let sorted = input.sort();

  for (let i = 0; i < notSorted.length; i++) {
    let match = sorted[i] == notSorted[i];
    console.log(
      `Index: ${i}\tSorted: ${sorted[i]}\tUnsorted: ${
        notSorted[i]
      }\tMatch: ${match}`
    );
  }
}

smallestWindowToSort([3, 7, 5, 6, 9]);
