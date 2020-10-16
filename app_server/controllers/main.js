// Get Homepage

const index = (req, res, next) => {
    res.render('index', {title: 'Express'})
}

module.exports = {
    index
}