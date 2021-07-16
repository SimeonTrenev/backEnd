const mongoose = require('mongoose');
const dbUrl = 'mongodb+srv://admin:12345@myfirstcluster.zbh03.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const dbConnectionString = dbUrl

mongoose.Promise = global.Promise;

const dbConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
   
};

module.exports = () => {
    return mongoose.connect(dbConnectionString, dbConnectionOptions)
}