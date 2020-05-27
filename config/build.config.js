/**@build 构建*/
const uglify = require('rollup-plugin-uglify-es');
const config = require('./base.config.js');

config.output.file = 'dist/fereport.min.js';
config.plugins.push(uglify());


module.exports = config;