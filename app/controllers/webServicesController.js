const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.web_services_detail_page_get = function (req, res) {

  console.log('detail_page')
  var slug = req.params.id;
  var detail_page;
  var list_of_web_services;

  console.log(slug)
  Promise.all([
      client.getEntries({
        'content_type': 'publicationWebServicesContent',
        'fields.slug': slug
      }),
      client.getEntries({
        'content_type': 'publicationWebServicesContent',
        order: 'fields.title'
      })
    ])
    .then(([n, o]) => {
      detail_page = n,
      list_of_web_services = o

  console.log(n)
      res.render('services/web_services/detail_page', {
        detail_page, 
        list_of_web_services
      });
    })
    .catch(error => {
      console.log(error);
    });

}


exports.web_services_get = function (req, res) {
    
    console.log('get services')

    var web_services;
    
  
    Promise.all([
        client.getEntries({
          'content_type': 'publicationWebServicesContent',        
          order: 'fields.title'
        })
       
      ])
      .then(([n]) => {
        web_services = n
              
        res.render('services/web_services/index', {
            web_services
        });
      })
      .catch(error => {
        console.log(error);
      });

}

