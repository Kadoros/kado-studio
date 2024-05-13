"use strict";

const fs = require("fs").promises;

class UserStorage {
        
    static #getUserInfo(data,id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        },{});

        return userInfo;
    }
    
    static getusers(...fields) {
        // const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }

    static getUserInfo(id){
        return fs
          .readFile("./src/databases/USers.json")
          .then((data) => {
            return this.#getUserInfo(data,id);
          })
          .catch(console.log);
    }

    

    static save(userInfo) {
        console.log(userInfo);
        // const users = this.#users;
        users.id.push(userInfo.id);
        users.email.push(userInfo.email);
        users.psword.push(userInfo.psword);
        return {success: true};

    }
}

module.exports = UserStorage;