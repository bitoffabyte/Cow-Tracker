const express = require('express');
const firebase = require('firebase');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

firebase.initializeApp({
    apiKey: 'AIzaSyBow2C4TDk_Q02XLWr0RagvsD5DEfOrG9Y',
    authDomain: 'moometer-26596.firebaseapp.com',
    databaseURL: 'https://moometer-26596-default-rtdb.firebaseio.com/',
    projectId: 'moometer-26596',
    storageBucket: 'moometer-26596.appspot.com',
    messagingSenderId: '771220439692',
    appId: '1:771220439692:web:c2113cc114239f4942f1a9',
    measurementId: 'G-DBNTNZ70E9',
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/', (req, res) => {
    const {lat, lon, heart, temp, id} = req.body
    firebase.database().ref('cow/'+id).set({
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