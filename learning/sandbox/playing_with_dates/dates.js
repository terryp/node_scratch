
let today = new Date().toDateString();
console.log(today);

function isToday(date) {
    let today = new Date().toDateString;
    return today === date.toDateString;
}

yesterday = new Date() - 1;
console.log(isToday(yesterday));
