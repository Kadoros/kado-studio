"use strict";

const UserStorage = require("./UserStorage")

class User{
    constructor(body){
        this.body = body;
    }

    login() {
        const body = this.body;
        console.log(body.id);
        const {id,psword} = UserStorage.getUserInfo(body.id);
        console.log("s");
        console.log(id, psword);
        if (id){
            if (id === body.id && psword === body.psword){
                return { success: true };
            }
            return { success: false, msg: "wrong password"};
        }
        return { success: false, msg: "it is not defined id"};
    }
}

module.exports = User;