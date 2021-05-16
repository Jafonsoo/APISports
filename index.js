require("dotenv").config();

const express = require("express");

const mongoose = require("./database/index");

let routes = require("./routes");

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false })); 


const swaggerJSDoc = require('swagger-jsdoc'); 
const swaggerUi = require('swagger-ui-express'); 


const swaggerDefinition = {
  openapi: '3.0.0',
  
  info: {
    title: "API REST  CoronaSports",
    version: "1.0.0",
    description: " API com informação da dimensão do virus no mundo do desporto",
    license: {
      name: "Joao Aires e Marcelo Lopes",
      url: "https://github.com/.../"
    }
    
  },
};

const options = {
  swaggerDefinition,
 
  apis: ['./swagger/*.js']
};

const swaggerSpec = swaggerJSDoc(options);

app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



require('./routes/index')(app);


const port = process.env.PORT || 8002;


app.listen(port, () => {
  console.log(' Server is up and listening on port ' + port);
});
