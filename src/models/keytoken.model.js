const {Schema, model} = require('mongoose'); 
const { collection } = require('./shop.model');
const mongoose = require('mongoose');
const DOCUMENT_NAME = 'Key';
const COLLECTION_NAME = 'Keys';

// Declare the Schema of the Mongo model
var KeyTokenSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Shop'
      },
    publicKey:{
        type:String,
        required:true
    },
    privateKey:{
        type:String,
        required:true
    },
    refreshTokensUsed:{
        type:Array,
        default:[]
    },
    refreshToken:{
        type:String,
    }

} , {timestamps: true,
    collection: COLLECTION_NAME
});

//Export the model
module.exports = model(DOCUMENT_NAME, KeyTokenSchema);