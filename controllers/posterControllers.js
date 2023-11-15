const { addNewPosterToDB, getAllPosters, getPosterById } = require('../db/posters')
const { v4 } = require('uuid')

//@route        GET /posters
//@desc         Get Posters Page
//@access       Public
const getPostersPage = (req, res) => {
    res.render('poster/posters', {
        title: 'Posters Page',
        url: process.env.URL
    })
}

//@route        GET /posters/add
//@desc         Get adding poster page
//@access       Private
const addNewPosterPage = (req, res) => {
    res.render('poster/add-poster', {
        title: `Yangi e'lon qo'shish`,
        url: process.env.URL
    })
}

const addNewPoster = async (req, res) => {
    const poster = {
        id: v4(),
        name: req.body.name,
        surname: req.body.surname,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }
    await addNewPosterToDB(poster)
    res.redirect('/')
}

const getAllPostersPage = async (req, res) => {
    res.send('Welcome to All posters page')
}

const getAllPostersData = async (req, res) => {
    const posters = await getAllPosters()
    res.json(posters)
}

//@route        GET /posters/:id
//@desc         Get one poster by id
//@access       Public
const getOnePoster = async (req, res) => {
    const poster = await getPosterById(req.params.id)
    // res.json(poster)
    console.log(poster)
    res.render('poster/one', {
        title: poster.title,
        url: process.env.URL,
        poster
    })
}

module.exports = {
    getPostersPage,
    addNewPosterPage,
    addNewPoster,
    getAllPostersPage,
    getAllPostersData,
    getOnePoster
}