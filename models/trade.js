// const { DateTime } = require("luxon");
// const {v4: uuidv4} = require('uuid');

// const Btype = ['SEDAN', 'SUV'];

// const trades = [
// {
//     id: '1',
//     title: 'Mercedes G Wagon',
//     class: 'G-Class - a new type of DNA',
//     Btype: 'SEDAN',
//     image: 'images/cards/benz.jpg',
//     content: 'The DNA of an off-road vehicle with its iconic and virtually indestructible body. a Design that speaks for itself, one of a kind with unique interiors. G-Wagon has redefined the SUV space with its unique design.',
//     createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
//     feature1: 'Active Lane Keeping Assist',
//     feature2: 'Parking with 360 Camera',
//     feature3: 'Assistance Package'
// },
// {
//     id: '2',
//     title: 'Mercedes S Class',
//     class: 'S-Class - a new type of DNA',
//     Btype: 'SEDAN',
//     image: 'images/cards/sclass.jpeg',
//     content: 'The Design that speaks for itself, one of a kind with unique interiors. the DNA of an off-road vehicle with its iconic and virtually indestructible body. G-Wagon has redefined the SUV space with its unique design.',
//     createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
//     feature1: 'Passive Lane Keeping Assist',
//     feature2: 'Parking with 270 Camera',
//     feature3: 'Superior Package'
// },
// {
//     id: '3',
//     title: 'BMW Z4',
//     class: 'Z4-Class - a new type of DNA',
//     Btype: 'SEDAN',
//     image: 'images/cards/bmw-z4.jpg',
//     content: 'The Design that speaks for itself, one of a kind with unique interiors. the DNA of an off-road vehicle with its iconic and virtually indestructible body. G-Wagon has redefined the SUV space with its unique design.',
//     createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
//     feature1: 'Passive Lane Keeping Assist',
//     feature2: 'Parking with 270 Camera',
//     feature3: 'Superior Package'
// },
// {
//     id: '4',
//     title: 'Mercedes G550',
//     class: 'G550-Class - a new type of DNA',
//     Btype: 'SUV',
//     image: 'images/cards/benzG5.jpeg',
//     content: 'The Design that speaks for itself, one of a kind with unique interiors. the DNA of an off-road vehicle with its iconic and virtually indestructible body. G-Wagon has redefined the SUV space with its unique design.',
//     createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
//     feature1: 'Passive Lane Keeping Assist',
//     feature2: 'Parking with 270 Camera',
//     feature3: 'Superior Package'
// },
// {
//     id: '5',
//     title: 'Mercedes G SUV',
//     class: 'G-Class - a new type of DNA',
//     Btype: 'SUV',
//     image: 'images/cards/benzG.jpeg',
//     content: 'The Design that speaks for itself, one of a kind with unique interiors. the DNA of an off-road vehicle with its iconic and virtually indestructible body. G-Wagon has redefined the SUV space with its unique design.',
//     createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
//     feature1: 'Passive Lane Keeping Assist',
//     feature2: 'Parking with 270 Camera',
//     feature3: 'Superior Package'
// },
// {
//     id: '6',
//     title: 'BMW X5',
//     class: 'X5-Class - a new type of DNA',
//     Btype: 'SUV',
//     image: 'images/cards/bmw.jpeg',
//     content: 'The Design that speaks for itself, one of a kind with unique interiors. the DNA of an off-road vehicle with its iconic and virtually indestructible body. G-Wagon has redefined the SUV space with its unique design.',
//     createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT),
//     feature1: 'Passive Lane Keeping Assist',
//     feature2: 'Parking with 270 Camera',
//     feature3: 'Superior Package'
// },
// ];


// exports.find = () => trades;

// exports.findBtype = () => Btype;

// exports.findById = id => trades.find(trade=>trade.id === id);

// exports.save = function(trade){
//     trade.id = uuidv4();
//     if(trade.image === ""){
//         trade.image = "images/cards/bmw.jpeg";
//     }
//     else{
//         trade.image = "images/cards/" + trade.image;
//     }
//     if(trade.feature1 === ""){
//         trade.feature1 = "Features details not avaliable";
//     }
//     if (Btype.indexOf(trade.Btype) === -1) {
//         Btype.push(trade.Btype);
//     }
//     trade.createdAt = DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
//     trades.push(trade);
// };

// exports.updateById = function(id, newTrade){
//     let trade = trades.find(trade=>trade.id === id);

//     if(trade){
//         trade.title = newTrade.title;
//         trade.Btype = newTrade.Btype;
//         trade.class = newTrade.class;
//         trade.image = newTrade.image;
//         trade.feature1 = newTrade.feature1;
//         trade.feature2 = newTrade.feature2;
//         trade.feature3 = newTrade.feature3;
//         trade.content = newTrade.content;

//         Btype.forEach(type => {
//             if(!trades.some(trade => trade.Btype === type)){
//                 let BtypeIndex = Btype.indexOf(type);
//                 if (BtypeIndex !== -1) {
//                     Btype.splice(BtypeIndex, 1);
//                 }
//             }
//         });
//         return true;
//     } else{
//         return false;
//     }
// }

// exports.deleteById = function(id){
//     let index = trades.findIndex(trade => trade.id === id);
//     if(index !== -1){
//         let tradeDeleted = trades.splice(index, 1);
//         if (!trades.some(trade => trade.Btype === tradeDeleted[0].Btype)) {
//             let BtypeIndex = Btype.indexOf(tradeDeleted[0].Btype);
//             if (BtypeIndex !== -1) {
//                 Btype.splice(BtypeIndex, 1);
//             }
//         }
//         return true;
//     } else{
//         return false;
//     }
// }





// ///////////////////////////////////////////////


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tradeSchema = new Schema({
    title: {type: String, required: [true, 'Car model is required']},
    class: {type: String, required: [true, 'Car class is required']},
    Btype: {type: String, required: [true, 'Car BodyType is required']},
    image: {type: String, required: [true, 'Car image is required']},
    content: {type: String, required: [true, 'Car description is required'], minLength: [10, 'The description should be atleast 10 characters']},
    feature1: {type: String, required: [true, 'Car main feature is required']},
    feature2: {type: String, required: [true, 'Car secondary feature is required']},
    feature3: {type: String, required: [true, 'Car third feature is required']},
    author: {type: Schema.Types.ObjectId, ref:'User'},
},
{timestamps: true}
);

//collection name is trades in the database
module.exports = mongoose.model('Trade',tradeSchema);