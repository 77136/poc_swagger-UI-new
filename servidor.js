const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const fs = require('fs');

const app = express();
const port = 3000;

// Supondo que seu arquivo exemplo_throttling.json esteja na raiz do projeto
// Se o arquivo for YAML, use YAML.load ao invés de JSON.parse
const swaggerDocument = JSON.parse(fs.readFileSync('./exemplo_throttling.json', 'utf8'));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});