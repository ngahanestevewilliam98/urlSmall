const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session)

var options = {
    host: 'localhost',
    port: 3306,
    user: 'appartoo',
    password: 'appartoo',
    database: 'appartoo'
};

let sessionStore = new MySQLStore(options);

module.exports =  session({
    key: 'session_cookie_name',
    secret: "°+%%03KDM~@#}#ˇ}~ù$**92.5",
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
})