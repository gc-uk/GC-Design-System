var express = require('express');
var router = express.Router();

exports.vertical_nav = function (req, res) {
    
    var verticalCNavActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/vertical-nav",{
        verticalCNavActive
    });
}

