/**
 * Check if the email is compliant
 * @param {String} email email
 * @returns {Boolean}
 */
function isValidEmail(email){
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


/**
 * Check if a word is within a range 
 * @param {String} word word 
 * @param {Number} min min word
 * @param {Number} max max word
 * @returns {Boolean}
 */
function isBetween(word, min, max){
    let re =  new RegExp(`^.{${min},${max}}$`);
    return re.test(String(word).toLowerCase());
}

/**
 * Check if a password is solid
 * @param {String} password password 
 * @returns {Boolean}
 */
function isSolidPassword(password){
    let re =  /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
    return re.test(String(password));
}

/**
 * Check if a param is integer
 * @param {Number|String} param param 
 * @returns {Boolean}
 */
function isInteger(param){
    let re =  /^\d+$/;
    return re.test(String(param));
}



module.exports = {
    isValidEmail: isValidEmail,
    isBetween: isBetween,
    isSolidPassword: isSolidPassword,
    isInteger: isInteger
};