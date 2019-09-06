const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.information_services_detail_page_get = function (req, res) {

  console.log('detail_page')
  var slug = req.params.id;
  var detail_page;
  var list_of_information_services;

  console.log(slug)
  Promise.all([
      client.getEntries({
        'content_type': 'publicationInformationContent',
        'fields.slug': slug
      }),
      client.getEntries({
        'content_type': 'publicationInformationContent',
        order: 'fields.title'
      })
    ])
    .then(([n, o]) => {
      detail_page = n,
      list_of_information_services = o

  console.log(n)
      res.render('services/information_services/detail_page', {
        detail_page, 
        list_of_information_services
      });
    })
    .catch(error => {
      console.log(error);
    });

}


exports.information_services_get = function (req, res) {
    
    console.log('get services')

    var information_services;
    
  
    Promise.all([
        client.getEntries({
          'content_type': 'publicationInformationContent',        
          order: 'fields.title'
        })
       
      ])
      .then(([n]) => {
        information_services = n
              
        res.render('services/information_services/index', {
            information_services
        });
      })
      .catch(error => {
        console.log(error);
      });

}

