const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'))

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
const User = require('./routes/user.route');
const Post = require('./routes/post.route');

app.use('/api/v1/user', User);
app.use('/api/v1/post', Post);
 
const port = process.env.PORT || 5000;

app.listen(port,
    () => console.log(`Watching the magic happen on port ${port}`)
);