const express = require('express');
const router = express.Router();
const JSONdb = require('simple-json-db');
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
router.get('/', (req, res) => {
    // read file from simmple json db
    const jsonObjectFile = new JSONdb('onj.json', {
        syncOnWrite: true,
    });
    // res.send(jsonObjectFile);

    // insert data into jsonObjectFile using simple json db
    //    syncOnWrite function use to insert data into json file

    // sync on write function

    jsonObjectFile.set('person', person);

    res.send(jsonObjectFile);

    // how to store key inside a jsonObjectFile







    // how to use db.sync function to insert data into json file

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
