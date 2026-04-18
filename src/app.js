const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
// Rotas da API
app.use('/api/auth', require('./routes/auth'));
app.use('/api/artigos', require('./routes/artigos'));
app.use('/api/artigos', require('./routes/comentarios'));
app.use('/api/comentarios', require('./routes/comentarios'));
// Rota não encontrada
app.use((req, res) => {
 res.status(404).json({ erro: 'Rota não encontrada' });
});
// Middleware global de erros
app.use(require('./middleware/errorHandler'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Servidor a correr na porta ${PORT}`);
 });
