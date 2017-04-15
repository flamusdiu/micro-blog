'use strict'

// Include the cluster module
const cluster = require('cluster');
const path = require('path');

// Code to run if we're in the master process
if (cluster.isMaster) {	
	const PouchDB = require('pouchdb');
	const express = require('express');
	const expressPouchDB = require('express-pouchdb');
	
	const app = express();
	
	PouchDB.defaults({prefix: './db/'});
	
	app.use('/db',expressPouchDB(PouchDB));
	
	app.listen(3000);
	
    // Listen for dying workers
    cluster.on('exit', function (worker) {
		console.log('Electron closed! Exiting!')
        //process.exit();

    });
	
	cluster.on('online', (worker) => {
		console.log('Electron started successfully!')
	});

	cluster.fork();
	
// Code to run if we're in a worker process
} else {
    console.log('Worker %d running!', cluster.worker.id);
	require('./start-electron.js');
}