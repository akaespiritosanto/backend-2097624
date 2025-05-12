const Index = require("../db-sequelize");
const User = require("../models/User");

exports.signup = function (req, res){
    var { email, password } = req.body;
    User.findOne({
        where: {
            email: email
        }
    }).then(result => {
        if (result == null){
            User.create({ "email": email, "password": password})
                .then(user => {
                    //var token = generateAcessToken(email, password);
                    //req.session.user = user;
                    //req.session.token = token;
                    res.redirect("/");
                })
        }
        else{
            req.flash("signupMessage", "That email is already taken.")
        }
    }).catch(function (err){
        req.flash("signupMessage", err)
        res.redirect("/signup")
    })
}

exports.login = function (req, res){

}


//fazer view, copiando o que está no <form>