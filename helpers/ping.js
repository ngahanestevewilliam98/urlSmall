const tcpp = require('tcp-ping');



let probeHostedSalt = (host) => {
    return new Promise((resole, cancel) => {
        tcpp.probe(host, 80, function(err, available) {
            if(err)
                cancel(err);
            else 
                resole({host: host, available: available});
        });
    });
};

async function probeHost(hosts){
    let results = [];
    for(var i=0; i < hosts.length; i++){
      let cb = await probeHostedSalt(hosts[i])
      results.push(cb)
    }
    return results
}

let pingHostSalt = (host) => {
    return new Promise((resole, cancel) => {
        tcpp.ping({ address: host }, function(err, data) {
            if(err)
                cancel(err);
            else 
                resole({host: host, data: data});
        });
    });
};

async function pingHost(hosts){
    let results = [];
    for(var i=0; i < hosts.length; i++){
      let cb = await pingHostSalt(hosts[i])
      results.push(cb)
    }
    return results
}

module.exports = {
    probeHost: probeHost,
    pingHost: pingHost
};