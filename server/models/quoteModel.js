const mongoose = require( 'mongoose' );
const quotesSchema = new mongoose.Schema({
 userName: String,
 quote: String,
 created_at: Date
})

const Quote = mongoose.model('quotes', quotesSchema);

const QuoteModel = {
    save: function(comingQuote){
        return Quote.create(comingQuote)
    },
    find: function(){
        return Quote.find();
    }

}


module.exports = {
    QuoteModel
};