
// http://megiddo.wikidot.com/stardate
// 67000 + (month * 30 + day) * 2.7
// month 1-12
// day 1-31



function calculateStardate(type) {
    var date = new Date();
    var year = Number(date.getFullYear());
    var month = Number(date.getMonth() + 1);
    var day = Number(date.getDate());
    
    switch(type) {
        case "classic":
            var baseYear = 2005;
            var starYear = 58000 + (year - baseYear) * 1000;
            var starDate = starYear + (month * 30 + day) * 2.7;
            console.log('Stardate: %s', starDate);
            break;
        case "new":
            var start = new Date(year,0);
            var elapsed = date - start;
            elapsed = Math.floor(elapsed / 86400000);
            elapsed = elapsed / 365;
            elapsed = elapsed.toString().substring(2,4);
            console.log("Stardate: %s.%s", year, elapsed);
            break;
    }
}

// calculateStardate();

function compareDate() {
    var now = new Date();
    var year = Number(now.getFullYear());
    
    var start = new Date(year,0);
    var elapsed = now - start;
    elapsed = Math.floor(elapsed / 86400000);
    elapsed = elapsed / 365;
    elapsed = elapsed.toString().substring(2,4);
    console.log("Stardare: %s.%s", year, elapsed);
}


// compareDate();
calculateStardate("new");
