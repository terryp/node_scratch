
// http://megiddo.wikidot.com/stardate
// 67000 + (month * 30 + day) * 2.7
// month 1-12
// day 1-31



function calculateStardate() {
    var date = new Date();
    var year = Number(date.getFullYear());
    var month = Number(date.getMonth() + 1);
    var day = Number(date.getDate());
    var baseYear = 2005;
    var starYear = 58000 + (year - baseYear) * 1000;
    var starDate = starYear + (month * 30 + day) * 2.7;
    console.log('Stardate: %s', starDate);
}

calculateStardate();

