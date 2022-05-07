const express = require('express');
const router = express.Router();
const Database = require('easy-json-database');
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
    // read file using easy json db
    const db = new Database('onj.json', {
        snapshot: true,
        enabled: true,
        interval: 24 * 60 * 60 * 1000,
        folder: './backup',
    });

    db.set('person', person);
    db.all();
    res.send(db);
});


module.exports = router;
