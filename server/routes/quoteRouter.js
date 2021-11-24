const express = require( 'express');
const QuoteRouter = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quotesSchema', {useNewUrlParser: true});
const {QuoteModel} = require( '../models/quoteModel' );


    module.exports = function(app){
        app.get ('/', function(request, response){///aqui estamos creando las rutas.
            response.render('index.ejs');

        });
        let newQuote = {};
        app.get("/quotes", function (request, response){
            QuoteModel.find()
                .then(data => response.render("quotes.ejs", {quotes:data}))
                .catch(err => response.json(err));
        });     

        app.post( '/quotes', function( request, response ){
                let userName = request.body.userName;
                let quote = request.body.quote;
                let created_at=new Date();
                console.log("quotes del form: "+quote);
                        comingQuote = {
                            userName,
                            quote,
                            created_at
                        };
                        console.log(comingQuote);
                        QuoteModel.save(comingQuote)
                            .then( newQuoteData => console.log('new quote: ', newQuoteData))
                            .catch(err => console.log(err));
                        response.redirect('/quotes')
        });
    }


// module.exports = {
//     QuoteRouter
// };