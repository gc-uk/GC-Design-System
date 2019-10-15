var express = require('express');
var router = express.Router();
var active = 'gc-vertical-nav__section-item--current'
var designactive = 'app-navigation__list-item--current'
var designactive_components = designactive;


exports.index = function (req, res) {
   
    var designactive_components = designactive;    
    res.render("design-system/components/index", {
        designactive_components
    });
}


exports.vertical_nav = function (req, res) {

    var verticalCNavActive = active;

    res.render("design-system/components/vertical-nav", {
        verticalCNavActive,
        designactive_components
    });
}

exports.notifications = function (req, res) {

    var notificationsActive = active;
    res.render("design-system/components/notifications", {
        notificationsActive,
        designactive_components
    });
}

exports.beta = function (req, res) {

    var betaActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/beta-banner", {
        betaActive,
        designactive_components
    });
}


exports.feedback = function (req, res) {

    var feedbackActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/feedback-banner", {
        feedbackActive,
        designactive_components
    });
}

exports.currency = function (req, res) {

    var currencyActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/currency", {
        currencyActive,
        designactive_components
    });
}

exports.expander = function (req, res) {

    var expanderActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/expander", {
        expanderActive
    });
}

exports.footer = function (req, res) {

    var footerActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/footer", {
        footerActive
    });
}

exports.header = function (req, res) {

    var headerActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/header", {
        headerActive
    });
}

exports.hero = function (req, res) {

    var heroActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/hero", {
        heroActive
    });
}

exports.interruption = function (req, res) {

    var interruptionActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/interruption-card", {
        interruptionActive
    });
}

exports.promo = function (req, res) {

    var promoActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/promo_cards", {
        promoActive
    });
}

exports.search = function (req, res) {

    var searchActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/search", {
        searchActive
    });
}

exports.tags = function (req, res) {

    var tagsActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/tags", {
        tagsActive
    });
}


exports.vertical_nav = function (req, res) {

    var verticalCNavActive = active;
    res.render("design-system/components/vertical-nav", {
        verticalCNavActive
    });
}