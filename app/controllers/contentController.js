const contentful = require('contentful')
var contentnavactive = 'govuk-header__navigation-item--active';

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.index_get = function (req, res) {
    res.redirect('/content/content/introduction');
}

<<<<<<< HEAD
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

=======
exports.content_get = function (req, res) {

    console.log('contentPages content page')
    var slug = req.params.id;
    var content_page;
    var list_of_pages;

    console.log(slug)
    Promise.all([
            client.getEntries({
                'content_type': 'contentPages',
                'fields.slug': slug
            }),
            client.getEntries({
                'content_type': 'contentPages',
                order: 'fields.order'
            })
        ])
        .then(([n, o]) => {
            content_page = n,
                list_of_pages = o

            console.log(n)
            res.render('content/content', {
                content_page,
                list_of_pages,
                contentnavactive
            });
        })
        .catch(error => {
            console.log(error);
        });

}
>>>>>>> d7ed0fb7ebda72813e8acfacb7f86981dc372f86
