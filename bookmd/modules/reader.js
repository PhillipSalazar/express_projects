const fs = require('fs');
var a;


module.exports = {
//  let path = require('path');


//var a;
cake : function(file, callback) {
//  const path = require('path');
//  const fs = require('fs');
var a;
fs.readFile("files" + file, "utf8", function (err, data) {
    //  console.log(data);
     if (err) return callback(err);
    callback(null, data);
    return data;
    });
}
  //export { cake() }
}
