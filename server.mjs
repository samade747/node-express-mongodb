// console.log('hellow world server side js ')

import express from "express";
import cors from 'cors';


const app = express()
app.use(cors())

// get 
// server se kuch lana

// post 
// server ko kuch bhej rha haoin 

// put 
// edit, exsiiting profile ko edit

// delete 
// server par profile delete karne ja rha hoin 



// app.get('/', (req, res) => {
//     console.log('hello world!', new Date());
//     res.send('hello wordl' + new Date());
// })

// app.get('/profile', (req, res) => {
//     console.log('this is profile!', new Date());
//     res.send('this is profile' + new Date());
// })

// app.get('/home', (req, res) => {
//     console.log('this is profile!', new Date());
//     res.send('this is profile' + new Date());
// })

app.get('/weather/:cityName', (req, res) => {
    console.log('this is weather data!', new Date());

    let weatherData = {
        karachi: {
        city: 'Karachi',
        temInC: 30,
        humdity: 56,
        high: 32,
        low: 28     
        },

        london: {
        city: 'Karachi',
        temInC: 30,
        humdity: 56,
        high: 32,
        low: 28                 
        }
    }
    let userInputCityName = req.params.cityName.toLowerCase();

    let weatherDataToSend = weatherData[userInputCityName]

    if(weatherDataToSend){
        res.send(weatherDataToSend)
    } else{
        res
        .status(404)
         .send(`weather data is not available for ${req.params.cityName}`);
    }
    
    
})


const PORT = process.env.PORT || 5500;
app.listen(PORT, () =>{
    console.log(`example app listening on port ${PORT}`)
    
})