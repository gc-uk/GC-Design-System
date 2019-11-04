var express = require('express');
var router = express.Router();
var active = 'gc-vertical-nav__section-item--current'
var designsystemnavactive = 'govuk-header__navigation-item--active';
var designactive_components = 'app-navigation__list-item--current'

exports.index = function (req, res) {
   
    res.render("design-system/components/index", {
        designactive_components,
        designsystemnavactive
    });
}


exports.vertical_nav = function (req, res) {

    var verticalCNavActive = active;

    res.render("design-system/components/vertical-nav", {
        verticalCNavActive,
        designactive_components,designsystemnavactive
    });
}

exports.notifications = function (req, res) {

    var notificationsActive = active;
    res.render("design-system/components/notifications", {
        notificationsActive,
        designactive_components,designsystemnavactive
    });
}

exports.beta = function (req, res) {

    var betaActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/beta-banner", {
        betaActive,
        designactive_components,designsystemnavactive
    });
}


exports.feedback = function (req, res) {

    var feedbackActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/feedback-banner", {
        feedbackActive,
        designactive_components,designsystemnavactive
    });
}

exports.currency = function (req, res) {

    var currencyActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/currency", {
        currencyActive,
        designactive_components,designsystemnavactive
    });
}

exports.expander = function (req, res) {

    var expanderActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/expander", {
        expanderActive,designactive_components,designsystemnavactive
    });
}

exports.footer = function (req, res) {

    var footerActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/footer", {
        footerActive,designactive_components,designsystemnavactive
    });
}

exports.header = function (req, res) {

    var headerActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/header", {
        headerActive,designactive_components,designsystemnavactive
    });
}

exports.hero = function (req, res) {

    var heroActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/hero", {
        heroActive,designactive_components,designsystemnavactive
    });
}

exports.interruption = function (req, res) {

    var interruptionActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/interruption-card", {
        interruptionActive,designactive_components,designsystemnavactive
    });
}

exports.promo = function (req, res) {

    var promoActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/promo-cards", {
        promoActive,designactive_components,designsystemnavactive
    });
}

exports.search = function (req, res) {

    var searchActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/search", {
        searchActive,designactive_components,designsystemnavactive
    });
}

exports.tags = function (req, res) {

    var tagsActive = 'gc-vertical-nav__section-item--current';
    res.render("design-system/components/tags", {
        tagsActive,designactive_components,designsystemnavactive
    });
}


exports.vertical_nav = function (req, res) {

    var verticalCNavActive = active;
    res.render("design-system/components/vertical-nav", {
        verticalCNavActive,designactive_components,designsystemnavactive
    });
}