const express = require('express');
const pdfRoutes = require('./routes/pdfRoutes'); // Importe as rotas do PDF



const app = express();

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.get('/about', (req, res) => {
    res.send('Página Sobre');
});

const PORT = 3456; // Porta que o servidor irá escutar

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.use('/pdf', pdfRoutes); // Use as rotas do PDF
