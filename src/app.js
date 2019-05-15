const http = require('http');
const express = require('express'); //import express
const status = require('http-status');
const hostname = '127.0.0.1';
const port = 3000;
const app = express(); //instancia express

app.set('port',port); //definição da porta do app

app.use((request, response, next) => {
		response.status(404).send();
});

const server = http.createServer((req,res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Olá api-web\n');
});

server.listen(port, hostname, (req,res) => {
	console.log('Servidor em execução em http://${hostname}:${port}/');
});
