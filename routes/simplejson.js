// ------------------------------- create files ------------------------------------------
const express = require('express');
const router = express.Router();
const JSONdb = require('simple-json-db');
const { randomUUID } = require('crypto')
const fs = require('fs')
const dsname = require('../file/dataSource.json')
// const fs = require('fs-extra');





router.get('/generate', (req, res) => {
    for (let index = 1; index <= 1; index++) {
        var dir = `./file/${dsname[index].ds_name}.json`;
        fs.closeSync(fs.openSync(dir, 'w'));
    }
});

module.exports = router;














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
