const mongoose = require('mongoose');

mongoose.connect(process.env.MONDOG_URI || 'mongod://localhost/socialmedia', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});

module.exports = mongoose.connection;