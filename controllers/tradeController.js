const model = require('../models/trade');

exports.index = (req,res)=>{
    // res.send(model.find());
    let trades = model.find();
    let Btype = model.findBtype();
    res.render('./trade/trades',{trades,Btype});
};

exports.new = (req,res)=>{
    // res.send('send the new form');
    res.render('./trade/newTrade');
};

exports.create = (req,res)=>{
    // res.send('Created a new trade'); 
    let trade = req.body;
    model.save(trade);
    console.log(trade);
    res.redirect('/trades');
};

exports.show = (req, res, next)=>{
    let id = req.params.id;
    let trade = model.findById(id);
    if(trade){
        res.render('./trade/trade', {trade});
    }
    else{
        // res.status(404).send('cannot find trade with id ' + id);
        let err = new Error('Cannot find a trade with id '+id);
        err.status = 404;
        next(err);

    }
    //Error Handling
};

exports.edit = (req, res, next)=>{
    let id = req.params.id;
    let trade = model.findById(id);
    if(trade){
        res.render('./trade/edit', {trade});
    }
    else{
        // res.status(404).send('cannot find trade with id ' + id);
        let err = new Error('Cannot find a trade with id '+id);
        err.status = 404;
        next(err);
    }
    // res.send('send the edit form');
};

exports.update = (req, res, next)=>{
    // res.send('update the trade with id ' + req.params.id);
    let trade = req.body;
    let id = req.params.id;

    if(model.updateById(id, trade)){
        console.log(trade);
        res.redirect('/trades/'+id);
    } else{
        // res.status(404).send('cannot find trade with id ' + id);
        let err = new Error('Cannot find a trade with id '+id);
        err.status = 404;
        next(err);
    }
};

exports.delete = (req, res, next)=>{
    // res.send('delete the trade with id ' + req.params.id);
    let id = req.params.id;
    if(model.deleteById(id)){
        res.redirect('/trades');
    } else{
        // res.status(404).send('cannot find trade with id ' + id);
        let err = new Error('Cannot find a trade with id '+id);
        err.status = 404;
        next(err);
    }
};