const mongoose = require("mongoose")
const { Schema } = mongoose;

const constructionSchema = new Schema({
    constructionType: String,
    property: String,
    state: String,
    neighborhood: String
})

mongoose.model("constructionTypes", constructionSchema)