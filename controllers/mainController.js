const model = require('../models/trade');
//GET /trades: send all trades to the users
exports.index = (req,res)=>{
    res.render('./index');
};

exports.aboutUs = (req,res)=>{
    res.render('./about');
};

exports.contactUs = (req,res)=>{
    res.render('./contact');
};