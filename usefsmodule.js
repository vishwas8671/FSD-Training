const fs = require('fs');
const fsPromises = require('fs').promises;


// Write data (Synchronous)
function writeData() {
    try {
        fs.writeFileSync("student.txt", "Welcome to FS Module");
        return "Data written successfully";
    } catch (e) {
        return "Error: " + e.message;
    }
}


// Read data (Synchronous)
function readData() {
    try {
        return fs.readFileSync("student.txt", "utf-8");
    } catch (e) {
        return "Error: " + e.message;
    }
}


// Delete file (Synchronous)
function deleteFile() {
    try {
        fs.unlinkSync("student.txt");
        return "File deleted successfully";
    } catch (e) {
        return "Error: " + e.message;
    }
}


// Copy JSON file (Synchronous)
function copyJsonData() {
    try {
        const data = fs.readFileSync("StudentCSE.json", "utf-8");
        fs.writeFileSync("StudentAIML.json", data);
        return "File copied successfully!";
    } catch (error) {
        return "Error: " + error.message;
    }
}


// Read file asynchronously
async function fileReadAsync() {
    try {
        const data = await fsPromises.readFile("student.txt", "utf-8");
        return data;
    } catch (e) {
        return "Error: " + e.message;
    }
}


module.exports = {
    writeData,
    readData,
    deleteFile,
    copyJsonData,
    fileReadAsync
};