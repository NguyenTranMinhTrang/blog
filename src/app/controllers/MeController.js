const Course = require('../modules/courses');
const { multipleObject } = require('../../util/handleData');

class MeController {

    // GET me/store/courses
    storedCourse(req, res, next) {
        Course.find({}, function (err, courses) {
            if (!err) {
                res.render('stored-courses', { courses: multipleObject(courses) })
            }
            else {
                next(err);
            }
        });
    }
}

module.exports = new MeController;