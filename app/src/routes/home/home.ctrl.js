"use strict";



const User = require("../../models/User");
const logger = require("../../config/logger");

const output = {
    home: (req, res) => {
        logger.info(`GET / 304 "go to home"`);
        res.render("home/index"); 
    },
    
    login: (req, res) => {
        logger.info(`GET /login 304 "go to login"`);
        res.render("home/login");
    },

    register: (req, res) => {
        logger.info(`GET /register 304 "go to register"`);
        res.render("home/register");
    },
};

const process = {
    login: async (req,res) =>  {
        const user = new User(req.body);
        const response = await user.login();
        const url = {
            method: "POST",
            path: "/login",
            status: response.err ? 400 : 200,
        };
        log(response, url);
        return res.status(url.status).json(response);
    },

    register: async (req,res) => {
        const user = new User(req.body);
        const response = await user.register();
        const url = {
            method: "POST",
            path: "/register",
            status: response.err ? 409 : 201,
        };
        log(response,url);
        return res.status(url.status).json(response);
    },
}

const log = (response,url) => {
    if (response.err) {
        logger.error(
            `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
        );
    } else { 
        logger.info(`${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`);
    }
};

module.exports = {
    output,
    process,
};