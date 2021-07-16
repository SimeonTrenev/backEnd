const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const { SALT_ROUNDS, SECRET } = require('../config');
const { Schema } = mongoose;

const userModel = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    }
});

userModel.pre('save', function(next){
    bcrypt.genSalt(SALT_ROUNDS)
        .then(salt => bcrypt.hash(this.password, salt))
        .then(hash => {
            this.password = hash;
            next()
        })
})

mongoose.model('User', userModel)