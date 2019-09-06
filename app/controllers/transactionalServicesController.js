const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.transactional_services_detail_page_get = function (req, res) {

  console.log('detail_page')
  var slug = req.params.id;
  var detail_page;
  var list_of_transactional_services;

  console.log(slug)
  Promise.all([
      client.getEntries({
        'content_type': 'publicationTransactionalContent',
        'fields.slug': slug
      }),
      client.getEntries({
        'content_type': 'publicationTransactionalContent',
        order: 'fields.title'
      })
    ])
    .then(([n, o]) => {
      detail_page = n,
      list_of_transactional_services = o

  console.log(n)
      res.render('services/transactional_services/detail_page', {
        detail_page, 
        list_of_transactional_services
      });
    })
    .catch(error => {
      console.log(error);
    });

}


exports.transactional_services_get = function (req, res) {
    
    console.log('get services')

    var transactional_services;
    
  
    Promise.all([
        client.getEntries({
          'content_type': 'publicationTransactionalContent',        
          order: 'fields.title'
        })
       
      ])
      .then(([n]) => {
        transactional_services = n
              
        res.render('services/transactional_services/index', {
            transactional_services
        });
      })
      .catch(error => {
        console.log(error);
      });

}

