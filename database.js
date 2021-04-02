const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost:27017/finalExam'
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