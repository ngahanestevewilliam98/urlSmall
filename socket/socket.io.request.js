let aurelien_request = (client)=>{
    client.on('aurelien_request', function (data) {
        client.emit('aurelien_response', data + " 123")
    })
};

module.exports = {
    aurelien_request : aurelien_request,
};