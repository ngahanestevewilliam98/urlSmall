const log = require('./../helpers/logs')

module.exports =  function(req, res, next) {
    let user = {
        "hostname" : req.hostname,
        "ip": req.ip,
        "proxy" : req.ips,
        "desUrl" : req.originalUrl,
        "protocol": req.protocol,
        "xhrClient": req.xhr,
        "freshRequest" : req.fresh,
        "method" : req.method,
        "dateTime" : new Date()
    }

    log.put("access", user)

    /*log.put("access", user).then(function(state){
        console.log(state);  
        log.get("access").then(function(data){ 
            let cb = data.message.split('#;#');
            let dt = JSON.parse(cb[1]);
            console.log(dt.hostname);  
        })
    })*/
    
    next();
}