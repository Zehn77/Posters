//@route        GET /
//@desc         Get Home Page
//@access       Public
const getHomePage = (req, res) => {
    res.render('home', {
        title: 'Home Page',
        url: process.env.URL
    })
}

module.exports = {
    getHomePage
} 