const request = require('request')
const express = require('express')
const app = express()

const apiKey = '1b8975e74fb3966da59cd7d3b51ccbf8';

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    // res.send('Server Made')
    res.render('index', { weather: null, error: null })
    // rendring through `ejs`
})

app.post('/', (req, res) => {

    // Now, here we will copy code from the `nodeConsoleWeatheApp` to make a request to open-weather-map
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    // now making request here :->

    request(url, function (err, response, body) {
        if (err) {
            // case1
            res.render('index', { weather: null, error: 'Error, please try again later.' })
        }
        else {
            let weather = JSON.parse(body)
            if (weather.main == undefined) {
                // case2
                res.render('index', { weather: null, error: 'Error, Input isn’t a valid city.' })
            }
            else {
                // case3
                let status = `It's ${weather.main.temp} degrees in ${weather.name}!`;
                res.render('index', { weather: status, error: null })
            }
        }
    });

})

app.listen(3000, () => {
    console.log('Running on : http://localhost:3000/')
})