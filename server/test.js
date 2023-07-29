const lyricsFinder = require("@jeve/lyrics-finder");

lyricsFinder.LyricsFinder("blinding lights").then((data) => {
  console.log(data);
});