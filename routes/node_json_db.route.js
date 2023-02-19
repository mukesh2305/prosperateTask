// generate Object_colletion_stats with the use of datasource.js
// -------------------------------------------------------------------------------------------


const express = require('express');
const async = require('async');
const router = express.Router();
const { randomBytes } = require('crypto');
const fs = require('fs-extra');
const objects = require('../object_collection_stats.json');
const data_source = require('../file/dataSourceMain.json');
const data_source_collection = require('../file/datasources_collection_stats.json');
const dsname = require('../file/dataSource.json');
const path = require('path');
const fsn = require('fs');
const { Collection } = require('mongoose');

router.get('/length', (req, res) => {
    res.status(200).json({
        // id : randomBytes(12).toString('hex'),
        // path : importCollection,
        // ds_length: data_source_new_length.length,
        // object_length : objects.length,
    });
});
const options = {
    spaces: 4,
    flag: 'w',
    EOL: '\r\n'
}

// store 1 to 20 in array 



router.get('/file/new',async (req, res) => {
    for (let index = 198; index <= 200; index++) {
        var dir = `./file/collection_file/1-200_collection_ds/object_collection_stats_ds-nephos-testblobremediationdata${index}.json`;
        fs.outputJson(
			dir,
			objects.map((object) => {
				const fileExtension = object.object_full_name.match(/\.[^.]+$/)[0];
				const randomValue = randomBytes(12).toString('hex');
				let id = randomValue;
				// let object_full_name = object.object_full_name.split('.')[0] + "-" + randomBytes(12).toString('hex') + '.' + object.object_full_name.split('.')[1];
				// let object_name = object_full_name.split('/').pop();
				let object_full_name = `${object.object_full_name.split('.')[0]}-${randomValue}${fileExtension}`;
				let object_name = path.basename(object_full_name);
				let num = index - 1;
				let ds_name = data_source[num].ds_name;
				let attributes = ['Email', 'IBAN', 'LineageGuid', 'UK NINo', 'US SSN', 'UK IBAN'];

				object._id = undefined;
				object.id = id;
				object.object_full_name = object_full_name;
				object.details.object_name = object_name;
				object.details.datasource = ds_name;
				object.details.attributes = attributes;
				return object;
			}),
			options,
			function (err) {
				if (err)
					console.error(err.message);
			}
		);
    }

});


  
  




router.get('/datasource', async (req, res) => {
    var dir = `./file/dataSource_newMain.json`;
    let start , end;
    let arr_obj = [];
    for(let k = 10; k <= 10; k++) {
        start = 1801, end = 2000;
        for (let i = start; i <= end; i++) {
            let val = Object.assign({}, data_source_collection[k - 1]); // get the object from data_source_collection
            val.data_source_id = "DS-Nephos-TestBlobRemediationData" + i; // modify the values of the properties
            val.data_source_name = "DS-Nephos-TestBlobRemediationData" + i;
            val.user_friendly_data_source_name = "DS-Nephos-TestBlobRemediationData" + i;
            val.ds_name = "DS-Nephos-TestBlobRemediationData" + i;
            arr_obj.push(val); // store the modified object in the array
        }
        fs.outputJson(
            dir,
            arr_obj,
            options,
            function (err) {
                if (err) console.error(err.message);
            }
        )
    }
   

        
});

router.get('/file/create', (req, res) => {
        for (let index = 1; index <= 20; index++) {
        // var dir = `./file/${dataSource}.json`;
        // var dir = `./file/collection_file/object_collection_stats_${dsname[index].ds_name}.json`;
		var dir = `check/file-${index}.txt`;
        fsn.closeSync(fsn.openSync(dir, 'w'));
    }
    
});

router.get('/import', (req, res) => {
    for(let i = 1; i <= 1; i++){
        var dir = require(`../file/collection_file/1-200_collection_ds/object_collection_stats_DS-Nephos-TestBlobRemediationData${i}.json`);
        console.log(dir);
    }
    
});

router.get("/modifiedFiles", async (req, res) => {
  
    for (let index = 1; index <= 1; index++) {
        // var dir = `./file/collection_file/1-2000_collection_ds/object_collection_stats_DS-Nephos-TestBlobRemediationData${index}.json`;
        var dir = "object_collection_stats.json";

        // Read the JSON file
        let data = fs.readFileSync(dir, 'utf8');


        // Parse the JSON data
        let jsonData = JSON.parse(data);

        // Modify the data as desired
        jsonData.forEach(item => {
            // item.details.datasource =  `DS-Nephos-TestBlobRemediationData${index}`,
            item.details.attributes = ['Email', 'IBAN', 'LineageGuid', 'UK NINo', 'US SSN', 'UK IBAN'];
        });

        // Write the modified data back to the JSON file
        fs.writeFileSync(dir, JSON.stringify(jsonData, null, 4), "utf8");
        console.log('JSON file successfully updated!');
    }
    console.log("completed")
    res.send("completed successfully")
})

router.get("/modifiedFiles2", async (req, res) => {

// async function modifyJsonField(dir, field, newValue) {
    var dir = `./file/dummy`;
    const files = fs.readdirSync(dir);
    const jsonFiles = files.filter(file => path.extname(file) === '.json');
  console.log("jsonFiles+++++++++++", jsonFiles);
    for (const file of jsonFiles) {
        
      // Read the contents of the file
      const fileContents = fs.readFileSync(path.join(dir, file), 'utf8');
      
      // Parse the contents into a JavaScript object
      const data = JSON.parse(fileContents);
      
      // Modify the field in the object
      data.forEach(item => {
        item.details.attributes = ['Email', 'IBAN', 'LineageGuid', 'UK NINo', 'US SSN', 'UK IBAN'];
      });

      // Convert the object back into a JSON string
      const modifiedJson = JSON.stringify(data, null, 2);
      // Write the modified JSON string back to the file
      await fs.promises.writeFile(path.join(dir, file), modifiedJson, 'utf8');
    }

    console.log("completed")
    res.send("completed")
})


////////////////////////////////////////////////////////////
router.get("/modifiedFiles1", async (req, res) => {
// Read all files in the "just" folder
    let dir = 'file/collection_file/oldZip/201-400_collection_ds';
    fs.readdir(dir, (err, files) => {
        if (err) throw err;

    // Iterate through all files
        files.forEach(file => {
            // Check if the file is a JSON file
            if (file.endsWith('.json')) {
            // Read the JSON file
                fs.readFile(`${dir}/${file}`, 'utf8', (error, data) => {
                    if (error) throw error;

                    // Parse the JSON file
                    let json = JSON.parse(data);

                    // Modify the "attributes" key for all objects in the JSON file
                    json = json.map(item => {
                        if (item.details) {
                            item.details.attributes = [
                                'Email',
                                'IBAN',
                                'LineageGuid',
                                'UK NINo',
                                'US SSN',
                                'UK IBAN'
                            ];
                        }
                        return item;
                    });

                    // Write the modified JSON to the file
                    console.log("-- file --", file);
                    fs.writeFile(`${dir}/${file}`, JSON.stringify(json, null, 4), 'utf8', error => {
                        if (error) throw error;
                    });
                });
            }
        });
    });
    console.log("completed")
    res.end("completed")
})


module.exports = router;
