"use strict";

const UserStorage = require("./UserStorage")

class User{
    constructor(body){
        this.body = body;
    }

    async login() {
        const client = this.body;
        try {
            const user = await UserStorage.getUserInfo(client.id);
            
            if (user !== undefined){
                const { userKey, id , email, psword, in_date} = user;
                if (id === client.id && psword === client.psword){
                    return { success: true };
                }
                return { success: false, msg: "wrong password"};
            }
            return { success: false, msg: "wrong ID"};
        }
        catch (err) {
            return {success: false, msg: err};
        }
    } 

    async register() {
        const client = this.body;
        try{
            const response = await UserStorage.save(client);
            return response;
        } catch (err){
            return {success: false, msg: err}
        }
    }
}

module.exports = User;