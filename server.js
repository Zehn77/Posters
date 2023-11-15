const express = require('express')
const path = require('path')
const dotenv = require('dotenv')
const exphbs = require('express-handlebars')
const homeRoutes = require('./routes/homeRoutes')
const posterRoutes = require('./routes/posterRoutes')

// Env variable
dotenv.config()

const app = express()

//Body parser
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

//Initialize template engine (Hanglebars)
app.engine('.hbs', exphbs.engine({extname: '.hbs'}))
app.set('view engine', '.hbs')

// Initialize Routes
app.use('/', homeRoutes)
app.use('/posters', posterRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})