/*
  JSON to CSV
*/

/*
  Global variables
*/
let urlPrefix = "https://raw.githubusercontent.com/jeffreylancaster/game-of-thrones/master/data/";
let scriptUrl = getDataUrl("script-bag-of-words");
let wordcountUrl = getDataUrl("wordcount");
let episodesUrl = getDataUrl("episodes");
let charactersUrl = getDataUrl("characters");
let genderUrl = getDataUrl("characters-gender-all");
        
/*
  Generates url for raw data file
*/
function getDataUrl(string) {
  return urlPrefix + string + ".json";
}

/*
  Ensures string value can be added to CSV
*/
function wrap(string) {
  if (typeof string == "string") {
    string = string.replace("\"", "'");
    string = string.replace("#", "%23");
  }
  return "\"" + string + "\"";
}

/*
  Takes an array of arrays and generates a link to a CSV
*/
function getCsvLink(array, filename) {
  let csvContent = "data:text/csv;charset=utf-8,";
  // iterate over the array of arrays
  for(let i = 0; i < array.length; i++) {
    let row = array[i].join(","); // for each row array, create a string of comma-separated values
    csvContent += row + "\r\n"; // ensure each row string is on a new line
  }
  // create a link to download the CSV file
  let encodedUri = encodeURI(csvContent);
  let link = document.getElementById(filename + "CsvLink"); // hidden HTML hyperlink element
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", filename + ".csv"); // set the hyperlink to download the CSV
  link.setAttribute("class", "button"); // unhide the HTML element and style it as a button
  link.innerHTML = "Download " + filename + ".csv";
}

/*
  Converts "hh:mm:ss" string into number of seconds
*/
function getSeconds(timeStr) {
  // extract hours, minutes and seconds
  let parts = timeStr.split(':');
  parts = parts.map(Number);
  // compute  and return total seconds
  return parts[0] * 3600   // an hour has 3600 seconds
          + parts[1] * 60  // a minute has 60 seconds
          + parts[2];      // seconds
}

/*
  Returns number of seconds duration
*/
function getDurationInSeconds(startTimeStr, endTimeStr) {
  return getSeconds(endTimeStr) - getSeconds(startTimeStr);
}

/*
  Characters table
*/
function getCharactersCsv() {
  $.getJSON(charactersUrl, function(charData) {
    $.getJSON(genderUrl, function(genderData) {

      // initialise an array of arrays to hold the results:
      // each member array represents a row, the first row contains the headings
      let rows = [["characterName", "characterImage", "houseName", "royal", "kingsguard", "numberKilled", "killedBy", "gender"]];
      // array of male character names
      let males = genderData.male;
      // array of female character names
      let females = genderData.female;

      // iterate over the characters JSON file
      for (let i = 0; i < charData.characters.length; i++) {
        let character = charData.characters[i];
        let row = [
          wrap(character.characterName),
          wrap(character.characterImageThumb),
          wrap(character.houseName),
          character.royal,
          character.kingsguard,
          (character.killed == null ? 0 : character.killed.length),
          wrap(character.killedBy),
          (males.indexOf(character.characterName) >= 0 ? "male"
            : females.indexOf(character.characterName) >= 0 ? "female"
            : "unknown")
        ];
//        console.log(row);
        rows.push(row);
      }

      // generate CSV link
      getCsvLink(rows, "characters");
    });
  });
}

/*
  Character scenes table
*/
function getCharacterScenesCsv() {
  $.getJSON(episodesUrl, function(data) {

      // initialise an array of arrays to hold the results:
      // each member array represents a row, the first row contains the headings
      let rows = [["sceneId", "episodeId", "seasonNum", "episodeNumInSeason", "episodeNum", "episodeTitle", "character", "durationInSeconds"]];

      // iterate over the episodes JSON file
      for (let i = 0; i < data.episodes.length; i++) {
        let episode = data.episodes[i];
        let episodeId = "S" + episode.seasonNum + "E" + episode.episodeNum;
        // iterate over "scenes" array
        for (let j = 0; j < episode.scenes.length; j++) {
          let scene = episode.scenes[j];
          let duration = getDurationInSeconds(scene.sceneStart, scene.sceneEnd);
          // iterate over "characters" array
          for (let k = 0; k < scene.characters.length; k++) {
            let row = [
              episodeId + "SC" + (j + 1),
              episodeId,
              episode.seasonNum,
              episode.episodeNum,
              i + 1,
              wrap(episodeId + " - '" + episode.episodeTitle + "'"),
              wrap(scene.characters[k].name),
              duration
            ];
  //        console.log(row);
            rows.push(row);
          }
        }
      }

    // generate CSV link
    getCsvLink(rows, "characterScenes");
  });
}

