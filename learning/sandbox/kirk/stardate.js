
// http://megiddo.wikidot.com/stardate
// 67000 + (month * 30 + day) * 2.7
// month 1-12
// day 1-31

var date = new Date();

var year = date.getFullYear();
year = Number(year);

var month = date.getMonth() + 1;
month = Number(month);

var day = date.getDate();
day = Number(day);

function calculateStardate(y, m, d) {
    var baseYear = 2005;
    var starYear = 58000 + (y - baseYear) * 1000;
    var starDate = starYear + (m * 30 + d) * 2.7;
    console.log('Stardate: %s', starDate);
}

calculateStardate(year, month, day);

