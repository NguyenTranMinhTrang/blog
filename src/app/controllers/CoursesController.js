const Course = require('../modules/courses');
const { singleObject } = require('../../util/handleData');

class CoursesController {
    // GET /courses/...
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('showCourses', { course: singleObject(course) });
            })
            .catch((err) => {
                next(err);
            })

    }
}

module.exports = new CoursesController;