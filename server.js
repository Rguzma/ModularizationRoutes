
const express = require('express');

const app = express();
const mongoose = require('mongoose');


// app.use(express.static(__dirname + "/static"));
app.use( express.urlencoded({extended:true}) );
app.set('views', __dirname + '/views');
app.set('views engine', 'ejs' );


require('./server/routes/quoteRouter.js')(app);



app.listen(8080, function (){//este es el cierre

	console.log("the user server is running in port 8080");
});