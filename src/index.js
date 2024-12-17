const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Swagger setup
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ticket Order System API',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};

const specs = swaggerJsdoc(options);

// Use Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

// Import routes
const routes = require('./routes');

// Redirect root URL to /home
app.get('/', (req, res) => {
  res.redirect('./api-docs');
});

// Use routes
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// Simple ping request
app.get('/ping', (req, res) => {
  res.send('pong');
});