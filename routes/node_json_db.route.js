const express = require('express');
const router = express.Router();
const { randomUUID } = require('crypto');
const fs = require('fs-extra');
// const jsonfile = require('jsonfile');
const objects = require('../object_collection_stats.json');
const data_source = require('../file/dataSourceMain.json');
// console.log(objects.length);
// var object = require('../data_source_file.json');
const fsn = require('fs');

router.get('/length', (req, res) => {
    res.status(200).json({
        length: data_source.length
    });
});
const options = {
    spaces: 4,
    flag: 'a',
    EOL: '\r\n'
}

// store 1 to 20 in array 


// 20 item store in a source Array
// let source = [];
// source = data_source.slice(0, 20);
router.get('/file/new', (req, res) => {

    for (let index = 1981; index <= 2000; index++) {
        // let source_arr = source.slice(1 * index - 1, 1 * index);
        // console.log(source_arr);

        var dir = `./file/${index}.json`;

        fs.outputJson(
            dir,
            objects.map((object) => {
                object._id = undefined
                object.id = randomUUID();
                object.object_full_name = object.object_full_name.split('.')[0] + " " + randomUUID() + '.' + object.object_full_name.split('.')[1];
                object.details.object_name = object.object_full_name.split('/').pop();
                let num = index - 1
                object.details.datasource = data_source[num].ds_name;
                return object;
            }),
            options,
            function (err) {
                if (err) console.error(err.message);
            }
        );


    }

});

router.get('/datasource', async (req, res) => {


    var dir = `./file/dataSourceMain.json`;


    let arr = [];

    for (let i = 1501; i <= 2000; i++) arr.push(i);

    // "data_source_name": "DS-Nephos-TestBlobRemediationData",
    // "ds_name": "DS-Nephos-TestBlobRemediationData",
    // console.log(obj);


    let obj = arr.map((e, i) => {
        return {
            "additional_retention_policy_date": "2022-05-16",
            "ciso_name": "just_user",
            "ciso_email": "test1@prosperasoft.com",
            "company_code": "",
            "connected_to_thycotic": 0,
            "data_center_country": "just",
            "data_center_location": "just",
            "data_center_name": "just",
            "data_champion_email": "test1@prosperasoft.com",
            "data_champion_name": "just_user",
            "data_path_db_name": "sdfdsfdfdf/sdfdfdsf",
            "data_protection_officer_email": "test1@prosperasoft.com",
            "data_protection_officer_name": "just_user",
            "data_source_capacity": "Ahmedabad",
            "data_source_classification": "62d65c93630b44001d262e35",
            "data_source_country": "just",
            "data_source_id": "just123",
            "data_source_name": "DS-Nephos-TestBlobRemediationData" + e,
            "data_source_type": "NFS",
            "data_type": "Structured",
            "datasource_or_correlation": "No",
            "dgaas_license": "dfdfd",
            "ds_location_risk_count": "",
            "ds_name": "DS-Nephos-TestBlobRemediationData" + e,
            "ds_stage": "Approved for Scan",
            "enitySourceName": "",
            "frequency_of_scan": "Monthly",
            "group": "62b2b8f7019863001cfa77f6",
            "group_name": "new_just",
            "hostname": "1234",
            "ip_address": "11.23.0.4",
            "monitor_scan_profile_id": "sdfdsfdsf",
            "os_software_version": "os/sdfdfdf",
            "owners": [],
            "policies": [],
            "regulations_to_check_for": "CCPA",
            "req_created_at": "2022-05-26T14:25:16.051Z",
            "retention_policy_date": "2 Days",
            "retention_required": 0,
            "scan_location": "dsdsds",
            "scan_restrictions": "dsfdsfdfds",
            "scanner_group": "sdfdsfd",
            "send_remediation_to": "sfdsfds",
            "status": "Submitted for Rescan",
            "subgroup": "62b2b907019863001cfa77f7",
            "submission_id": "628f8dcc9ac5774870a2dec2",
            "technical_owner_email": "test.com",
            "technical_owner_name": "just_user",
            "thycotic_secret_folder_number": "",
            "thycotic_secret_number": "",
            "usedForEntitySource": false,
            "submittedBy": "628f3fa04a0dd520ed3b552b",
            "ob_request_id": "628f8dcc9ac5774870a2dec3"
        }
    })
    fs.outputJson(
        dir,
        obj,
        options,
        function (err) {
            if (err) console.error(err.message);
        }
    )



});

router.get('/file/create', (req, res) => {
    for (let index = 1; index <= 2000; index++) {
        // var dir = `./file/${dataSource}.json`;
        var dir = `./file/${index}.json`;

        fsn.closeSync(fsn.openSync(dir, 'w'));
    }

});

module.exports = router;
