const CSVToJSON = require("csvtojson");

const fs = require("fs");

// const storage = require("electron-json-storage");

CSVToJSON()
  // .fromFile("./src/services/statement.csv")
  .fromFile("./statement.csv")
  .then(source => {
    var data = JSON.stringify(source, null, 2);
    fs.writeFile(
      "/home/rob/.config/holding-down-your-household/storage/holding-down-data.json",
      data,
      finished
    );
    function finished(err) {
      console.log(err);
    }
  });

// const dataPath = storage.getDataPath();
// console.log(dataPath);

// storage.get("holding-down-data", function(error, data) {
//   if (error) throw error;

//   console.log(data);
// });
