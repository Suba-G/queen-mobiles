"use strict";
const express = require("express");

const startTime = Date.now();

function register(router) {

    router.use('/static', express.static('dist'))


    router.get("/ping", (req, res) => {
        res.json({
            status: "running",
            upTime: (Date.now() - startTime)
        });
    });
}

module.exports = {
    register
}