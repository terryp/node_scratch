function countBs(target) {
  let count = 0;
  for (let i = 0; i < target.length; i++) {
    if (target[i] == 'B') {
      count += 1;
    }
  }
  return count;
}

console.log(countBs('BBC'));

function countChars(haystack, needle) {
  let count = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle) {
      count += 1;
    }
  }
  return count;
}

console.log(countChars('kakkerlak', 'k'));