/*
  Character wordcount table
*/
function getCharacterWordcountCsv() {
  $.getJSON(wordcountUrl, function(data) {

      // initialise an array of arrays to hold the results:
      // each member array represents a row, the first row contains the headings
      let rows = [["episodeId", "seasonNum", "episodeNumInSeason", "episodeNum", "episodeTitle", "character", "count"]];

      // iterate over the wordcount JSON file
      for (let i = 0; i < data.count.length; i++) {
        let episode = data.count[i];
        // iterate over "text" array
        for (let j = 0; j < episode.text.length; j++) {
          let row = [
            episode.episodeAlt,
            episode.seasonNum,
            episode.episodeNum,
            i + 1,
            wrap(episode.episodeAlt + " - '" + episode.episodeTitle + "'"),
            wrap(episode.text[j].name),
            episode.text[j].count
          ];
//        console.log(row);
          rows.push(row);
        }
      }

    // generate CSV link
    getCsvLink(rows, "characterWordcount");
  });
}

/*
  Deaths table
*/
function getDeathsCsv() {
  $.getJSON(episodesUrl, function(data) {

      // initialise an array of arrays to hold the results:
      // each member array represents a row, the first row contains the headings
      let rows = [["sceneId", "episodeId", "seasonNum", "episodeNumInSeason", "episodeNum", "episodeTitle", "location", "subLocation", "mannerOfDeath"]];

      // iterate over the episodes JSON file
      for (let i = 0; i < data.episodes.length; i++) {
        let episode = data.episodes[i];
        let episodeId = "S" + episode.seasonNum + "E" + episode.episodeNum;
        // iterate over "scenes" array
        for (let j = 0; j < episode.scenes.length; j++) {
          let scene = episode.scenes[j];
          // iterate over "characters" array
          for (let k = 0; k < scene.characters.length; k++) {
            let character = scene.characters[k];
            if (typeof(character.mannerOfDeath) == "string") {
              let row = [
                episodeId + "SC" + (j + 1),
                episodeId,
                episode.seasonNum,
                episode.episodeNum,
                i + 1,
                wrap(episodeId + " - '" + episode.episodeTitle + "'"),
                wrap(scene.location),
                wrap(scene.subLocation),
                wrap(character.mannerOfDeath)
              ];
    //        console.log(row);
              rows.push(row);
            }
          }
        }
      }

    // generate CSV link
    getCsvLink(rows, "deaths");
  });
}

/*
  Sex scenes table
*/
function getSexScenesCsv() {
  $.getJSON(episodesUrl, function(data) {

      // initialise an array of arrays to hold the results:
      // each member array represents a row, the first row contains the headings
      let rows = [["sceneId", "episodeId", "seasonNum", "episodeNumInSeason", "episodeNum", "episodeTitle", "sexType"]];

      // iterate over the episodes JSON file
      for (let i = 0; i < data.episodes.length; i++) {
        let episode = data.episodes[i];
        let episodeId = "S" + episode.seasonNum + "E" + episode.episodeNum;
        // iterate over "scenes" array
        for (let j = 0; j < episode.scenes.length; j++) {
          let scene = episode.scenes[j];
          let sexTypes = [];
          // iterate over "characters" array
          for (let k = 0; k < scene.characters.length; k++) {
            let character = scene.characters[k];
            if (typeof(character.sex) == "object") {
              if (typeof(character.sex.type) == "string" && sexTypes.indexOf(character.sex.type) < 0) {
                sexTypes.push(character.sex.type);
              }
            }
          }
          if (sexTypes.length > 0) {
            for (let m = 0; m < sexTypes.length; m++) {
              let row = [
                episodeId + "SC" + (j + 1),
                episodeId,
                episode.seasonNum,
                episode.episodeNum,
                i + 1,
                wrap(episodeId + " - '" + episode.episodeTitle + "'"),
                wrap(sexTypes[m][0].toUpperCase() + sexTypes[m].slice(1))
              ];
    //        console.log(row);
              rows.push(row);
            }
          }
        }
      }

    // generate CSV link
    getCsvLink(rows, "sexScenes");
  });
}

