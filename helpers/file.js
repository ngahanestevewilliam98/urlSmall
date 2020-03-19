/**
 * Created by chlid on 19-05-04.
 */
const fs = require('fs');

// readfile
let readFileSync = (file, enc) => {
    return new Promise((resole, cancel) => {
        fs.readFile(file, enc, (err, data) => {
            if (err)
                cancel(err);
            else
                resole(data);
        })
    });
};

let writeFileSync = (file, dataWrite) => {
    return new Promise((resole, cancel) => {
        fs.appendFile(file, dataWrite, (err, data) => {
            if (err)
                cancel(err);
            else
                resole(data);
        })
    });
};

// upload file/folder
// download file/folder
// compress file/folder
// decompress file/folder
// copy file/folder
// delete file/folder
// move file/folder

module.exports = {
    rFSync: readFileSync,
    wFilec : writeFileSync
};