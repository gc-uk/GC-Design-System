const contentful = require('contentful')
var accessibilitynavactive = 'govuk-header__navigation-item--active';

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.index_get = function (req, res) {
    res.redirect('/accessibility/content/introduction');
}

exports.content_get = function (req, res) {

    console.log('accessibility content page')
    var slug = req.params.id;
    var content_page;
    var list_of_pages;

    console.log(slug)
    Promise.all([
            client.getEntries({
                'content_type': 'generalPage',
                'fields.slug': slug
            }),
            client.getEntries({
                'content_type': 'generalPage',
                order: 'fields.order'
            })
        ])
        .then(([n, o]) => {
            content_page = n,
                list_of_pages = o

            console.log(n)
            res.render('accessibility/content', {
                content_page,
                list_of_pages,
                accessibilitynavactive
            });
        })
        .catch(error => {
            console.log(error);
        });

}