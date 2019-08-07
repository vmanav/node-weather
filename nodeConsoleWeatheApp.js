// This is a `request` based app, run from console to get the weather specifed in `city` variable in code.
// To Run:->
// 1. set the qury in `city`
// 2. node index.js

let request = require('request');

let apiKey = '1b8975e74fb3966da59cd7d3b51ccbf8';
let city = 'DELHI';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

// default temprature unit is `Kelvin`
// units=metric for temprature in celcuis
request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
    let weather =JSON.parse(body)
    console.log('-------------------');
    console.log(weather);
    let msg= `Weather Status for ${weather.name} : ${weather.main.temp}`
    console.log(msg)
  }
});