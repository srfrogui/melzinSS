const express = require('express');
const router = express.Router();
const PDFDocument = require('pdfkit');

// Rota para gerar e entregar PDF de etiqueta
router.get('/etiqueta/:pedidoId', (req, res) => {
  const pedidoId = req.params.pedidoId;

  const doc = new PDFDocument();
  // Personalize o conteúdo da etiqueta
  doc.text(`Etiqueta do Pedido ${pedidoId}`);

  // Configurações para entregar o PDF
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `inline; filename=etiqueta_pedido_${pedidoId}.pdf`);

  // Pipe o conteúdo do PDF para a resposta
  doc.pipe(res);
  doc.end();
});

// Rota para gerar e entregar PDF de nota
router.get('/nota/:pedidoId', (req, res) => {
  const pedidoId = req.params.pedidoId;

  const doc = new PDFDocument();
  // Personalize o conteúdo da nota
  doc.text(`Nota do Pedido ${pedidoId}`);

  // Configurações para entregar o PDF
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', `inline; filename=nota_pedido_${pedidoId}.pdf`);

  // Pipe o conteúdo do PDF para a resposta
  doc.pipe(res);
  doc.end();
});

module.exports = router;
