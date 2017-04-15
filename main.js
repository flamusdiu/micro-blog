'use strict'

// Include the cluster module
const cluster = require('cluster');
const path = require('path');

let pouchdb;

// Code to run if we're in the master process
if (cluster.isMaster) {	
	
	require('./start-electron.js')
	
    // Listen for dying workers
    cluster.on('exit', function (worker) {
		console.log('Pouchdb closed! Restarting!')
        pouchdb = cluster.fork();

    });
	
	cluster.on('online', (worker) => {
		console.log('Electron started successfully!')
	});
	
	pouchdb = cluster.fork();
	
// Code to run if we're in a worker process
} else {
	const PouchDB = require('pouchdb');
	const express = require('express');
	const expressPouchDB = require('express-pouchdb');
	
	const app = express();
	
	PouchDB.defaults({prefix: './db/'});
	
	app.use('/',expressPouchDB(PouchDB, {
		  overrideMode: {
			include: ['routes/fauxton']
		  }
		})
	);
	
	app.listen(3000);
}