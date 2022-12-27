const model = require('../models/trade');

exports.index = (req,res, next)=>{
    // res.send(model.find());
    let Btype = [];
    model.distinct("Btype", function(error, BtypeResults){
        Btype = BtypeResults;
    })
    .then(() => {
        model.find()
        .then(trades => res.render('./trade/trades',{trades,Btype}))
        .catch(err=>next(err));
    })
    .catch(err => next(err));
};


exports.new = (req,res)=>{
    // res.send('send the new form');
    res.render('./trade/newTrade');
};

exports.create = (req,res, next)=>{
    // res.send('Created a new trade'); 

    if(req.body.image=== ""){
        req.body.image = "images/cards/bmw.jpeg";
    }
    else{
        req.body.image = "images/cards/"+req.body.image;
    }

    
    let trade = new model(req.body);//create a new trade docunment
    trade.save()// insert to the DB
    .then(trade=>res.redirect('/trades'))
    .catch(err=>{
        if(err.name ==='validationError'){
            err.status = 400;
        }
        next(err);
    });
    // console.log(trade);
};

exports.show = (req, res, next)=>{
    let id = req.params.id;

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid trade id');
        err.status = 400;
        return next(err);
    }


    model.findById(id)
    .then(trade=>{
        if(trade) {
            // trade.date = DateTime.fromSQL(trade.date).toFormat('LLLL dd, yyyy');
            return res.render('./trade/trade', {trade});
        } else {
            let err = new Error('Cannot find a trade with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=>next(err))
    //Error Handling
};



exports.edit = (req, res, next)=>{
    let id = req.params.id;

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid trade id');
        err.status = 400;
        return next(err);
    }


    model.findById(id)
    .then(trade=>{
        if(trade){
            return res.render('./trade/edit', {trade});
        }
        else{
            // res.status(404).send('cannot find trade with id ' + id);
            let err = new Error('Cannot find a trade with id '+id);
            err.status = 404;
            next(err);
        }
        // res.send('send the edit form');
    })
    .catch(err=>next(err));  
};





exports.update = (req, res, next)=>{
    // res.send('update the trade with id ' + req.params.id);
    let trade = req.body;
    let id = req.params.id;

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid trade id');
        err.status = 400;
        return next(err);
    }

    model.findByIdAndUpdate(id, trade, {useFindAndModify: false, runValidators: true})
    .then(trade=>{
        if(trade) {
            res.redirect('/trades/'+id);
        } else {
            // res.status(404).send('cannot find trade with id ' + id);
            let err = new Error('Cannot find a trade with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=> {
        if(err.name === 'ValidationError')
            err.status = 400;
        next(err);
    });

};



exports.delete = (req, res, next)=>{
    // res.send('delete the trade with id ' + req.params.id);
    let id = req.params.id;

    if(!id.match(/^[0-9a-fA-F]{24}$/)) {
        let err = new Error('Invalid trade id');
        err.status = 400;
        return next(err);
    }

    model.findByIdAndDelete(id, {useFindAndModify: false})
    .then(trade =>{
        if(trade) {
            res.redirect('/trades');
        } else {
            let err = new Error('Cannot find a trade with id ' + id);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err=>next(err));
};


