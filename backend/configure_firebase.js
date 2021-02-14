const express = require('express');
const firebase = require('firebase');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

firebase.initializeApp({
    apiKey: 'AIzaSyC0QtZSgpCO_rDGC_zyZ4pJpq3H9w8ZjJo',
    authDomain: 'robo-hack.firebaseapp.com',
    projectId: 'robo-hack',
    storageBucket: 'robo-hack.appspot.com',
    messagingSenderId: '566138567854',
    appId: '1:566138567854:web:52945e9483157a8a2f813f',
    measurementId: 'G-LTR52X27YQ',
}); 

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/', (req, res) => {
    const {lat, lon, heart, temp, id} = req.body
    firebase.database().ref('cows/'+id).set({
        lat,
        lon,
        heart,
        temp,
        id,
    })

    console.log(lat, lon);
    res.send('hello there');
});

app.listen(8888, () => console.log('listening on port 8888'));