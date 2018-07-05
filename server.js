const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const mongoURI = require('./config/config').localMongoURI;
// const mongoURI = 'mongodb://kushpatel97:kushpatel97@ds227119.mlab.com:27119/itinerary';



mongoose.connect(mongoURI)
    .then(
        () => console.log('DB CONNECTED!')
    )
    .catch(
        (err) => console.log(err)
    );

mongoose.connection.on('connected', () => {
    console.log('Connected to MongoDB')
});


//importing routes
const user = require('./routes/user.route');
app.use('/api/v1/user', user);
 
const port = process.env.PORT || 5000;

app.listen(port,
    () => console.log(`Server started on port ${port}`)
);