const axios = require('axios');


exports.homeRoutes = (req,res)=>{
    // making a get request to api/users
    axios.get(`${process.env.URL}/api/products`)
        .then(function(response){
            // rendering-index.ejs and sending the data we received from get-request
            res.render('index',{products: response.data});
        })
        .catch(err=>{
            res.send(err);
        });
}