/*
  Scenes table
*/
function getScenesCsv() {
  $.getJSON(episodesUrl, function(data) {

      // initialise an array of arrays to hold the results:
      // each member array represents a row, the first row contains the headings
      let rows = [["sceneId", "episodeId", "seasonNum", "episodeNumInSeason", "episodeNum", "episodeTitle", "location", "subLocation", "durationInSeconds", "content"]];

      // iterate over the episodes JSON file
      for (let i = 0; i < data.episodes.length; i++) {
        let episode = data.episodes[i];
        let episodeId = "S" + episode.seasonNum + "E" + episode.episodeNum;
        // iterate over "scenes" array
        for (let j = 0; j < episode.scenes.length; j++) {
          let scene = episode.scenes[j];
          let duration = getDurationInSeconds(scene.sceneStart, scene.sceneEnd);
          let isSexScene = false;
          let isDeathScene = false;
          // iterate over "characters" array
          for (let k = 0; k < scene.characters.length; k++) {
            let character = scene.characters[k];
            if (typeof(character.mannerOfDeath) == "string") {
              isDeathScene = true;
            }
            if (typeof(character.sex) == "object") {
              isSexScene = true;
            }
          }
          let content = isSexScene ? (isDeathScene ? "Sex and death" : "Sex") : isDeathScene ? "Death" : "Other";
          let row = [
            episodeId + "SC" + (j + 1),
            episodeId,
            episode.seasonNum,
            episode.episodeNum,
            i + 1,
            wrap(episodeId + " - '" + episode.episodeTitle + "'"),
            wrap(scene.location),
            wrap(scene.subLocation),
            duration,
            content
          ];
//        console.log(row);
          rows.push(row);
        }
      }

    // generate CSV link
    getCsvLink(rows, "scenes");
  });
}

/*
  Swearing table
*/
function getSwearingCsv() {
  $.getJSON(scriptUrl, function(data) {

      // initialise an array of arrays to hold the results:
      // each member array represents a row, the first row contains the headings
      let rows = [["episodeId", "seasonNum", "episodeNumInSeason", "episodeNum", "episodeTitle", "character", "mild", "strong", "veryStrong"]];

      // the following regex are not robust (or exhaustive!) but a quick analysis suggests they'll do
      let regexMild = /shit/ig;
      let regexStrong = /fuck/ig;
      let regexVeryStrong = /cunt/ig;

      // iterate over the script-bag-of-words JSON file
      for (let i = 0; i < data.length; i++) {
        let episode = data[i];
        // iterate over "text" array
        for (let j = 0; j < episode.text.length; j++) {
          let text = episode.text[j].text;
          let mildCount = text.match(regexMild) == null ? 0 : text.match(regexMild).length;
          let strongCount = text.match(regexStrong) == null ? 0 : text.match(regexStrong).length;
          let veryStrongCount = text.match(regexVeryStrong) == null ? 0 : text.match(regexVeryStrong).length;
          let row = [
            episode.episodeAlt,
            episode.seasonNum,
            episode.episodeNum,
            i + 1,
            wrap(episode.episodeAlt + " - '" + episode.episodeTitle + "'"),
            wrap(episode.text[j].name),
            mildCount,
            strongCount,
            veryStrongCount
          ];
//        console.log(row);
          rows.push(row);
        }
      }

    // generate CSV link
    getCsvLink(rows, "swearing");
  });
}

/*
  All tables
*/
function getAllCsvs() {
  getCharactersCsv();
  getCharacterScenesCsv();
  getCharacterWordcountCsv();
  getDeathsCsv();
  getSexScenesCsv();
  getScenesCsv();
  getSwearingCsv();
}