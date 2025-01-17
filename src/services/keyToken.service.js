const { token } = require('morgan');
const keyTokenModel = require('../models/keyToken.model');
const { Types } = require('mongoose')

class  KeyTokenService {
    static createKeyToken = async ({ userId, publicKey, privateKey, refreshToken }) => {
        try {
            // level 0
            // const tokens = await keyTokenModel.create({
            //     user: userId,
            //     publicKey,
            //     privateKey
            // })

            // return tokens ? tokens.publicKey : null

            //level xxx
            const filter = { user: userId }, updates = {
                publicKey, privateKey, refreshTokensUsed: [], refreshToken,
            }, options = { upsert: true, new: true }

            const tokens = await keyTokenModel.findOneAndUpdate(filter, updates, options)
            console.log('Token:',tokens)
            return tokens ? tokens.publicKey : null

        } catch (error) {
            return error
        }

    }

    static findByUserId = async( userId ) => {
        return await keyTokenModel.findOne({user: new Types.ObjectId(userId)})
    }

    static removeKeyById =  async(id) => {
        return await keyTokenModel.deleteOne({_id:id})
    }
}

module.exports = KeyTokenService;