'use strict';

const https = require("https");

const url = 'https://orion.apiseeds.com/api/exchangerates/';

var convert = function (apikey, from, to, callback,amount) {
    if (!amount)
        amount = 1;
    https.get(url +"convert/"+ from + "/" + to + "?apikey=" + apikey + "&amount=" + amount, res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);
            callback(body, res.headers);
        });
        res.on("error", (e) => {
            callback(false);
        });
    });
}

var currencies = function (apikey, callback) {
    https.get(url +"currencies/?apikey=" + apikey , res => {
        res.setEncoding("utf8");
        let body = "";
        res.on("data", data => {
            body += data;
        });
        res.on("end", () => {
            body = JSON.parse(body);
            callback(body, res.headers);
        });
        res.on("error", (e) => {
            callback(false);
        });
    });
}

module.exports = {
    convert,
    currencies
}