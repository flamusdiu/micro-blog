'use strict'

// Include the cluster module
const cluster = require('cluster');
const path = require('path');
const Promise = require('bluebird');

let pouchdb;

// Code to run if we're in the master process
if (cluster.isMaster) {	
	start_fork().then(function(){		
		require('./start-electron.js')
		
		// Listen for dying workers
		cluster.on('exit', function (worker) {
			console.log('Pouchdb closed! Restarting!')
			pouchdb = cluster.fork();

		});
		
		cluster.on('online', (worker) => {
			console.log('Electron started successfully!');
		});
	}).catch(function(err) {
		console.log("Program failed to start!");
		console.log(err);
		process.exit();
	});
		
// Code to run if we're in a worker process
} else {
	start_pouchdb().catch(function(error) {
		console.log("Express Pouchdb failed to start!");
		console.log(error);
		process.exit();
	});
}

function start_pouchdb() {
	return new Promise(function(resolve) {
		const PouchDB = require('pouchdb');
		const express = require('express');
		const expressPouchDB = require('express-pouchdb');
		
		const app = express();
		
		app.use('/',expressPouchDB(PouchDB.defaults({prefix: '.db/'}), {
			  overrideMode: {
				include: ['routes/fauxton']
			  }
			})
		);
		
		resolve(app.listen(3000));
	});
}
function start_fork() {
	return new Promise(function (resolve) {
		if (pouchdb) resolve(pouchdb);
			
		pouchdb = cluster.fork();
		resolve(pouchdb);
	});
}