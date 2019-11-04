var express = require('express');
var router = express.Router();

var designsystemnavactive = 'govuk-header__navigation-item--active';

exports.typography = function (req, res) {
    
      res.render("design-system/styles/typography",{
        designsystemnavactive
    });
}



exports.page = function (req, res) {
        res.render("design-system/styles/page",{    
        designsystemnavactive
    });
}

