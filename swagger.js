const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Stray Animal Welfare API',
      version: '1.0.0',
      description: 'In-memory API implementation based on API_CONTRACT.md'
    },
    servers: [{ url: 'http://localhost:3000' }]
  },
  apis: ['./routes/*.js']
};

module.exports = swaggerJSDoc(options);