const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Courses = new Schema({
    name: String,
    description: String,
    image: String,
    slug: String,
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Courses);