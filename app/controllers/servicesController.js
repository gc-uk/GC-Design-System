const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.space,
    accessToken: process.env.spaceapi
})

exports.home_get = function (req, res) {


   res.redirect("services/");
}

exports.services_catalogue_get = function (req, res) {
    
    console.log('get services')

    var service_catalogue;
    
  
    Promise.all([
        client.getEntries({
          'content_type': 'contentGroups',        
          order: 'fields.title'
        })
       
      ])
      .then(([n]) => {
        service_catalogue = n
              
        res.render('services/index', {
            service_catalogue
        });
      })
      .catch(error => {
        console.log(error);
      });

}

