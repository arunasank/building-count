'use strict';

var request = require('request');
var util = require('util');
var argv = require('minimist')(process.argv.slice(2));

var url = util.format('http://nominatim.openstreetmap.org/?format=json&addressdetails=1&q=%s&format=json&limit=1', argv.place);

request(url, function (error, response, body) {
    if (!error && response.statusCode === 200) {
        var data = JSON.parse(response.body);
        var bbox = data[0]['boundingbox'];
        console.log([bbox[2], bbox[0], bbox[3], bbox[1]].toString());
    }
});
