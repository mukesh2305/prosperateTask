const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    _id: {
        $oid: String,
    },
    id: String,
    object_full_name: String,
    details: {
        object_name: String,
        object_type: String,
        datasource: String,
        location: String,
        ds_type: String,
        attributes: [],
        no_attributes: Number,
        open_access: String,
        create_date: String,
        modified_date: String,
        object_owner: [
            {
                type: String,
            },
        ],
        total_pii: Number,
        id_source: [],
        country: [],
        policy_violated: [
            {
                type: String,
            }
        ]
    }
}
);

module.exports = mongoose.model("File", fileSchema);