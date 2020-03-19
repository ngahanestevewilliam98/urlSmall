/*
  MANY FUNCTIONS OF NUMBER
*/

/**
 * Verify if your variable is a integer number
 * @param {Number} number 
 */
let isInt = function(number){
    return parseInt(number, 10)
}

/**
 * Verify if your variable is a float number
 * @param {Number} number 
 */
let isFloat = function(number){
    return parseFloat(number, 10)
}


/**
 * With interval generate a number
 * @param {Number} min 
 * @param {Number} max 
 */
let genNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Order array by ascendant
 * @param {*} tab 
 * @param {String} orderBy 
 */
let orderAsc = function(tab){
  return tab.sort(function(a, b) {
    return a - b
  });
}

/**
 * Order array by descendant
 * @param {*} tab 
 * @param {String} orderBy 
 */
let orderDes = function(tab){
  return tab.sort(function(a, b) {
    return b - a
  });
}

/**
 * With interval generate a array of number
 * @param {Number} nbreQuestion 
 * @param {Number} min 
 * @param {Number} max
 */
let genArrayNumber = function(nbreQuestion, min, max){
  let endTab = []
  let elmt = module.exports.genNumber(min,max)
  endTab.push(elmt)
  for(let i=0; i<(nbreQuestion-1); i++){
      let isTab = false
      while(!isTab){
        elmt = module.exports.genNumber(min,max)
        for(let j=0; j<endTab.length; j++){
            if(elmt === endTab[j]) break
            if(j === (endTab.length-1)){
              isTab = true
              break
            }
        }
      }
      endTab.push(elmt)
  }
  return endTab
}

module.exports = {
    isInt : isInt,
    isFloat : isFloat,
    genNumber: genNumber,
    genArrayNumber: genArrayNumber,
    orderAsc: orderAsc,
    orderDes: orderDes
}