"use strict";

const fs = require("fs").promises;
const dbDir = "./src/databases/USers.json";
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
    
    static #getUsers(data, isAll, fields) {
        const users = JSON.parse(data);
        if (isAll) return users;


        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        return newUsers;
    }
    static getUsers(isAll,...fields) {
        return fs
          .readFile(dbDir)
          .then((data) => {
            return this.#getUsers(data, isAll, fields);
          })
          .catch(console.log);      
    }

    static getUserInfo(id){
        return fs
          .readFile(dbDir)
          .then((data) => {
            return this.#getUserInfo(data,id);
          })
          .catch(console.log);
    }

    

    static async save(userInfo) {
        const users = await this.getUsers(true);
        if (users.id.includes(userInfo.id)) {
            throw "it is already existing id";
        }
        users.id.push(userInfo.id);
        users.psword.push(userInfo.psword);
        users.email.push(userInfo.email);
        fs.writeFile(dbDir,JSON.stringify(users));
        console.log(1)
        return { success: true };
    }
}

module.exports = UserStorage;