let board = 2;

patternOne = ' # # # #';
patternTwo = '# # # #';

for (let x = 1; x <= board; x++) {
  if (x % 2 == 0) {
    console.log(patternTwo);
  } else {
    console.log(patternOne);
  }
}
