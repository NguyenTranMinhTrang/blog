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

    // GET /course/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => res.render('edit', { course: singleObject(course) }))
            .catch(next)
    }

    // PUT /course/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/store/courses'))
            .catch(next)
    }

    // DELETE /course/:id 
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // PATCH /:id/restore 
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }
    // DELETE /course/:id/force 
    force(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new CoursesController;