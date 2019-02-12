
/*
    1. Zero or more WUBS *before* first word
    2. Zero or more WUBS *after* the last word
    3. At least 1 between words
*/

function songDecoder(song) {
  song = song.replace(/wub/gi, ' ');
  song = song.replace(/\s{2,}/g, ' ');
  song = song.trim();
  return song;
}

let song = "WUBIWUBWUBWUBWUBAMWUBWUBWUBAWUBWUBSONG";
let result = songDecoder(song);
console.log(result);