const file = require('./file');

async function readLog(fileRead){
    let data = {
        "succes" : false,
        "message": "Not found type log"
    };
    try{
        data.succes =  true;
        data.message = await file.rFSync(`./.logs/${fileRead}_log`,'utf8');
    }catch (err){
        if(fileRead === "access" || fileRead === "core")
            data.message = "Not found file log";
    }
    return data;
}

async function writeLog(fileWrite, dataWrite){
    let data = {
        "succes" : false,
        "message": "Not found type log"
    };
    try{
        await file.wFilec(`./.logs/${fileWrite}_log`, dataWrite);
        data.succes =  true;
        data.message = "Succes Write";
    }catch (err){
        if(fileWrite === "access" || fileWrite === "core")
            data.message = "Not found file log";
    }
    return data;
}

/**
 * Add a new log
 * @param {String} type 
 * @param {*} log 
 */
let put = function(type, data){
    return writeLog(`${type}`, `#;#${JSON.stringify(data)}`);
}

/**
 * Get log
 * @param {String} type 
 */
let get = function(type){
    return readLog(`${type}`);
}

module.exports = {
    put: put,
    get: get
}