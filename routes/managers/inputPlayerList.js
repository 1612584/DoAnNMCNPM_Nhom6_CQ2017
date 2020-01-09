const multer = require("multer");
var XLSX = require("xlsx");
var moment = require("moment");
const playerModel = require("../../models/player.model");

const parseDateExcel = excelTimestamp => {
  const secondsInDay = 24 * 60 * 60;
  const excelEpoch = new Date(1899, 11, 31);
  const excelEpochAsUnixTimestamp = excelEpoch.getTime();
  const missingLeapYearDay = secondsInDay * 1000;
  const delta = excelEpochAsUnixTimestamp - missingLeapYearDay;
  const excelTimestampAsUnixTimestamp = excelTimestamp * secondsInDay * 1000;
  const parsed = excelTimestampAsUnixTimestamp + delta;
  return isNaN(parsed) ? null : parsed;
};

const storage = multer.diskStorage({
  filename: function(req, file, cb) {
    cb(null, "sheet.xlsx");
  },
  destination: function(req, file, cb) {
    cb(null, `./public/lists/`);
  }
});
const upload = multer({
  storage
});

module.exports.get = (req, res) => {
  res.render("managers/inputPlayerList", {
    layout: "manager"
  });
};

module.exports.post = async (req, res) => {
  await upload.single("file-input")(req, res, err => {
    if (err) {
    }
    var data = [];
    var workbook = XLSX.readFile("./public/lists/sheet.xlsx");
    var sheet_name_list = workbook.SheetNames;
    sheet_name_list.forEach(function(y) {
      var worksheet = workbook.Sheets[y];
      var headers = {};
      for (z in worksheet) {
        if (z[0] === "!") continue;
        //parse out the column, row, and value
        var tt = 0;
        for (var i = 0; i < z.length; i++) {
          if (!isNaN(z[i])) {
            tt = i;
            break;
          }
        }
        var col = z.substring(0, tt);
        var row = parseInt(z.substring(tt));
        var value = worksheet[z].v;

        //store header names
        if (row == 1 && value) {
          headers[col] = value;
          continue;
        }

        if (!data[row]) data[row] = {};
        data[row][headers[col]] = value;
      }
      //drop those first two rows which are empty
      data.shift();
      data.shift();
      console.log(data);
    });
    data.forEach(async element => {
      delete element.id;
      element.birthDay = new Date(parseDateExcel(element.birthDay));
      element.birthDay = moment(element.birthDay).format("YYYY-MM-DD");
      const rows = await playerModel.add(element);
    });
    res.render("manager/inputPlayerList", {
      message: "Đã nhập danh sách vận động viên từ file thành công!"
    });
  });
};
