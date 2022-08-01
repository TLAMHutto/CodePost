const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: String,
    discription: String,
});
module.exports = mongoose.model('Post', postSchema);