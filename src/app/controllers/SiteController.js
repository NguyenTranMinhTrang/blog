const Course = require('../modules/courses');
const { multipleObject } = require('../../util/handleData');
class SiteController {
    home(req, res, next) {
        Course.find({}, function (err, courses) {
            if (!err) {
                res.render('home', { courses: multipleObject(courses) })
            }
            else {
                next(err);
            }
        });

        /* res.render('home'); */
    }

    search(req, res) {
        res.render('search');
    }

}

module.exports = new SiteController;