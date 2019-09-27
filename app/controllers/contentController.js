var express = require('express');
var router = express.Router();
var active = 'gc-vertical-nav__section-item--current'
var contentactive = 'app-navigation__list-item--current'
var contentactive_components = contentactive;


exports.index_get = function (req, res) {
   
    var contentactive_components = contentactive;    
    res.render("content/index", {
        contentactive_components
    });
}

exports.az_get = function (req, res) {
   
    var azActive = active;

    res.render("content/a-z", {
        azActive,
        contentactive_components
    });
}

exports.audience_get = function (req, res) {
   
    var audienceActive = active;

    res.render("content/audience", {
        audienceActive,
        contentactive_components
    });
}


exports.controlled_language_get = function (req, res) {
   
    var controlledlanguageActive = active;

    res.render("content/controlled-language", {
        controlledlanguageActive,
        contentactive_components
    });
}

exports.emails_and_texts_get = function (req, res) {
   
    var emailsandtextsActive = active;

    res.render("content/emails-and-text-messages", {
        emailsandtextsActive,
        contentactive_components
    });
}

exports.key_styles_get = function (req, res) {
   
    var keystylesActive = active;

    res.render("content/key-styles", {
        keystylesActive,
        contentactive_components
    });
}

exports.tools_get = function (req, res) {

    var toolsActive = active;

    res.render("content/tools", {
        toolsActive,
        contentactive_components
    });
}

