/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT 
 *   schemas:
 *     LoginUser:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: The user email.
 *           example: express@gmail.com
 *         password:
 *           type: string
 *           description: The user password.
 *           example: express_password
 *     RegisterUser:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: The user email.
 *           example: express@gmail.com
 *         password:
 *           type: string
 *           description: The user password.
 *           example: express_password
 *         name:
 *           type: string
 *           description: The user name.
 *           example: express_user
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: objectId
 *           description: The user ID.
 *           example: 60535c8a0f1f7e244eee6f79
 *         email:
 *           type: string
 *           description: The user email.
 *           example: express@gmail.com
 *         name:
 *           type: string
 *           description: The user name.
 *           example: express_user
 * 
 * /user/register:
 *   post:
 *     tags: 
 *       - User Requests
 *     summary: Registe um utilizador.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/RegisterUser'
 *     responses:
 *       201:
 *         description: Criou um utilizador.
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
 *       201:
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
 * /user/isAuthorized:
 *   get:
 *     tags: 
 *       - User Requests
 *     summary: Verifique a autorização do utilizador.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Verifique a autorização do utilizador.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
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
 * 
 *
 * /sport/create:
 *   post:
 *     tags: 
 *       - Sports Requests
 *     summary: Intoduza um jogador infetado.
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
 *         description: Intoduza um jogador infetado.
 *         content:
 *           application/json:
 *             schema:
 *               type: string
 *               example: Atleta criado.
 * 
 *       
 * /sport/list:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Lista dos Atletas infetados.
 *     description: Retorna a lista dos atletas infetados
 *     responses:
 *       200:
 *         description: OK.
 *
 * /sport/search/datacovid:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Pesquisa por Data de infeção.
 *     description: Os dados são gerados através dos dados obtidos pelo sistema
 *     parameters:
 *       - in: query
 *         required: false
 *         name: datacovid
 *         description: Especifique a data no formato dd/mm/yy.
 *         example: 18/5/2021
 *     responses:
 *       200:
 *         description: A lista das pessoas no desporto.
 * 
 * 
 * /sport/search/nacionalidade:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Pesquisa por Nacionalidade.
 *     description: Os dados são gerados através dos dados obtidos pelo sistema
 *     parameters:
 *       - in: query
 *         required: false
 *         name: nacionalidade
 *         description: Especifique uma nacionalidade.
 *         example: Portugues
 *         schema:
 *             enum: ["Portugues", "Ingles", "Espanhol"]
 *     responses:
 *       200:
 *         description: A lista das pessoas no desporto.
 * 
 * /sport/search/name:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Pesquisa por Nome.
 *     description: Os dados são gerados através dos dados obtidos pelo sistema
 *     parameters:
 *       - in: query
 *         required: false
 *         name: name
 *         description: Especifique o Nome.
 *         example: Cristiano Ronaldo
 *     responses:
 *       200:
 *         description: A lista das pessoas infetadas no desporto.
 * 
 * 
 * /sport/search/estadoatual:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Pesquisa por estados.
 *     description: Os dados são gerados através dos dados obtidos pelo sistema
 *     parameters:
 *       - in: query
 *         required: false
 *         name: estadoatual
 *         description: Especifique o estado atual.
 *         schema:
 *             enum: ["Infetado", "Recuperado", "Falecido"]
 *     responses:
 *       200:
 *         description: A lista das pessoas no desporto.
 * /sport/search/equipa:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Pesquisa por Equipa.
 *     description: Os dados são gerados através dos dados obtidos pelo sistema
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
 *     summary: Pesquisa por função.
 *     description: Os dados são gerados através dos dados obtidos pelo sistema
 *     parameters:
 *       - in: query
 *         name: funcao
 *         required: false
 *         description: Especifique a função.
 *         example: Médico
 *         schema:
 *             enum: ["Jogador", "Treinador", "Medico","Presidente"]
 *     responses:
 *       200:
 *         description: A lista das pessoas no desporto.
 * 
 */