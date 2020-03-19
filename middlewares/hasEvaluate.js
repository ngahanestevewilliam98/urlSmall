module.exports =  function(req, res, next) {
    req.session.hasEvaluate = false
    if(req.session.hasEvaluate){
        return res.redirect('/resultats');
    }else{
        next();
    }
}