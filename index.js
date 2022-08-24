"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola ke ase"
    });
});
app.listen(port, function () {
    console.log("server iniciado en ".concat(port));
});
