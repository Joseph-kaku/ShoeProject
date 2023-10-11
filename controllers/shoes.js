mongodb = require('../db/connect')
const ObjectId = require('mongodb').ObjectId;

const getAllShoes = async (req, res) => {
    const result = await mongodb.getDb().db().collection('shoes').find();
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    });
};

const addNewShoe = async (req, res) => {
    const newShoe = {
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color,
        secondary_color: req.body.secondary_color,
        size: req.body.size,
        lace_color: req.body.lace_color,
        price: req.body.price,
        logo_name: req.body.logo_name
    };
    const response = await mongodb.getDb().db().collection('shoes').insertOne(newShoe);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
}



module.exports = {
    getAllShoes,
    addNewShoe
}; 