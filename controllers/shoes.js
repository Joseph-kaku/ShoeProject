mongodb = require('../db/connect')
const ObjectId = require('mongodb').ObjectId;

const getAllShoes = async (req, res) => {
    const result = await mongodb.getDb().db().collection('shoes').find();
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    });
};

const getSingleShoe = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('shoes').find({ _id: userId });
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
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

const updateShoe = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const contact = {
        brand: req.body.brand,
        model: req.body.model,
        color: req.body.color,
        secondary_color: req.body.secondary_color,
        size: req.body.size,
        lace_color: req.body.lace_color,
        price: req.body.price,
        logo_name: req.body.logo_name
    };
    const response = await mongodb
    .getDb()
    .db()
    .collection('shoes')
    .replaceOne({ _id: userId }, contact);
    console.log(response);
    if (response.modifiedCount > 0) {
    res.status(204).send();
    } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
    }
};

const deleteContact = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('shoes').deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
    res.status(204).send();
    } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
};

module.exports = {
    getAllShoes,
    addNewShoe,
    getSingleShoe,
    updateShoe
}; 