mongodb = require('../db/connect')
const ObjectId = require('mongodb').ObjectId;

const getAllOwners = async (req, res) => {
    const result = await mongodb.getDb().db().collection('owner').find();
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    });
};

const addNewOwner = async (req, res) => {
    const newOwner = {
        person: req.body.person,
        collector: req.body.collector,
    };
    const response = await mongodb.getDb().db().collection('owner').insertOne(newOwner);
    if (response.acknowledged) {
        res.status(201).json(response);
    } else {
        res.status(500).json(response.error || 'Some error occurred while creating the contact.');
    }
}

module.exports = {
    getAllOwners,
    addNewOwner
}; 