const token = require('./../helpers/token');

module.exports =  function(req, res, next) {
    let auth = req.headers['authorization'];
    if(auth === undefined){
        return res.status(400).json(
            {
                "success": false,
                "message" : "empty token auth"
            }
        )
    }

    auth = auth.replace('Bearer ', '');
    if(token.isValid(auth)){
        next()
    }else{
        return res.status(200).json(
            {
                "success": false,
                "message" : "invalid token auth"
            }
        )
    }
    
}