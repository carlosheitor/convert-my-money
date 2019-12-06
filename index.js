const express = require('express');
const app = express();
const path = require('path');

const convert = require('./lib/convert');

const port = process.env.port || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/cotacao', (req, res) => {
    const { cotacao, quantidade } = req.query;
    if (cotacao && quantidade) {
        const conversao = convert.convert(cotacao, quantidade);
    
        res.render('cotacao', {
            err: false,
            cotacao: convert.toMoney(cotacao),
            quantidade: convert.toMoney(quantidade),
            conversao: convert.toMoney(conversao)
        });
    } else {
        res.render('cotacao', {
            err: 'Valores inválidos'
        });
    }   
});

app.listen(port, err => {
    if (err) {
        console.log('Algo deu muito errado!!');
    } else {
        console.log('ConvertMyMoney no arrrrrrrr...')
    }
})