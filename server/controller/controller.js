var productDB = require('../model/product_model'); // model for productDB Collection
const fs = require('fs'); // fs -> node file system

/**
 * all the crud operations will be happening in this file
 * - will be exported 
 * - and accessed in the router.js
 */
// function for - find a user by id/find all users
exports.find = (req, res)=>{
    // find single product if id is provided
    const id = req.query.id;
    if( id ){
        productDB.findById(id)
            .then(product => {
                if(!product) {
                    return res.status(404).send(`No user found with id: ${id}`)
                } 
                //console.log("product    " + product);
                return res.render('productView', {'product':product});
            })
            .catch(err=>{
               return res.status(500).send("_error: "+ err.message || 'something went wrong while fetching user');
            })
    }else{
        // find all products
        productDB.find()
        .then(products => {
            res.render('index', {'products':products});
        })
        .catch(err=>{
            res.status(500).send(`_error: ${err.message || "problem retriving information"}`)
        })
    }      
}
