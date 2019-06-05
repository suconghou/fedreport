/**@build 构建*/
const rollup = require('rollup');
const uglify = require('rollup-plugin-uglify-es');
const config = require('./base.config.js');

config.output.file = 'dist/fereport.min.js';

async function build() {
    config.plugins.push(uglify());
    const bundle = await rollup.rollup(config);

    const { code, map } = await bundle.generate(config.output);

    await bundle.write(config.output);
    console.log('打包成功');
}

build();