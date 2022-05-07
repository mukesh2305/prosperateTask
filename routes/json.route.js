const express = require('express');
const router = express.Router();
const jsonfile = require('jsonfile');
const { randomUUID } = require('crypto')

const person =
{
    "_id": {
        "$oid": randomUUID()
    },
    "id": "6165859e2ffbab79d301cc94",
    "object_full_name": "bigid-test-ds/Age anything crime future until either.docx",
    "details": {
        "object_name": "Age anything crime future until either.docx",
        "object_type": "file",
        "datasource": "DS-Nephos-TestBlobRemediationData",
        "location": "",
        "ds_type": "azure-blob",
        "attributes": [
            "classifier.Email",
            "classifier.IBAN"
        ],
        "no_attributes": 2,
        "open_access": "",
        "create_date": "2021-10-12T12:54:54.021Z",
        "modified_date": "2021-10-11 14:55:39.000",
        "object_owner": [],
        "total_pii": 2,
        "id_source": [],
        "country": [],
        "policy_violated": [
            "remediation_test",
            "Public - P3 - NTLab - DPO5",
            "Azure Blob Rem - PX - NTLAb - DPXX"
        ]
    }
}
// const { jsonObjectFile } = require('../object_collection_stats.json')
router.get('/', (req, res) => {
    // read json file
    // jsonfile.readFile('./onj.json', function (err, obj) {
    //     if (err) {
    //         console.log(err.message);
    //     } else {
    //         res.send(obj);
    //     }
    // });

    // insert data into json file
    jsonfile.writeFile('./onj.json', person, { flag: 'a', spaces: 4, EOL: '\r\n' }, function (err) {
        if (err) {
            console.log(err.message);
        } else {
            res
            console.log('Successfully written to file');
        }
    });

    // how to insert object into json file


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
