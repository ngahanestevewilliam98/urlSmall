module.exports =  function(req, res, next) {
    if(req.session.isConnect){
        return res.redirect('/resultats');
    }else{
        next();
    }
}