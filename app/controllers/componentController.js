var express = require('express');
var router = express.Router();

exports.alerts = function (req, res) {
    
    var alertsActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/alerts",{
        alertsActive
    });
}

exports.beta = function (req, res) {
    
     var betaActive = 'gc-vertical-nav__section-item--current';
     res.render("design-system/components/beta_banner",{
         betaActive
     });
}

exports.currency = function (req, res) {
    
    var currencyActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/currency",{
        currencyActive
    });
}

exports.expander = function (req, res) {
    
    var expanderActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/expander",{
        expanderActive
    });
}

exports.footer = function (req, res) {
    
    var footerActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/footer",{
        footerActive
    });
}

exports.header = function (req, res) {
    
    var headerActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/header",{
        headerActive
    });
}

exports.hero = function (req, res) {
    
    var heroActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/hero",{
        heroActive
    });
}

exports.interruption = function (req, res) {
    
    var interruptionActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/interruption_card",{
        interruptionActive
    });
}

exports.promo = function (req, res) {
    
    var promoActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/promo_cards",{
        promoActive
    });
}

exports.search = function (req, res) {
    
    var searchActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/search",{
        searchActive
    });
}

exports.tags = function (req, res) {
    
    var tagsActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/tags",{
        tagsActive
    });
}

exports.vertical_nav = function (req, res) {
    
    var verticalCNavActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/vertical-nav",{
        verticalCNavActive
    });
}

