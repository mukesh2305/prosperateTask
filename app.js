const express = require('express');
const app = express();
const indexRoute = require('./routes/index.route');
const jsonRoute = require('./routes/json.route');
const simpleJsonRoute = require('./routes/simplejson');
const nodeJsonDbRoute = require('./routes/node_json_db.route');
require('./config/db.js')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', indexRoute)
app.use('/json', jsonRoute)
app.use('/simplejson', simpleJsonRoute)
app.use('/nodejsondb', nodeJsonDbRoute)


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
);
