const remove = (array, index) => {
  return array.slice(0, index).concat(array.slice(index + 1));
};

console.log(remove(['a', 'b', 'c', 'd', 'e'], 2));
// a b d e
