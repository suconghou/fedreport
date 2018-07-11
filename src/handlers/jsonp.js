export default () => {
	document.createElement = (function() {
		const fn = document.createElement.bind(document);
		return function(type) {
			const result = fn(type);
			if (type === 'script') {
				result.crossOrigin = 'anonymous';
			}
			return result;
		};
	})();
};
