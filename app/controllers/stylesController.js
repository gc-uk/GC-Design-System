var express = require('express');
var router = express.Router();

var active = 'gc-vertical-nav__section-item--current'

exports.typography = function (req, res) {
    
    var typoActive = active
    res.render("design-system/styles/typography",{
        typoActive
    });
}



exports.page = function (req, res) {
    
    var pageActive = active
    res.render("design-system/styles/page",{
        pageActive
    });
}

