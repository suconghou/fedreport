var performance = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance || {};
performance.now = (function () {
	return (
		performance.now ||
		performance.webkitNow ||
		performance.msNow ||
		performance.oNow ||
		performance.mozNow ||
		function () {
			return new Date().getTime();
		}
	);
})();


export default () => {
	const data = performance.timing || {}
	const start = data.navigationStart;
	if (!start) {
		return;
	}
	const stat = {
		dns: data.domainLookupEnd - data.domainLookupStart, // dns 解析时间
		tcp: data.connectEnd - data.connectStart, // tcp建立时间,内部可能含ssl握手时间
		request: data.responseEnd - data.requestStart, // 内容加载时间,与资源大小,服务器速度,客户带宽相关
		dom: data.domComplete - data.domLoading, // dom树解析和构建时间
		ttfb: data.responseStart - start, // 从开始dns解析到收到服务器响应
		blank: data.domLoading - data.fetchStart, // 白屏时间
		first: data.domComplete - start, // 首屏时间,网上各种算法不一,暂且这样
		total: data.loadEventEnd - start  // 整页时间, load事件
	};
	return stat
}