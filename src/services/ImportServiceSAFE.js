const CSVToJSON = require("csvtojson");

const fs = require("fs");

CSVToJSON()
  // TODO: Update to put the user submitted URL as a parameter that is being passed in
  .fromFile("./src/services/statement.csv")
  .then(source => {
    var data = JSON.stringify(source, null, 2);
    fs.writeFile("./src/services/data.json", data, finished);
    function finished(err) {
      console.log(err);
    }
  });

// TODO: Reowrk this to save to sqlite databse

const data = require("./data.json");

let newJSON = [];

data.forEach(item => {
  let currentItem = {};
  currentItem.properties = {};
  currentItem.coords = { lat: item.Latitude, lng: item.Longitude };
  currentItem.content = `<p>${item.Full_Address}</p>`;
  currentItem.visible = true;

  newJSON.push(currentItem);
});
