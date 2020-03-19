module.exports =  function(req, res, next) {
    if(req.session.isConnect){
        next();
    }else{
        return res.redirect('/');
    }
}