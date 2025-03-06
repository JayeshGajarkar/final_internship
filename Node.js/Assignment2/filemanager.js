const fs = require('fs');
const path = require('path');

const fileDir = path.join(__dirname, 'files');

function createFile(fileName, data) {
    const filepath = path.join(fileDir, fileName);
    const buffer = Buffer.from(data);

    fs.writeFile(filepath, buffer, (err) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(`File ${fileName} created successfully`);
    });
}

function readFile(fileName) {
    const filepath = path.join(fileDir, fileName);
    console.log('Reading file in 3 seconds...');

    setTimeout(() => {
        fs.readFile(filepath, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`File content (String): ${data.toString()}`);
            }
        });
    }, 3000);
}

function appendFile(fileName, data) {
    const filepath = path.join(fileDir, fileName);
    const buffer = Buffer.from(data);

    fs.appendFile(filepath, buffer, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`Data appended successfully to ${fileName}`);
        }
    });
}

function deleteFile(fileName) {
    const filepath = path.join(fileDir, fileName);

    fs.unlink(filepath, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`File ${fileName} deleted successfully`);
        }
    });
}

module.exports = {
    createFile,
    readFile,
    appendFile,
    deleteFile
};