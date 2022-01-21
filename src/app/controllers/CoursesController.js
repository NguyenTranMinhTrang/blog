const Course = require('../modules/courses');
const { singleObject } = require('../../util/handleData');

class CoursesController {
    // GET /courses/create
    create(req, res) {
        res.render('create')
    }

    // POST /courses/store
    store(req, res) {
        const course = new Course(req.body);
        course.save()
            .then(() => res.redirect('/'))
            .catch((err) => {

            })
    }

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