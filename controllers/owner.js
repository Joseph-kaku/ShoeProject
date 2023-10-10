mongodb = require('../db/connect')
const ObjectId = require('mongodb').ObjectId;

const getAllOwners = async (req, res) => {
    const result = await mongodb.getDb().db().collection('owner').find();
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    });
};


module.exports = {
    getAllOwners
}; 