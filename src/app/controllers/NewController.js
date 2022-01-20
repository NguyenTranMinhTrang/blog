class NewController {
    // [GET] news
    index(req, res) {
        res.render('news');
    }

    show(reg, res) {
        res.send('Details');
    }
}

module.exports = new NewController;