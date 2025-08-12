const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const usersRouter = require('./routes/users');
const reportsRouter = require('./routes/reports');
const lostPetsRouter = require('./routes/lostpets');
const adoptionsRouter = require('./routes/adoptions');
const animalsRouter = require('./routes/animals');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', usersRouter);
app.use('/api/reports', reportsRouter);
app.use('/api/lostpets', lostPetsRouter);
app.use('/api/adoptions', adoptionsRouter);
app.use('/api/animals', animalsRouter);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => res.json({ message: 'Stray Animal Welfare API - visit /api-docs for docs' }));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Something went wrong, please try again later.' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Swagger UI available at http://localhost:${PORT}/api-docs`);
});