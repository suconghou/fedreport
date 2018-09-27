var performance = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance || {};
performance.now = (function() {
	return (
		performance.now ||
		performance.webkitNow ||
		performance.msNow ||
		performance.oNow ||
		performance.mozNow ||
		function() {
			return new Date().getTime();
		}
	);
})();

export default {
	timing() {
		return performance.timing || {};
	}
};
