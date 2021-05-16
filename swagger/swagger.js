/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 * 
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: objectId
 *           description: O ID do user.
 *           example: 6091316840c37846f8ed1a0f
 *         name:
 *           type: string
 *           description: O nome do user.
 *           example: user_admin
 *         email:
 *           type: string
 *           description: O e-mail do user.
 *           example: user@user.com
 * 
 *     RegisterUser:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: O nome de user.
 *           example: user_admin
 *         email:
 *           type: string
 *           description: O e-mail do user.
 *           example: user@user.com
 *         password:
 *           type: string
 *           description:  A password do user.
 *           example: user_password
 * 
 *     LoginUser:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: O e-mail do user.
 *           example: user@user.com
 *         password:
 *           type: string
 *           description: A password do user.
 *           example: user_password
 * 
 */


/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas: 
 *     NovosSports:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nome da pessoa no desporto.
 *           example: João
 *         nacionalidade:
 *           type: string
 *           description: A nacionalidade da pessoa no desporto.
 *           example: Portugues
 *         equipa:
 *           type: string
 *           description: Equipa da pessoa no desporto.
 *           example: Benfica
 *         funcao:
 *           type: string
 *           description: Função da pessoa no desporto.
 *           example: Jogador
 *         datacovid:
 *           type: string
 *           description: Data de infeção Covid.
 *           example: 12/7/2021
 *         estadoatual:
 *           type: string
 *           description: Estado atual da pessoa no desporto.
 *           example: Infetado
 * 
 *     PessoaDeDesporto:
 *       allOf:
 *         - type: object
 *           properties:
 *             _id:
 *               type: objectId
 *               description: O ID de tarefas.
 *               example: 6091316840c37846f8ed1a0f
 *         - $ref: '#/components/schemas/NovosSports'
 *
 * /user/register:
 *   post:
 *     tags: 
 *       - User Requests
 *     summary: Registe um user.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       200:
 *         description: Criou um user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 auth:
 *                   type: boolean
 *                   description: O valor booleano da autenticação.
 *                   example: true
 *                 token:
 *                   type: string
 *                   description: O valor jsonwebtoken.
 *                   example: eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiVmFnbmVyQm9tSmVzdXMiLCJVc2VybmFtZSI6IlZhZ25lciBCb20gSmVzdXMifQ.v4BcDDTFqMXhpi7ofKmhDLkkiiNtPXYlvZGgS8gU38M
 *
 * /user/login:
 *   post:
 *     tags: 
 *       - User Requests
 *     summary: Login.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginUser'
 *     responses:
 *       200:
 *         description: Logged in.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 auth:
 *                   type: boolean
 *                   description: The authentication boolean value.
 *                   example: true
 *                 token:
 *                   type: string
 *                   description: The jsonwebtoken value.
 *                   example: eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiVmFnbmVyQm9tSmVzdXMiLCJVc2VybmFtZSI6IlZhZ25lciBCb20gSmVzdXMifQ.v4BcDDTFqMXhpi7ofKmhDLkkiiNtPXYlvZGgS8gU38M
 * 
 *  @swagger
 * /user/isAuthorized:
 *   get:
 *     tags: 
 *       - User Requests
 *     summary: Verifique a autorização do user.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Verifique a autorização do user.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *
 * /sport/create:
 *   post:
 *     tags: 
 *       - Sports Requests
 *     summary: Crie uma pessoa no desporto.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *              $ref: '#/components/schemas/NovosSports'
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Crie uma pessoa no desporto.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Todo created.
 *       
 * /sport/list:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Lista dos Pessoas nos Desportos.
 *     description: Retorna a lista de Pessoas nos Desportos
 *     responses:
 *       200:
 *         description: OK.
 *
 * /sport/search/datacovid:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Consulte aqui todos os dados de uma respetiva Data de infeção de uma pessoa no desporto.
 *     description: Os dados podem ser obtidos com base a consulta realizada
 *     parameters:
 *       - in: query
 *         required: false
 *         name: datacovid
 *         description: Especifique a data no formato dd-mm-yy.
 *         example: 01-04-2019
 *     responses:
 *       200:
 *         description: A lista das pessoas no desporto.
 * 
 * 
 * /sport/search/nacionalidade:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Consulte aqui todos os dados de uma respetiva Nacionalidade de uma pessoa no desporto.
 *     description: Os dados podem ser obtidos com base a consulta realizada
 *     parameters:
 *       - in: query
 *         required: false
 *         name: nacionalidade
 *         description: Especifique uma nacionalidade.
 *         example: Portugues
 *         schema:
 *             enum: ["Portuguesa", "Inglesa", "Espanhola"]
 *     responses:
 *       200:
 *         description: A lista das pessoas no desporto.
 * 
 * /sport/search/name:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Consulte aqui todos os dados de um respetiv Nome de uma pessoa no desporto.
 *     description: Os dados podem ser obtidos com base a consulta realizada
 *     parameters:
 *       - in: query
 *         required: false
 *         name: name
 *         description: Especifique um Nome.
 *         example: Fernando
 *     responses:
 *       200:
 *         description: A lista das pessoas no desporto.
 * 
 * 
 * /sport/search/estadoatual:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Consulte aqui todos os dados de uma respetiva estado atual de uma pessoa no desporto.
 *     description: Os dados podem ser obtidos com base a consulta realizada
 *     parameters:
 *       - in: query
 *         required: false
 *         name: estadoatual
 *         description: Especifique uma estado atual.
 *         example: Infetado
 *         schema:
 *             enum: ["Infetado", "Recuperado", "Falecido"]
 *     responses:
 *       200:
 *         description: A lista das pessoas no desporto.
 * /sport/search/equipa:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Consulte aqui todos os dados de uma respetiva Equipa.
 *     description: Os dados podem ser obtidos com base a consulta realizada
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         description: Especifique uma equipa.
 *         example: Benfica
 *         schema:
 *             enum: ["Benfica", "Sporting", "Porto"]
 *     responses:
 *       200:
 *         description: A lista das pessoas no desporto.
 * 
 * /sport/search/funcao:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Consulte aqui todos os dados de uma respetiva função de pessoa no desporto.
 *     description: Os dados podem ser obtidos com base a consulta realizada
 *     parameters:
 *       - in: query
 *         name: funcao
 *         required: false
 *         description: Especifique a função.
 *         example: Médico
 *         schema:
 *             enum: ["Jogador", "Treinador", "Fisioterapeuta"]
 *     responses:
 *       200:
 *         description: A lista das pessoas no desporto.
 * 
 */