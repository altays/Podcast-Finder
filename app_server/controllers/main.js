// Get Homepage

const index = (req, res, next) => {
    res.render('index', {title: 'Podcast Search'})
}

const about = (req, res, next) => {
    res.render('about', {title: 'About'})
}

module.exports = {
    index,
    about
}