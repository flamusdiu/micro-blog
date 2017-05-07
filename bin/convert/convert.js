#!/usr/bin/env node

'use strict'

const tools = require('./helper_functions');
const spawnSync = require('child_process').spawnSync;
const fs = require('fs');
const fse = require('fs-extra');
const path = require('path');
const docs_path = "src/docs";
const output_path = path.join(docs_path, "output")
const mammoth = require("mammoth");

fse.readdir(docs_path, function (err, files) {
	if (err) {
		throw err;
	}
	
	files.map (function (file) {
		return path.join(docs_path, file);
	}).filter(function(file) {
		return fse.statSync(file).isFile() && (tools.get_file_ext(file) === "docx" || tools.get_file_ext(file) === "doc");
	}).forEach(function(file) {
		parse(file);
	});
	
	files.map(function(file)  {
		return path.join(docs_path, file);
	}).filter(function(file){
		return fse.statSync(file).isFile() && tools.get_file_ext(file) === "md";
	}).forEach(function(file) {
		fse.copySync(path.join(docs_path,filename + "md"),path.join(output_path,filename + "md"));
	});
	
	function parse(file) {
		const convertedFile = run_mammoth(file);

		fse.writefileSync(path.join(output_path,filename + "md"))
	}
	
	function find_metadata (p, source) {
		try {
			fs.accessSync(path.resolve(p,source  + "yaml"), fs.constants.R_OK);
			return true;
		} catch (err) {
			return false;
		}
			
	}
	
	function run_mammoth(filePath) { 
		return mammoth.convertToMardown({path: filePath})
			.then(function(result){
				const md = result.value; // The generated HTML 
				const messages = result.messages; // Any messages, such as warnings during conversion 
				
				if (messages) {
					console.log(messages);
				}
				
				return md;
		})
		.done();
	}
});
			