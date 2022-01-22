const Course = require('../modules/courses');
const { multipleObject } = require('../../util/handleData');
const courses = require('../modules/courses');

class MeController {

    // GET me/store/courses
    storedCourse(req, res, next) {

        Promise.all([Course.find({}), Course.countDocumentsDeleted()])
            .then(([courses, deletedCourses]) => {
                res.render('stored-courses', {
                    deletedCourses,
                    courses: multipleObject(courses)
                })
            })
            .catch(next);
    }
    // GET me/trash/courses
    trashCourse(req, res, next) {
        Course.findDeleted({}, function (err, courses) {
            if (!err) {
                res.render('trashCourses', { courses: multipleObject(courses) })
            }
            else {
                next(err);
            }
        });
    }
}

module.exports = new MeController;