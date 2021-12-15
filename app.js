const express = require('express');
const path = require('path');
const app = express();
const ejsMate = require('ejs-mate');

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

app.get('/', (req, res) => {
    res.render('home');
});



app.listen(3000, () => {
    console.log('Serving on port 3000');
})