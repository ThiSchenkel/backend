const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongoose_populate', { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('DB mongoose_populate connecté');
})