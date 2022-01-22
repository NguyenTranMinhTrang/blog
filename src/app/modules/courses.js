const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const softDelete = require('mongoose-delete');
mongoose.plugin(slug);

const Schema = mongoose.Schema;

const Courses = new Schema({
    name: String,
    description: String,
    image: String,
    slug: { type: String, slug: "name", unique: true },
}, { timestamps: true });


Courses.plugin(softDelete, { overrideMethods: 'all', deletedAt: true });

module.exports = mongoose.model('Course', Courses);