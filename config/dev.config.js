/**@dev 构建*/
const rollup = require('rollup');
const config = require('./base.config.js');

// 初始化配置文件 可以根据需求扩展config
const watcher = rollup.watch(config);

watcher.on('event', event => {
    switch (event.code) {
        case 'START':
            console.log('监听器正在启动（重启）');
            break;
        case 'BUNDLE_START':
            console.log('构建单个文件束');
            break;
        case 'BUNDLE_END':
            console.log('监听器正在启动（重启）');
            break;
        case 'END':
            console.log('完成所有文件束构建');
            break;
        case 'ERROR':
            console.log('构建时遇到错误');
            break;
        case 'FATAL':
            console.log('遇到无可修复的错误');
            break;
        default:
            break;
    }
});