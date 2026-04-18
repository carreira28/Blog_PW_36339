const mongoose = require('mongoose');
const artigoSchema = new mongoose.Schema({
 titulo: { type: String, required: true, trim: true },
 conteudo: { type: String, required: true },
 categoria: { type: String, required: true,
 enum: ['tecnologia','ciência','desporto','cultura','outro'] },
 autor: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Utilizador',
 required: true
 },
 publicado: { type: Boolean, default: false },
 imagem: { type: String },
}, { timestamps: true });
module.exports = mongoose.model('Artigo', artigoSchema);
const mongoose = require('mongoose');
const comentarioSchema = new mongoose.Schema({
 conteudo: { type: String, required: true, trim: true },
 autor: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Utilizador',
 required: true
 },
 artigo: {
 type: mongoose.Schema.Types.ObjectId,
 ref: 'Artigo',
 required: true
 },
}, { timestamps: true });
module.exports = mongoose.model('Comentario', comentarioSchema);
