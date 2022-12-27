// require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const mongoose = require('mongoose');
const mainRoutes = require('./routes/mainRoutes');
const tradeRoutes = require('./routes/tradeRoutes');

// create app
const app = express();

//configure app
let port = 3000;
let host = 'localhost';
app.set('view engine', 'ejs');

//mount middware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

//connect to database
mongoose.connect('mongodb://localhost:27017/trade', 
                    {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    //start the server
    app.listen(port, host, ()=>{
        console.log('Server is running on port', port);
    });
})
.catch(err=>console.log(err.message));



//set up routes

// app.get('/',(req,res)=>{
//     res.render('index');
// });

app.use('/', mainRoutes);

app.use('/trades', tradeRoutes);

//Error handling

app.use((req, res, next) =>{
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});

app.use((err, req, res, next)=>{
    if(!err.status){
        err.status = 500;
        console.log(err.message);
        err.message = ("Internal Server Error");
    }

    res.status(err.status);
    res.render('error', {error: err});
});

//start the server
// app.listen(port, host, ()=>{
//     console.log('Server is running on port', port);
// })