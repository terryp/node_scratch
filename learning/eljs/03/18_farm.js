function printFarmInventory1(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = '0' + cowString;
  }
  console.log(`${cowString} Cows`);

  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = '0' + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}

printFarmInventory1(7, 11);

function printZeroPaddedLabel(number, label) {
  let numberString = String(number);
  while (numberString.length < 3) {
    numberString = '0' + numberString;
  }
  console.log(`${numberString} ${label}`);
}

function printFarmInventory2(cows, chickens, pigs) {
  printZeroPaddedLabel(cows, 'Cows');
  printZeroPaddedLabel(chickens, 'Chickens');
  printZeroPaddedLabel(pigs, 'Pigs');
}

printFarmInventory2(7, 11, 3);

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = '0' + string;
  }
  return string;
}

function printFarmInventory3(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 9)} Cows`);
  console.log(`${zeroPad(chickens, 9)} Chickens`);
  console.log(`${zeroPad(pigs, 9)} Pigs`);
}

printFarmInventory3(7, 11, 1000);
