const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Courses = new Schema({
    name: String,
    description: String,
    image: String,
    slug: { type: String, slug: "name" }
}, { timestamps: true });

module.exports = mongoose.model('Course', Courses);