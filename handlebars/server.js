const express = require('express')

const app = express()
const handlebars = require('express-handlebars')

app.engine(
    "hbs",
     handlebars.engine({
        extname: ".hbs",
        defaultLayout: 'index.hbs',
        layourtsDir: __dirname + "/views/layouts",
        partialsDir: __dirname + "/views/partials"
        })
);
                              
const puerto = 8080;

app.set('view engine','hbs')
app.set('views', './views')

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))


let productos = []

const PORT= 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => `se ha producido el siguiente error al montar el servidor ${error}`)



app.get('/productos', (req,res) => {
    console.log(req.body);
    res.render('productos', {productos})
})

app.post('/productos', (req,res) => {
    let claseliteral = {}
    claseliteral.nombre = req.body.nombre
    claseliteral.precio = req.body.precio
    claseliteral.thumbnail = req.body.thumbnail
    productos.push(claseliteral)
    console.log(productos)
    res.redirect('/productos')

})