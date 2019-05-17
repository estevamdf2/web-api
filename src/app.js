const http = require('http');
const express = require("express"); //import express
const status = require('http-status');
const sequelize = require('./database/database');

const app = express(); //instancia express

app.use(express.json());

app.use((request, response, next) => {
		response.status(404).send();
});

app.use((error, request, response, next) => {
		response.status(500).json((error));
});

sequelize.sync((force = true)).then(() => {
	const port = process.env.PORT || 3000;
	const hostname = '127.0.0.1';

	app.set('port',port);

	const server = http.createServer(app);

	server.listen(port, hostname, () => {
			console.log('Servidor em execução em http://${hostname}:${port}/');
			console.log('Servidor conectado ao banco de dados');
	});
});
