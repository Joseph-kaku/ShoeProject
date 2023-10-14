mongodb = require('../db/connect')
const ObjectId = require('mongodb').ObjectId;

const getAllOwners = async (req, res) => {
    const result = await mongodb.getDb().db().collection('owner').find();
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    });
};

const getSingleOwner = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('owner').find({ _id: userId });
    result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
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

const updateOwner = async (req, res) => {
    const userId = new ObjectId(req.params.id);
    // be aware of updateOne if you only want to update specific fields
    const contact = {
        person: req.body.person,
        collector: req.body.collector
    };
    const response = await mongodb
    .getDb()
    .db()
    .collection('owner')
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
    const response = await mongodb.getDb().db().collection('owner').deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.deletedCount > 0) {
    res.status(204).send();
    } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the contact.');
    }
};

module.exports = {
    getAllOwners,
    addNewOwner,
    getSingleOwner,
    updateOwner
}; 