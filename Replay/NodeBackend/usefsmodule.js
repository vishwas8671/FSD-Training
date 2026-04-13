const fs = require('fs');

function writeData() {
    try {
        fs.writeFileSync("student.txt", "Welcome to FS module", { encoding: 'utf8' });
        console.log("data is written successfully!");
        statusmsg="data is written succsessfully!!";
    } catch (e) {
        console.error("Error writing file:", +e);
        statusmsg= "Error writing file:", +e;
    }
    return statusmsg;
}

module.exports=writeData;