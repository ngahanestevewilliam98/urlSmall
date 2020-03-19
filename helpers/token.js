const file = require('./../helpers/file');

let jwt_token = undefined
async function init(){
    try{
        jwt_token = JSON.parse(await file.rFSync('./.env','utf8'));
        jwt_token = jwt_token['token']['secret'];
    }catch (err){
        console.error(err);
        throw new Error();
    }
}
init();

// generateToken
let generateToken = (user) => {
    return 'auth'
};

// generateToken
let isValid = (token) => {
    console.log(jwt_token)
    if(token === 'auth'){
        return true;
    }else{
        return false;
    }
};

module.exports = {
    generateToken: generateToken,
    isValid: isValid,
};