"use strict";



const User = require("../../models/User")

const output = {
    home: (req, res) => {
        res.render("home/index"); 
    },
    
    login: (req, res) => {
        res.render("home/login")
    },
};

const process = {
    login: (req,res) =>  {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);

        
        
        // const users = UserStorage.getusers("id", "psword");
        
        // const id = req.body.id,
        //     psword = req.body.psword;
        
        // const response = {};
        // if (users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     response.success = true;
        //     if (users.psword[idx] === psword){
        //         return res.json(response);
        //     }
        // }
        // response.success = false;
        // response.msg = "failed to login";
        // return res.json(response);

    },
}


module.exports = {
    output,
    process,
};