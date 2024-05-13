"use strict";

const UserStorage = require("./UserStorage")

class User{
    constructor(body){
        this.body = body;
    }

    async login() {
        const client = this.body;
        console.log(client.id);
        const {id,psword} = await UserStorage.getUserInfo(client.id);
        if (id){
            if (id === client.id && psword === client.psword){
                return { success: true };
            }
            return { success: false, msg: "wrong password"};
        }
        return { success: false, msg: "it is not defined id"};
    }

    register() {
        const client = this.body;
        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;