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
 *           description: Nome da sports person.
 *           example: João
 *         nacionalidade:
 *           type: string
 *           description: A nacionalidade da sports person.
 *           example: Portugues
 *         equipa:
 *           type: string
 *           description: Equipa da sports person.
 *           example: Benfica
 *         funcao:
 *           type: string
 *           description: Função da sports person.
 *           example: Jogador
 *         datacovid:
 *           type: string
 *           description: Data de infeção Covid.
 *           example: 12/7/2021
 *         estadoatual:
 *           type: string
 *           description: Estado atual da sports person.
 *           example: Infetado
 * 
 *     Sports:
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
 *     summary: Registre um user.
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
 *     summary: Create a Todo.
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
 *         description: Created a Todo.
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
 *     summary: Lista dos Sports Person.
 *     description: Retorna a lista de Sports Person
 *     responses:
 *       200:
 *         description: OK.
 * 
 *
 * /sport/search/datacovid:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Consulte aqui todos os dados de uma respetiva Data de infeção.
 *     description: Os dados podem ser obtidos com base a consulta realizada
 *     parameters:
 *       - in: query
 *         required: false
 *         name: datacovid
 *         description: Especifique a data no formato dd-mm-yy.
 *         example: 01/04/2019
 *     responses:
 *       200:
 *         description: A lista dos sports.
 *         content:
 *           application/json:
 *             schema:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Sports'
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
 *     responses:
 *       200:
 *         description: A lista dos sports.
 *         content:
 *           application/json:
 *             schema:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Sports'
 * 
 * /sport/search/funcao:
 *   get:
 *     tags: 
 *       - Sports Requests
 *     summary: Consulte aqui todos os dados de uma respetiva função.
 *     description: Os dados podem ser obtidos com base a consulta realizada
 *     parameters:
 *       - in: query
 *         name: funcao
 *         required: false
 *         description: Especifique a função.
 *         example: Médico
 *     responses:
 *       200:
 *         description: A lista dos sports.
 *         content:
 *           application/json:
 *             schema:
 *                   type: number
 *                   items:
 *                     $ref: '#/components/schemas/Sports'
 * 
 */