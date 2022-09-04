const express = require('express');
const router = express.Router();
const jsonfile = require('jsonfile');
const { randomUUID } = require('crypto')
// const { data } = require('../onj');
// const db = require('../user.db')
var datastore = require('nedb'),
    db = new datastore({ filename: 'user.db', autoload: true });
// db = new datastore('../onj.json');
const person = [
    {
        "name": "John",
        "age": 30,
        "cars": [
            "Ford",
            "BMW",
            "Fiat"
        ]
    }, {
        "name": "Jane",
        "age": 32,
        "cars": [
            "Yugo",
            "BMW",
            "VW"

        ]
    }

]
// const { jsonObjectFile } = require('../object_collection_stats.json')
router.get('/', (req, res) => {


    db.find({}, (err, docs) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(docs);
        }
    });

    // db.insert(person, function (err, newDocs) {
    //     console.log(newDocs);
    //     res.send(newDocs);
    //     // Two documents were inserted in the database
    //     // newDocs is an array with these documents, augmented with their _id
    // });
});














// router.get('/', (req, res) => {
//     const file = '../onj.json';
//     jsonfile.readFile(file, function (err, obj) {
//         if (err) {
//             console.log(err.message);
//         } else {
//             res.send(obj);
//         }
//     })

// });

// best npm libary to create json data file and read it and also create records in it




module.exports = router;
