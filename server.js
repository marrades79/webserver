const express = require('express')
const app = express()

const hbs = require('hbs');

require('./hbs/helpers/helpers');

hbs.registerPartials(__dirname + '/views/parciales', function(err) {});



app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'carlos'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        nombre: 'carlos'
    });
});

/*app.get('/data', (req, res) => {

    res.send('Hola Data')
});*/


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`)
});