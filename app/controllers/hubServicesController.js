const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.hub_services_detail_page_get = function (req, res) {

  console.log('detail_page')
  var slug = req.params.id;
  var detail_page;
  var list_of_hub_services;

  console.log(slug)
  Promise.all([
      client.getEntries({
        'content_type': 'publicationHubContent',
        'fields.slug': slug
      }),
      client.getEntries({
        'content_type': 'publicationHubContent',
        order: 'fields.title'
      })
    ])
    .then(([n, o]) => {
      detail_page = n,
      list_of_hub_services = o

  console.log(n)
      res.render('services/hub_services/detail_page', {
        detail_page, 
        list_of_hub_services
      });
    })
    .catch(error => {
      console.log(error);
    });

}


exports.hub_services_get = function (req, res) {
    
    console.log('get services')

    var hub_services;
    
  
    Promise.all([
        client.getEntries({
          'content_type': 'publicationHubContent',        
          order: 'fields.title'
        })
       
      ])
      .then(([n]) => {
        hub_services = n
              
        res.render('services/hub_services/index', {
            hub_services
        });
      })
      .catch(error => {
        console.log(error);
      });

}

