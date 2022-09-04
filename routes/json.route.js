const express = require('express');
const router = express.Router();
const jsonfile = require('jsonfile');
const objects = require('../object_collection_stats.json');
const { randomUUID } = require('crypto')
const { PromisePool } = require('@supercharge/promise-pool');
const fileModel = require('../models/file.model');
const fs = require('fs-extra');


// const { jsonObjectFile } = require('../object_collection_stats.json')
router.get('/', async (req, res) => {
    // read json file
    // jsonfile.readFile('./onj.json', function (err, obj) {
    //     if (err) {
    //         console.log(err.message);
    //     } else {
    //         res.send(obj);
    //     }
    // });


    for (let index = 0; index < 5; index++) {

        // await PromisePool.for(objects).process(async (object) => {
        // do something with person
        var file = `${index}.json`
        var desiredMode = 0o2775;

        objects.forEach((object) => {
            object.id = randomUUID();
            object.object_full_name = object.object_full_name.split('.')[0] + " " + randomUUID() + '.' + object.object_full_name.split('.')[1];
            object.details.object_name = object.object_full_name.split('/').pop();

            const options = {
                spaces: 4,
                flag: 'a',
                EOL: '\r\n',
            }
            jsonfile.writeFile(file, object, options, function (err) {
                if (err) console.error(err.message);

            });

        })

    }


});




module.exports = router;
















