https://github.com/happylindz/blog/issues/5

1.

window.onerror 捕获异常能力比 try-catch 稍微强点，无论是异步还是非异步错误，onerror 都能捕获到运行时错误。

示例：运行时同步错误

```
/**
 * @param {String}  msg    错误信息
 * @param {String}  url    出错文件
 * @param {Number}  row    行号
 * @param {Number}  col    列号
 * @param {Object}  error  错误详细信息
 */
 window.onerror = function (msg, url, row, col, error) {
  console.log('我知道错误了');
  console.log({
    msg,  url,  row, col, error
  })
};
error;
```

示例：异步错误

```
window.onerror = function (msg, url, row, col, error) {
  console.log('我知道异步错误了');
  console.log({
    msg,  url,  row, col, error
  })
};
setTimeout(() => {
  error;
});
```

注意:

1.  window.onerror 需要放在前面执行,如果放在后面
2.  另外 onerror 是无法捕获到网络异常的错误。

网络异常的捕获

```
window.addEventListener('error', (msg, url, row, col, error) => {
  console.log('我知道 404 错误了');
  console.log(
    msg, url, row, col, error
  );
}, true);
```

这个只能捕获资源的异常,还不能捕获 Promise 的 reject

通过 Promise 可以帮助我们解决异步回调地狱的问题，但是一旦 Promise 实例抛出异常而你没有用 catch 去捕获的话，onerror 或 try-catch 也无能为力，无法捕捉到错误。

```
window.addEventListener("unhandledrejection", function(e){
  e.preventDefault()
  console.log(e,'我知道 promise 的错误了');
  console.log(e.reason);
  return true;
});
Promise.reject('promise error');
new Promise((resolve, reject) => {
  reject('promise error');
});
new Promise((resolve) => {
  resolve();
}).then(() => {
  throw 'promise error'
});
```

后续 处理

1.  跨域脚本
2.  jsonp
3.  iframe

(() => {
const endtime = +new Date();
const performance = window.performance;
const perf = typeof performance == 'object';
var app = {
getBlankTime() {
if (perf) {
return firstPaint - performance.timing.navigationStart;
}
}
};

    window.addEventListener('DOMContentLoaded', function() {
    	(function(i, s, o, g, a, m) {
    		(a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    		a.async = 1;
    		a.src = g;
    		m.parentNode.insertBefore(a, m);
    	})(window, document, 'script', 'http://mvc.git.suconghou.cn:8070/home/index/hi.js');
    });

    // with (document) 0[body.appendChild(createElement('script')).src = 'http://mvc.git.suconghou.cn:8070/home/index/hi.js']

})();
