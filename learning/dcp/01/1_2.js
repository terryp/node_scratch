/*

Locate Smallest Window to Be Sorted

Given an array of integers that are out of order, determine the bounds of the smallest window that must be sorted in order for the entire array to be sorted. For example,

  Given:              [3, 7, 5, 6, 9]

  You Should Return: (1, 3)

*/

function smallestWindowToSort(input) {
  let output = [];
  let notSorted = input.slice();
  let sorted = input.sort();

  for (let i = 0; i < notSorted.length; i++) {
    console.log(notSorted[i]);
  }

  for (let n in notSorted) {
    console.log(n);
  }

  console.log(notSorted);
  console.log(sorted);
}

smallestWindowToSort([3, 7, 5, 6, 9]);
