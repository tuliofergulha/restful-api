'use restrict'

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test-api', {useNewUrlParser: true, useUnifiedTopology: true});
