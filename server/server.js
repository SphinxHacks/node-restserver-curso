require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());


app.get('/usuarios', (req, res) => {
    res.json('get Usuario')
});

app.post('/usuarios', (req, res) => {
    let body = req.body;


    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        })
    } else {
        res.json({
            persona: body
        });
    }
});

app.put('/usuarios/:id', (req, res) => {
    let id = req.params.id;
    res.json({
        id
    })
});

app.delete('/usuarios', (req, res) => {
    res.json('Delete Usuario')
});

app.listen(process.env.PORT, () =>
    console.log(`Escuchando puerto ${process.env.PORT}`));