const express = require('express')


const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

let productos = []

//--------------------------------------------

app.set('views', './views');
app.set('view engine', 'pug');

//--------------------------------------------
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

//--------------------------------------------
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))
