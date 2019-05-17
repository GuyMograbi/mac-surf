#!/usr/bin/env node
const shell = require('shelljs');
const argv = require('minimist')(process.argv.slice(2));
const url = argv._[0];


shell.exec(`open -na "Google Chrome" --args "${url}"`);
